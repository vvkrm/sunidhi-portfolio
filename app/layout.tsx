import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  alternates: { canonical: site.url },
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.url,
    type: "website",
    siteName: site.name,
    images: [
      {
        url: `${site.url}/images/sunidhi.jpg`,
        width: 878,
        height: 1120,
        alt: site.hero.photoAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${baloo.variable} ${nunito.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-2 focus:font-bold focus:text-cocoa"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
