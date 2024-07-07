import React from 'react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
      id: string;
      title: string;
      className?: string;
      onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ id, title, className, onClick }) => {
      return (
            <a
                  href={`#${id}`}
                  onClick={(event: React.SyntheticEvent) => {
                        event.preventDefault();
                        const element = document.getElementById(id);
                        element?.scrollIntoView({
                              behavior: 'smooth',
                        });
                        if (onClick) {
                              onClick();
                        }
                  }}
                  className={cn("text-textsec text-base md:text-lg cursor-pointer hover:text-[#003145]", className)}
            >
                  {title}
            </a>
      );
};
