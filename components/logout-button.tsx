"use client";

import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth", {
        method: "DELETE",
      });
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="hover:cursor-pointer"
      aria-label="logout button"
    >
      <LogOutIcon className="size-5" />
    </button>
  );
};
export default LogoutButton;
