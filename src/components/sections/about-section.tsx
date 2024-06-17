import HeroCard from "../elements/hero-card";
import HeroImg from "../elements/hero-img";
import SectionHeader from "../typography/section-header";
import SectionInfo from "../typography/section-info";
import GridWrapper from "../wrapper/grid-wrapper";
import MaxWidthWrapper from "../wrapper/maxwidth-wrapper";
import SectionWrapper from "../wrapper/section-wrapper";
import JobFair from "@/assets/what_is_jobfair.png"
export default function AboutSection() {
      return (
            <>
                  <SectionWrapper>
                        <MaxWidthWrapper>
                              <GridWrapper>
                                    <HeroImg img={JobFair} />
                                    <div className="flex justify-center items-center flex-col
                                                ">
                                          <SectionHeader
                                                frontText="What is Job" backText="Fair ?"
                                          />
                                       <SectionInfo>
                                       <p >With over three decades in Nepal's automotive industry, Suzuki has established itself as The Number 1 selling 4-Wheeler brand. Its extensive lineup of SUVs and compact cars cater to diverse customer needs.</p>
                                       <p>Recently, Suzuki has introduced the iconic "Jimny" and the modern urban SUV, "Fronx," adding to the existing Grand Vitara and Brezza models. This impressive range has cemented Suzuki's position as a prominent SUV brand in Nepal.</p>
                                       </SectionInfo>
                                                                                   </div>
                              </GridWrapper>
                        </MaxWidthWrapper>
                  </SectionWrapper>
            </>
      )
}