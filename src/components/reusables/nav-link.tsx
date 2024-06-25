export function NavLink({ id, title }: { id: string, title: string }) {
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
                        className="text-textsec text-lg cursor-pointer
                        hover:text-[#003145]
                        "
                  >
                        {title}
                  </a>
            </>
      )
}