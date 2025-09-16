import { NextRequest, NextResponse } from "next/server";
import { checkAdminAuth } from "@/lib/auth-utils";
import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  // Check auth first
  const authError = checkAdminAuth(request);
  if (authError) return authError;

  try {
    const body = await request.json();

    const filePath = path.join(process.cwd(), "data", "hero-content.json");

    fs.writeFileSync(filePath, JSON.stringify(body, null, 2));

    revalidatePath("/"); // Home page
    revalidatePath("/admin"); // Admin page

    return NextResponse.json({ message: "Hero content updated successfully" });
  } catch (error) {
    console.error("Error updating hero content:", error);
    return NextResponse.json(
      { error: "Failed to update hero content" },
      { status: 500 }
    );
  }
}
