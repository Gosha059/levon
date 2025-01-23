
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="w-full"><Navbar/> </nav>
        <section>
          {children}
        </section>
      </body>
    </html>
  );
}
