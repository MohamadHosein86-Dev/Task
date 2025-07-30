import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Authentication App",
  description: "A simple authentication app with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{ 
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        margin: 0,
        padding: 0,
        lineHeight: 1.6
      }}>
        {children}
      </body>
    </html>
  );
}
