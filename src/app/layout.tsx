import type { Metadata } from "next";
import "./globals.css";
import SideNav from '../components/sidenav';
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Woodwork.ai",
  description: "Premiere league prediction site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <SideNav/>
        {children}
      </body>
    </html>
  );
}
