import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Eyebrow Shaping in Caversham, Perth | Pooja Sharma",
    template: `%s | ${site.name}`,
  },
  description:
    "Looking for eyebrow shaping in Caversham, Perth? Book a personal brow shaping appointment with Pooja Sharma.",
  applicationName: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "Eyebrow Shaping in Caversham, Perth | Pooja Sharma",
    description:
      "Personal brow shaping with Pooja Sharma in Caversham, Perth, Western Australia.",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyebrow Shaping in Caversham, Perth | Pooja Sharma",
    description:
      "Personal brow shaping with Pooja Sharma in Caversham, Perth, Western Australia.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the inline script below adds a `js` class to
    // <html> before React hydrates, which is an intentional class mismatch.
    <html
      lang="en-AU"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks JS as available before first paint so scroll-reveal styles
            only hide content when the script that reveals it can run. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
