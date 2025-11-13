import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nearbyshops.online"),
  title: {
    default: "Nearbyshops - Shop Local, Support Communities",
    template: "%s | Nearbyshops",
  },
  description: "Local stores are the heart of our communities. Nearbyshops empowers small businesses to list their products online and compete on a level playing field. Discover, support, and shop local to keep your community strong.",
  keywords: [
    "local shopping",
    "shop local",
    "local businesses",
    "community support",
    "small business",
    "local stores",
    "nearby shops",
    "local economy",
    "community shopping",
    "support local",
  ],
  authors: [{ name: "Nearbyshops" }],
  creator: "Nearbyshops",
  publisher: "Nearbyshops",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nearbyshops.online",
    siteName: "Nearbyshops",
    title: "Nearbyshops - Shop Local, Support Communities",
    description: "Local stores are the heart of our communities. Nearbyshops empowers small businesses to list their products online and compete on a level playing field. Discover, support, and shop local to keep your community strong.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Nearbyshops Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nearbyshops - Shop Local, Support Communities",
    description: "Local stores are the heart of our communities. Nearbyshops empowers small businesses to list their products online and compete on a level playing field.",
    images: ["/logo.png"],
    creator: "@nearbyshops",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
