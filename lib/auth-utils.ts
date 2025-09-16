import { NextRequest, NextResponse } from "next/server";

export function checkAdminAuth(request: NextRequest): NextResponse | null {
  const authCookie = request.cookies.get("admin-auth");

  if (!authCookie || authCookie.value !== "authenticated") {
    return NextResponse.json(
      { error: "Unauthorized - Admin access required" },
      { status: 401 }
    );
  }

  return null; // Auth passed
}
