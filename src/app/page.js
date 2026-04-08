import { CTASection } from "@/components/cta";
import { HeroMain } from "@/components/hero-main";
import { HightlightPoints } from "@/components/hightlight-points";
import { OpeningBrief } from "@/components/opening-brief";
import { OperationalMap } from "@/components/operational-map";
import { ProductServices } from "@/components/product-services";

export const metadata = {
  title: "PT Semesta Cendekia Nusantara | Supplier Benih Tebu Berkualitas Nasional",
  description:
    "PT Semesta Cendekia Nusantara adalah penyedia benih tebu berkualitas tinggi untuk kebutuhan proyek skala besar di Indonesia. Menyediakan benih siap tanam, distribusi nasional, dan dukungan teknis profesional.",
  openGraph: {
    title: "PT Semesta Cendekia Nusantara | Benih Tebu Berkualitas",
    description:
      "Penyedia benih tebu siap tanam untuk proyek skala besar. Distribusi nasional dengan kualitas terjamin.",
    url: "https://www.scn.id",
    siteName: "PT Semesta Cendekia Nusantara",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Benih Tebu Berkualitas Nasional",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  keywords: [
    "benih tebu",
    "jual benih tebu",
    "supplier benih tebu",
    "bibit tebu berkualitas",
    "benih tebu siap tanam",
    "pengadaan benih tebu",
    "distribusi benih tebu Indonesia",
    "benih tebu skala besar",
    "supplier tebu Indonesia",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Supplier Benih Tebu Berkualitas",
    description:
      "Solusi benih tebu untuk proyek skala besar di Indonesia.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
}
export default function Home() {
  return (
    <>
      <HeroMain />
      <OpeningBrief />
      <HightlightPoints />
      <ProductServices />
      <OperationalMap />
      <CTASection />
    </>
  );
}

