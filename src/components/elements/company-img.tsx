export default function CompanyImg({ img, alt }: {
      img: string,
      alt: string
}) {
      return (<>
            <img src={img} alt={alt} className="lg:w-56 
                                                            md:w-36
                                                            sm:w-24
                                                            w-20
                                                            object-contain
                                                            p-2
                                                            md:p-5
                                                            lg:p-8" />
      </>)
}