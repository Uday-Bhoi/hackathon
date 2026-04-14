import type { Metadata } from "next";
import { Pixelify_Sans, VT323, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

// Pixel theme fonts — preload: false because they're only activated
// when the user switches to the pixel theme; eagerly preloading them
// triggers "preloaded but not used" browser warnings.
const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: false,
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: ["400"],
  subsets: ["latin"],
  preload: false,
  display: "swap",
});

// Default (particles) theme fonts — always preloaded
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Antigravity | BVIMIT National Hackathon 2026",
  description:
    "Join ANTIGRAVITY — BVIMIT's 24-hour national hackathon. Code, create, and collaborate at Navi Mumbai's premier student innovation event.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pixelify.variable} ${vt323.variable} ${jakarta.variable} ${outfit.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
