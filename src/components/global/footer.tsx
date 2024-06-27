import PrimeItClub from "@/assets/it_club_logo 1.png";

import SectionWrapper from "../wrapper/section-wrapper";
import MaxWidthWrapper from "../wrapper/maxwidth-wrapper";
import { NavLink } from "../reusables/nav-link";
import { socials } from "@/constants/socials";

export default function Footer() {
  return (
    <>
      <footer className="text-white bg-cover bg-center bg-[#071121]">
        <SectionWrapper className="lg:pb-10 md:pb-8 pb-6">          <MaxWidthWrapper>
          <div className="flex
          flex-col
          lg:flex-row
          lg:justify-between ">
            <div className="flex flex-col mitems-center">
              <div className="space-y-3 text-center">
                <img src={PrimeItClub} alt="" className="inline-block 
                md:max-w-48
                lg:max-w-52 " />
                <h3 className="text-[14px] md:text-[18px] lg:text-[20px] uppercase   font-normal text-[#fff]">
                  Follow us on
                </h3>
              </div>
              <div className="flex gap-4 flex-wrap mt-6 justify-center">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block w-9 h-9 md:w-10 md:h-10 mr-2"
                  >
                    <div className="border border-gray-600 rounded-full p-[10px]">
                      <img src={social.icon} alt={social.name} />
                    </div>
                  </a>
                ))}

              </div>
            </div>
            <div className="mt-4 md:mt-0
           flex space-x-4 justify-center items-center">
              <NavLink id="aboutSection" title="About" className="
                text-white inline-block md:px-6 md:py-2 font-normal transition hover:text-gray-500 " />
              <NavLink id="companySection" title="Company" className=" text-white inline-block md:px-6 md:py-2  font-normal transition hover:text-gray-500" />
              <NavLink id="highlightsSection" title="Highlights" className=" text-white inline-block md:px-6 md:py-2  font-normal transition hover:text-gray-500" />
              <NavLink id="servicesSection" title="Services" className=" text-white inline-block md:px-6 md:py-2  font-normal transition hover:text-gray-500" />
            </div>
          </div>
          <div className="
          mt-5
          lg:mt-10  w-100 border-b border-solid border-b-white"></div>
          <p className="text-sm text-center mt-2 md:mt-4">Copyright © 2024 Prime IT Club | All Rights Reserved </p>
        </MaxWidthWrapper>
        </SectionWrapper>
      </footer>
    </>
  );
}


