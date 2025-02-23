import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlavorSpot",
  description: "Create your profile and share your favorite flavors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
