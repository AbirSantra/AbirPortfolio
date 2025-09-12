import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
