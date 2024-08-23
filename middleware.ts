import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import auth from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const currentUser = await auth();

  if (!currentUser) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/seller"],
};
