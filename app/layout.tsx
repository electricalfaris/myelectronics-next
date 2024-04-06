import type { Metadata } from "next";
import Nav from "./Nav";

import "./globals.css";

export const metadata: Metadata = {
  title: "My Electronics",
  description: "Generated by create next app - electricalfaris@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page-wrapper">
          <Nav />
          <main>
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}
