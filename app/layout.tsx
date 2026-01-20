import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/whatsAppbutton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmileCare - Cabinet Dentaire à Agadir | Soins Dentaires Professionnels",
  description: "Cabinet dentaire professionnel à Agadir. Soins dentaires de qualité avec des praticiens expérimentés. Prenez rendez-vous dès aujourd'hui.",
  keywords: ["dentiste", "cabinet dentaire", "Agadir", "soins dentaires", "SmileCare", "implants dentaires", "détartrage"],
  authors: [{ name: "SmileCare" }],
  creator: "SmileCare",
  publisher: "SmileCare",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "SmileCare - Cabinet Dentaire à Agadir",
    description: "Cabinet dentaire professionnel à Agadir. Soins dentaires de qualité avec des praticiens expérimentés.",
    type: "website",
    locale: "fr_FR",
    url: "https://smilecare-agadir.com",
    siteName: "SmileCare",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SmileCare Cabinet Dentaire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileCare - Cabinet Dentaire à Agadir",
    description: "Soins dentaires professionnels à Agadir",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <WhatsAppButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}