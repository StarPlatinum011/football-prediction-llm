import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/fonts";
import { ThemeProvider } from "@/components/theme-provider";

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
      <body
        className={`${inter.className} antialiased flex h-screen flex-col md:flex-row md:overflow-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          
          <div className="grow p-6 md:overflow-y-auto md:p-12 bg-background">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
