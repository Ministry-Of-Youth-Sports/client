import { NextResponse, NextRequest } from "next/server";
import {
  authRoutes,
  DEFAULT_LOGIN_REDIRECT_URL,
  publicRoutes,
} from "../routes";
import { verifyToken } from "./utils/verifyToken";

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;

  // Get token from cookies
  const token = request.cookies.get("token")?.value;

  // Check if user is authenticated by verifying token with backend
  let isAuthenticated = false;
  if (token) {
    isAuthenticated = (await verifyToken(token)).success;
  }

  // get routes-----
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  // check if route is auth route------
  if (isAuthRoute) {
    if (isAuthenticated) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT_URL, nextUrl));
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
