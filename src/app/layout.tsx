import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased p-8 md:px-16 h-screen">
        {/* <ThemeToggle /> */}
        {children}
      </body>
    </html>
  );
}
