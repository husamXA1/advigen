import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AdviGen",
  description: "A simple advice generator app to get random advices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
