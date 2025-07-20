import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LayoutProps } from "@/types";
import { NEXT_APP_DESCRIPTION, NEXT_APP_NAME } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: NEXT_APP_NAME,
    template: `%s | ${NEXT_APP_NAME}`
  },
  description: NEXT_APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
