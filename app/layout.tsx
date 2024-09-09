import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTopAffix from "@/components/ScrollToTopAffix";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canuto's Portifólio",
  description: "Portifólio de desenvolverdor web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTopAffix />
        </ThemeProvider>
      </body>
    </html>
  );
}
