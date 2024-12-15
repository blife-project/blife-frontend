import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import DefaultLayout from "@/component/shared/layout/DefaultLayout";
import AuthLayout from "@/component/shared/layout/AuthLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blife",
  description: "Manage everything on your life",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = (await headers()).get("current-path");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!pathname || pathname.startsWith("/auth") ? (
          <AuthLayout>{children}</AuthLayout>
        ) : (
          <DefaultLayout>{children}</DefaultLayout>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
