import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = ['/','/sign-in', '/sign-up','/about'];

export default authMiddleware({
  publicRoutes:[isPublicRoute],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};