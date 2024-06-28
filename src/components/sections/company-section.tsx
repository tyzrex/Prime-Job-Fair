import { companyData } from "@/constants/companies";
import CompanyBg from "../elements/companyBg";
import SectionHeader from "../typography/section-header";
import SectionSubheader from "../typography/section-subheader";
import MaxWidthWrapper from "../wrapper/maxwidth-wrapper";
import SectionWrapper from "../wrapper/section-wrapper";
import CompanyImg from "../elements/company-img";
export default function CompanySection() {
      return (<>
            <div id="companySection">
                  <SectionWrapper className="pb-6">
                        <MaxWidthWrapper>
                              <SectionHeader frontText="Participating" backText="Companies" className="text-center" />
                              <SectionSubheader text="Connect with Industry Giants and Unleash Your Potential" />
                              <CompanyBg>
                                    <div className="h-full w-full flex justify-center lg:p-[22px]  items-center">
                                          <div className="grid grid-cols-3  gap-4 place-items-center">
                                                {companyData.map((company) => (
                                                      <>
                                                         <CompanyImg img={company.img} alt={company.alt}/>
                                                      </>
                                                ))}
                                          </div>
                                    </div>

                              </CompanyBg>
                        </MaxWidthWrapper>
                  </SectionWrapper>
            </div>
      </>)
}