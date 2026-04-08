import "./globals.css";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const pjs = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://scn.id"),

  title: {
    default:
      "PT Semesta Cendekia Nusantara | Supplier Benih Tebu Berkualitas",
    template: "%s | PT Semesta Cendekia Nusantara",
  },

  description:
    "PT Semesta Cendekia Nusantara adalah supplier benih tebu berkualitas untuk kebutuhan proyek skala besar di Indonesia. Menyediakan benih siap tanam, distribusi nasional, dan layanan profesional.",

  keywords: [
    "benih tebu",
    "supplier benih tebu",
    "jual benih tebu",
    "bibit tebu berkualitas",
    "benih tebu Indonesia",
    "pengadaan benih tebu",
    "distribusi benih tebu nasional",
  ],

  openGraph: {
    title:
      "PT Semesta Cendekia Nusantara | Benih Tebu Berkualitas",
    description:
      "Supplier benih tebu untuk proyek skala besar dengan distribusi nasional dan kualitas terjamin.",
    url: "https://scn.id",
    siteName: "PT Semesta Cendekia Nusantara",
    images: [
      {
        url: "https://scn.id/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Benih Tebu Berkualitas",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Supplier Benih Tebu Berkualitas",
    description:
      "Solusi benih tebu untuk proyek skala besar di Indonesia.",
    images: ["https://scn.id/images/og-default.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="id"
      className={`${pjs.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        {children}

        <Footer />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PT Semesta Cendekia Nusantara",
              url: "https://scn.id",
              logo: "https://scn.id/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-811-2120-3090",
                contactType: "customer service",
                areaServed: "ID",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
