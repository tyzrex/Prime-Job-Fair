export default function GridWrapper({
      children
}: {
      children: React.ReactNode;
}) {
      return (

            <div className="grid 
            sm:grid-cols-1
            md:grid-cols-2 gap-x-10
            lg:gap-x-20
            gap-y-6
            ">
                  {children}
            </div>
      )

}