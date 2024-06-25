import HeroCard from "../elements/hero-card";
import HeroImg from "../elements/hero-img";
import GridWrapper from "../wrapper/grid-wrapper";
import MaxWidthWrapper from "../wrapper/maxwidth-wrapper";
import SectionWrapper from "../wrapper/section-wrapper";
import img1 from "@/assets/Young_woman_working_on_a_laptopYoung_woman_working_on_a_laptop.png"

export default function BannerSection() {
      return (<>
            <div id="serviceSection">
                  <SectionWrapper>
                        <MaxWidthWrapper>
                              <GridWrapper className="gap-y-0">
                                    <HeroCard className="" title="Unlock Your Tech Future: Welcome to the IT Job Fair" highlight="Job Fair" desc="Embark on a Journey Towards Success as You Explore Diverse Tech Roles and Networking Opportunities" />
                                    <HeroImg img={img1} className="order-2 h-[300px] md:h-[400px] lg:h-auto" />
                              </GridWrapper>
                        </MaxWidthWrapper>
                  </SectionWrapper>
            </div>

      </>)
}