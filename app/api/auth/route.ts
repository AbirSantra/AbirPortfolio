import { NextRequest, NextResponse } from "next/server";

// Login Route
export async function POST(request: NextRequest) {
  try {
    const { password, username } = await request.json();

    if (
      password === process.env.ADMIN_PASSWORD &&
      username === process.env.ADMIN_USERNAME
    ) {
      const response = NextResponse.json({
        success: true,
        message: "Authentication Successful",
      });

      response.cookies.set("admin-auth", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      {
        success: false,
        error: "AUTHENTICATION_FAILED",
        message: "Authentication Failed",
      },
      {
        status: 401,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "INVALID_REQUEST",
        message: error instanceof Error ? error.message : "Invalid request",
      },
      {
        status: 400,
      }
    );
  }
}

// Logout Route
export async function DELETE() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });
  response.cookies.delete("admin-auth");
  return response;
}
