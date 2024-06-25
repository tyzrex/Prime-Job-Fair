import { cn } from "@/lib/utils";

export default function GridWrapper({
      children, className
}: {
      children: React.ReactNode;
      className?: string
}) {
      return (

            <div className={cn("grid sm:grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-6", className)}>
                  {children}
            </div>
      )

}