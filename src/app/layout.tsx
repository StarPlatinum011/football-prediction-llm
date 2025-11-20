import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/fonts";
import { ThemeProvider } from "@/lib/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div >
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
