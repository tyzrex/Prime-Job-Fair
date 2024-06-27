import React from "react"

interface HighlightCardProps {
      id: number,
      title: string,
      desc: string,
      image: string,
      background: string

}
export default function HighlightCard({ id, title, desc, image, background }: HighlightCardProps) {
      return (
            <React.Fragment key={id}>
                  <div className="row-span-1 lg:flex justify-center items-center">
                        <div className={`${background} rounded-md px-8 py-5 lg:p-10 text-[#fff] drop-shadow-lg flex 
                        flex-col
                        md:flex-row
                        lg:flex-col justify-center items-center space-y-5`}>
                              <div className="
                              space-y-1
                              md:space-y-2
                              lg:space-y-3">
                                    <h3 className="font-medium  
text-base
                                    md:text-xl
                                    lg:text-2xl">{id}. {title}</h3>
                                    <p className="text-[14px] 
                                    md:text-[18px]
                                    font-normal lg:text-lg ">
                                          {desc}
                                    </p>
                              </div>

                              <div className="h-48 
                               lg:h-auto">
                                    <img src={image} alt="" className="w-full h-full object-contain" />
                              </div>
                        </div>
                  </div>
            </React.Fragment>
      )
}