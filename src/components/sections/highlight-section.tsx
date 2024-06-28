import SectionHeader from "../typography/section-header";
import GridWrapper from "../wrapper/grid-wrapper";
import MaxWidthWrapper from "../wrapper/maxwidth-wrapper";
import SectionWrapper from "../wrapper/section-wrapper";
import HighlightCard from "../elements/highlight-card";
import { highlightsData } from "@/constants/highlights";
import SectionSubheader from "../typography/section-subheader";

export default function HighlightSection() {
      return (
            <>
                  <div id="highlightsSection">
                        <SectionWrapper >
                              <MaxWidthWrapper>
                                    <SectionHeader frontText="HIGHLIGHTS OF THE " backText="EVENT" className="text-center text-[#000]" >
                                          <SectionSubheader text="Connect with Industry Giants and Unleash Your Potential"/>
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