"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useLogin from "@/hooks/useLogin";
import { useEffect, useState } from "react";
import { SkeltonCard } from "../global/SkeltonCard";
import { useAuth } from "@/providers/AuthProvider";

const LoginForm = () => {
  const [isMounted, setIsMounted] = useState(false);

  // get the handelLogin function from useLogin hook;
  const { handelLogin } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useLogin();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="bg-popover-foreground h-screen flex justify-center items-center">
        <SkeltonCard />
      </div>
    );
  }

  return (
    <div className="bg-popover-foreground h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(handelLogin)}
        className="border-muted-foreground border-[1px] rounded-2xl p-8 min-w-[200px] sm:min-w-[600px] bg-primary"
      >
        <h1 className="text-2xl text-center text-white mb-14"> الدخول</h1>

        <div className="mb-8">
          <label htmlFor="email" className="text-white mb-4 block">
            البريد الالكتروني
          </label>
          <Input
            dir="ltr"
            id="email"
            type="email"
            autoComplete="email"
            placeholder="البريد الالكتروني"
            className="border-muted-foreground text-white"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="pass" className="text-white mb-4 block">
            كلمة المرور
          </label>
          <Input
            dir="ltr"
            id="pass"
            type="password"
            placeholder="كلمة المرور"
            autoComplete="password"
            className="border-muted-foreground text-white"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          disabled={isSubmitting}
          className="w-full mt-8 cursor-pointer"
          variant={"secondary"}
        >
          {isSubmitting ? "جاري تسجيل الدخول" : "تسجيل الدخول"}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
