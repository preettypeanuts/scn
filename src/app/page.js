import { CTASection } from "@/components/cta";
import { HeroMain } from "@/components/hero-main";
import { HightlightPoints } from "@/components/hightlight-points";
import { OpeningBrief } from "@/components/opening-brief";
import { OperationalMap } from "@/components/operational-map";
import { ProductServices } from "@/components/product-services";

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
