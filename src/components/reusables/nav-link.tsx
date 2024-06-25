export function NavLink({ id, title }: { id: string, title: string }) {
      return (
            <>
                  <a
                        onClick={(event: React.SyntheticEvent) => {
                              const target = event.target as HTMLAnchorElement
                              const element = document.getElementById(id)
                              element?.scrollIntoView({
                                    behavior: 'smooth'
                              })
                        }}
                        className="text-textsec text-lg cursor-pointer"
                  >
                        {title}
                  </a>
            </>
      )
}