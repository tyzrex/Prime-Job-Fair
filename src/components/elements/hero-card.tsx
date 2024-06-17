import CTAButton from "../reusables/cta-button";

export default function HeroCard() {
      return (
            <div className="
            order-2
            md:order-1
            row-span-1 flex justify-center items-center ">
                  <div className="border-8 md:border-[12px]
                  lg:border-[16px] border-[#DBDDC6]  ">
                        <div className="bg-white py-5 px-4">
                              <h1 className="font-bold text-2xl
                              leading-9 lg:font-bold lg:text-5xl 
md:text-3xl md:font-semibold
                              lg:leading-[64px] md:leading-10 textsec">
                                    Unlock Your Future: Join the <span className="text-red-600 mr-2 
                                    
                                    lg:mr-3">Ultimate</span>
                                    Job Fair Experience!
                              </h1>
                              <p className="text-[14px] font-normal 
                              lg:text-[20px] 
                                        md:text-[18px]

                              text-[#7A6F6F]
                              py-2
                              md:py-3">Discover Opportunities, Forge Connections, and Propel Your Career Forward</p>
                              <div className="flex">
                                    <a href="#">
                                          <CTAButton
                                                className="hover:bg-fuchsia-600 hover:text-white transition-colors duration-500" />
                                    </a>
                              </div>

                        </div>
                  </div>
            </div>

      )
}