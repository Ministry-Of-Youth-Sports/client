"use client";

import { createContext, use, useCallback, useEffect, useState } from "react";

import { login } from "@/app/actions";
import { loginFormSchema } from "@/lib/validations/LoginFormSchema";
import { getTokenFromCookies } from "@/utils/auth/getTokenFromCookies";
import { removeTokenFromCookies } from "@/utils/auth/removeTokenFromCookies";
import { setTokenInCookies } from "@/utils/auth/setTokenInCookies";
import { verifyToken } from "@/utils/auth/verifyToken";

import { toast } from "sonner";
import z from "zod";
import { redirect } from "next/navigation";

type AuthProviderContext = {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  handelLogin: (formData: z.infer<typeof loginFormSchema>) => Promise<void>;
  handelLogout: () => void;
};

type User = {
  email: string;
  role: string;
};

interface LoginResponse {
  data: { user: User; token: string; message?: string };
  success: boolean;
}

const AuthContext = createContext<AuthProviderContext | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handelLogin = async (formData: z.infer<typeof loginFormSchema>) => {
    const {
      data: { user, token, message },
      success,
    } = (await login(formData)) as LoginResponse;

    if (!success) {
      toast.error(
        message === "Invalid credentials"
          ? "البريد الإلكتروني أو كلمة المرور غير صحيحة"
          : "حدث خطأ في تسجيل الدخول",
        {
          style: {
            backgroundColor: "#8B0000",
            color: "#fff",
            borderColor: "#8B0000",
          },
        }
      );
      return;
    }

    toast.success("تم تسجيل الدخول بنجاح");

    // update state values----
    setUser(user);
    setIsAuthenticated(true);
    setToken(token);
    setTokenInCookies(token);

    redirect(`/dashboard-admin/${user.role}`);
  };

  // Logout function---
  const handelLogout = useCallback(() => {
    removeTokenFromCookies(); // Remove token from cookies---
    setToken(null);
    setUser(null);
    setIsAuthenticated(false); // butting token in cookies---

    toast.success("تم تسجيل الخروج بنجاح");

    // redirect user-----
    redirect("/login");
  }, []);

  // Initialize auth state on component mount ---
  useEffect(() => {
    const initializeAuth = async () => {
      // Get token from cookies---
      const storedToken = getTokenFromCookies();

      // Verify token with backend-----
      if (storedToken) {
        const { success, email, role } = await verifyToken(storedToken);

        // create the user object--
        const user = {
          email,
          role,
        };

        // Token is valid, restore auth state----
        if (success) {
          setUser(user);
          setToken(storedToken);
          setIsAuthenticated(true);
        } else {
          // Token is invalid or expired, clear everything
          console.log("Token invalid/expired, clearing auth state");
          handelLogout();
        }
      }
    };

    initializeAuth();
  }, [handelLogout]);

  return (
    <AuthContext
      value={{
        user,
        isAuthenticated,
        token,
        handelLogin,
        handelLogout,
      }}
    >
      {children}
    </AuthContext>
  );
};

export const useAuth = () => {
  const context = use(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
