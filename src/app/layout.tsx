import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { LayoutProps } from "@/types";
import Layout from "@/components/layout/Layout";
import { NEXT_APP_DESCRIPTION, NEXT_APP_NAME } from "@/libs/constants";


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
    template: `%s || ${NEXT_APP_NAME}`,
    default: NEXT_APP_NAME
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
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
