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
      <body className="font-Poppins">{children}</body>
    </html>
  );
}
