import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snippet Studio",
  description: "Snippet Studio is a platform for sharing code snippets and collaborating with other developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
        >
          {/* Message displayed on mobile devices */}
          <div className="md:hidden fixed inset-0 flex items-center justify-center bg-gray-950 bg-opacity-80 text-center text-gray-400 hover:text-gray-300 transition-colors text-lg p-4">
            Please use a desktop for a better experience.
          </div>
          <ConvexClientProvider>
            <div className="hidden md:block">
              {children}
            </div>
          </ConvexClientProvider>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
