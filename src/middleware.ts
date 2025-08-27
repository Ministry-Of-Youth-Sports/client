import { NextResponse, NextRequest } from "next/server";
import {
  authRoutes,
  DEFAULT_LOGIN_REDIRECT_URL,
  publicRoutes,
} from "../routes";

export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  const user = false;

  // get routes-----
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  // check if route is auth route------
  if (isAuthRoute) {
    if (user) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT_URL, nextUrl));
    }
    return NextResponse.next();
  }

  // check if route is not public and there is no user (protected routes)----
  if (!isPublicRoute && !user) {
    return Response.redirect(new URL("/login", nextUrl));
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
