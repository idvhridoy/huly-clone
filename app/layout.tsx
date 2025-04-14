import type { Metadata } from "next";
import { Inter as FontSans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";

const inter = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyCyberBase | AI-Powered Code Editor",
  description: "Supercharge your coding with our AI-powered editor that provides real-time suggestions, error detection, and seamless collaboration.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}>
        <div className="relative">
          {/* Background grid overlay */}
          <div className="fixed inset-0 grid-bg pointer-events-none z-[-1] opacity-[0.02]"></div>
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
