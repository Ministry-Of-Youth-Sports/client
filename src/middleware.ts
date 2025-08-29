import { NextResponse, NextRequest } from "next/server";
import {
  authRoutes,
  DEFAULT_LOGIN_REDIRECT_URL,
  publicRoutes,
  roleRoutes,
} from "../routes";
import { verifyToken } from "./utils/auth/verifyToken";

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;

  // Get token from cookies
  const token = request.cookies.get("token")?.value;

  // Check if user is authenticated by verifying token with backend
  let isAuthenticated = false;
  let userRole = null;
  if (token) {
    const verification = await verifyToken(token);
    isAuthenticated = verification?.success ?? false;
    userRole = verification?.role ?? null;
  }

  // get routes-----
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  // check if route is auth route------
  if (isAuthRoute) {
    if (isAuthenticated && userRole) {
      return Response.redirect(
        new URL(`${DEFAULT_LOGIN_REDIRECT_URL}/${userRole}`, nextUrl)
      );
    }
    return NextResponse.next();
  }

  // If user is trying to access protected routes without valid authentication
  // redirect them to login
  if (!isPublicRoute && !isAuthenticated) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  // If token exists but is invalid/expired, clear the cookie and redirect to login
  if (token && !isAuthenticated) {
    const response = NextResponse.redirect(new URL("/login", nextUrl));
    response.cookies.delete("token");
    return response;
  }

  // Role-based access control for dashboard-admin/* pages
  if (
    isAuthenticated &&
    userRole &&
    nextUrl.pathname.startsWith("/dashboard-admin")
  ) {
    const parts = nextUrl.pathname.split("/"); // ["", "dashboard-admin", "news", ...]
    const section = parts[2]; // might be undefined for /dashboard-admin

    if (!section) {
      // If path is exactly /dashboard-admin, redirect to the user's role page
      return NextResponse.redirect(
        new URL(`/dashboard-admin/${userRole}`, nextUrl)
      );
    }

    if (roleRoutes.includes(section) && section !== userRole) {
      // user trying to access another role page -> redirect
      return NextResponse.redirect(
        new URL(`/dashboard-admin/${userRole}`, nextUrl)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
