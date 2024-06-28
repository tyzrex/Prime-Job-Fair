export default function SectionSubheader({ text }: {
      text: string
}) {
      return (<>
            <p className="text-[#7A7676] 
                                    md:text-[22px]
                                    lg:text-[24px] font-normal text-center 
                                    mb-5 mt-2
                                    md:mt-3 md:mb-8
                                    lg:mt-5 lg:mb-10">
                  {text}
            </p>
      </>)
}