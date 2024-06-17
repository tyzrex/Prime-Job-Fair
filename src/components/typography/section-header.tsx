import { cn } from "@/lib/utils"

export default function SectionHeader({ className, frontText, backText }: {
      className?: string,
      frontText: string
      backText: string
}) {
      return (
            <div className="w-full">
                  <h2 className={cn("text-[#003145] font-bold text-2xl lg:text-4xl lg:font-bold md:text-3xl md:font-semibold text-left",
                        className
                  )}>
                        {frontText}
                        <span className="mx-2 text-red-600">{backText}</span>
                  </h2>

            </div>
      )
}