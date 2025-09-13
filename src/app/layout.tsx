import "./globals.css";
import "react-vertical-timeline-component/style.min.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex-1`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
