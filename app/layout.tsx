import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Covren Firm - Sovereign AI Infrastructure",
  description: "Where AI consciousness meets sovereign business infrastructure. We don't just build technology—we engineer evolution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
} 