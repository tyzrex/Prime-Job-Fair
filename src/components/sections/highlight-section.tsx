import SectionHeader from "../typography/section-header";
import GridWrapper from "../wrapper/grid-wrapper";
import MaxWidthWrapper from "../wrapper/maxwidth-wrapper";
import SectionWrapper from "../wrapper/section-wrapper";
import HighlightCard from "../elements/highlight-card";
import { highlightsData } from "@/constants/highlights";

export default function HighlightSection() {
      return (
            <>
            <div id="highlightsSection">
                  <SectionWrapper>
                        <MaxWidthWrapper>
                              <SectionHeader frontText="HIGHLIGHTS OF THE " backText="EVENT" className="text-center text-[#000]" >
                                    <p className="text-[#7A7676] 
                                    md:text-[22px]
                                    lg:text-[24px] font-normal text-center 
                                    mb-5 mt-2
                                    md:mt-3 md:mb-8
                                    lg:mt-5 lg:mb-10">Connect with Industry Giants and Unleash Your Potential</p>
                              </SectionHeader>
                              <GridWrapper className="md:grid-cols-1 lg:grid-cols-3">
                                    {
                                          highlightsData.map((highlight) => (
                                                <>
                                                      <HighlightCard id={highlight.id} title={highlight.title
                                                      }
                                                            desc={highlight.desc}
                                                            image={highlight.image}
                                                            background={highlight.color}
                                                            
                                                      />
                                                </>
                                          ))
                                    }
                              </GridWrapper>
                        </MaxWidthWrapper>
                  </SectionWrapper>
                  </div>
            </>
      )
}