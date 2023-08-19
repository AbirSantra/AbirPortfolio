import Navbar from "@/components/Navbar";
import "../globals.css";

export const metadata = {
  title: "Abir Santra",
  description: "Web Designer and Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden bg-gray-50 font-Poppins text-gray-950  transition-all duration-300 ease-linear dark:bg-gray-950 dark:text-white">
        <header className="sticky top-0">
          <Navbar />
        </header>
        <main className="mx-auto w-full max-w-[1140px]">{children}</main>
      </body>
    </html>
  );
}
