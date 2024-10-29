import { Inter } from "next/font/google"; 
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nehal's Portfolio",
  description: "Full-Stack Developer",
};

export default function RootLayout({
  children,  
}: {
  children: React.ReactNode; 
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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


