import Navbar from "@/components/Navbar";
import "../globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Abir Santra | Web Designer and Developer",
  description:
    "Abir Santra is a passionate Web Designer and Developer from India specializing in the MERN stack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="scroll-smooth bg-neutral-50 font-Poppins  text-neutral-950 antialiased transition-all duration-200 ease-linear  dark:bg-neutral-900 dark:text-white ">
        <div className="fixed -z-10 h-full w-full bg-[radial-gradient(#cbcbcba6_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_30%,transparent_100%)] dark:bg-[radial-gradient(#353535a6_1px,transparent_1px)]"></div>
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="mx-auto w-full max-w-[1140px]">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
