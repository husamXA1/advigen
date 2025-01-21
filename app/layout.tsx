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
      <head>
        <link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
