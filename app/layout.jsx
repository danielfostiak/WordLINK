import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Word Link",
  description: "Go from bored to excited in one click.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="tom">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
