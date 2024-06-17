import { cn } from "@/lib/utils"


export default function SectionWrapper({ children,
      className,
}: {
      children: React.ReactNode;
      className?: string;
}) {
      return <section className={cn(
            "pt-10 md:pt-20 "
      )}>
            {children}
      </section>
}