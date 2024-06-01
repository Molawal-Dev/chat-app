import { Inter } from "next/font/google";
import "./globals.css";

import {ClerkProvider} from '@clerk/nextjs'
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevTalk",
  description: "An app where developers can interact with each other",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <div className="">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
