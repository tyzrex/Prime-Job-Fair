import MaxWidthWrapper from "@/components/wrapper/maxwidth-wrapper";
import SectionWrapper from "@/components/wrapper/section-wrapper";
import HeroCard from "../elements/hero-card";
import HeroImg from "../elements/hero-img";
import GridWrapper from "../wrapper/grid-wrapper";
import JobFair from "@/assets/hero_jobfair.png"
import { useRef } from "react";

export default function HeroSection() {
      const homeRef = useRef<HTMLDivElement>(null);

      return (
            <div ref={homeRef}>
            <SectionWrapper className="" >
                  <MaxWidthWrapper>
                        <GridWrapper>
                              <HeroCard className="bg-white border-8 md:border-[12px]
                  lg:border-[16px] border-[#DBDDC6]  bg-white"
                                    title="Unlock Your Future: Join the Ultimate Job Fair Experience!"
                                    desc="Discover Opportunities, Forge Connections, and Propel Your Career Forward"
                                    highlight="Ultimate"

                              />
                              <HeroImg img={JobFair} className="order-1" />
                        </GridWrapper>
                  </MaxWidthWrapper>
            </SectionWrapper>
            </div>
      )
}