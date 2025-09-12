import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased flex-1`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
