import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Smart Recipe Generator",
  description: "Generate recipes from your pantry and images, with filters and personalization.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container-py">{children}</main>
      </body>
    </html>
  );
}
