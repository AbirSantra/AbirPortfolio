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
    <html lang="en" className="dark">
      <body className="relative scroll-smooth bg-neutral-50 font-Poppins  text-neutral-950 antialiased transition-all duration-200 ease-linear dark:bg-neutral-900 dark:text-white">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="mx-auto w-full max-w-[1140px]">{children}</main>
      </body>
    </html>
  );
}
