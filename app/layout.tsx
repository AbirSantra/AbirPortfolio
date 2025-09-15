import type { Metadata } from "next";
import { Figtree, Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import LightRays from "@/components/backgrounds/light-rays";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abir Santra | Software Engineer | Founding Engineer at Edzy.ai",
  description:
    "Abir Santra is a fullstack developer and software engineer specializing in web development and design. Currently serving as Founding Engineer at Edzy.ai. Expert in React, Next.js, TypeScript, Node.js, and modern web technologies.",
  keywords: [
    "Abir Santra",
    "fullstack developer",
    "software engineer",
    "web developer",
    "web designer",
    "frontend developer",
    "backend developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Node.js developer",
    "JavaScript developer",
    "Edzy.ai",
    "founding engineer",
    "full stack engineer",
    "software development",
    "web development",
    "UI/UX developer",
  ],
  authors: [{ name: "Abir Santra" }],
  creator: "Abir Santra",
  publisher: "Abir Santra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} ${ibmPlexSans.variable} font-primary antialiased scroll-smooth`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className="absolute top-6 inset-x-0 z-50 flex justify-center items-center">
            <Navbar />
          </header>
          <main className="mx-auto w-full">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
