import { cn } from "@/lib/utils"

export function NavLink({ id, title, className }: { id: string, title: string, className?: string }) {
      return (
            <>
                  <a
                        onClick={(event: React.SyntheticEvent) => {
                              event.preventDefault()
                              const element = document.getElementById(id)
                              element?.scrollIntoView({
                                    behavior: 'smooth'
                              })
                        }}
                        className={cn("text-textsec text-base md:text-lg cursor-pointer hover:text-[#003145]", className)}
                  >
                        {title}
                  </a>
            </>
      )
}