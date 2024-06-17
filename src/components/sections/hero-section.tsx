import MaxWidthWrapper from "@/components/wrapper/maxwidth-wrapper";
import SectionWrapper from "@/components/wrapper/section-wrapper";
import HeroCard from "../elements/hero-card";
import HeroImg from "../elements/hero-img";
import GridWrapper from "../wrapper/grid-wrapper";
import JobFair from "@/assets/hero_jobfair.png"

export default function HeroSection() {
      return (
            <SectionWrapper className="">
                  <MaxWidthWrapper>
                        <GridWrapper>
                              <HeroCard />
                              <HeroImg img={JobFair} className="order-1"/>
                        </GridWrapper>
                  </MaxWidthWrapper>
            </SectionWrapper>
      )
}