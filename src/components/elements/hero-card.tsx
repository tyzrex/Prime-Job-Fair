import { cn } from "@/lib/utils";
import CTAButton from "../reusables/cta-button";

interface HeroCardProps {
  className?: string;
  title: string;
  desc: string;
  highlight: string;
}

export default function HeroCard({ className, title, desc, highlight }: HeroCardProps) {
  return (
    <div className="
      order-2
      md:order-1
      row-span-1 flex justify-center items-center
    ">
      <div className={cn(className)}>
        <div className="py-5 px-4">
          <h1 className="
            font-bold text-2xl
            leading-9 lg:font-bold lg:text-5xl 
            md:text-3xl md:font-semibold
            lg:leading-[64px] md:leading-10 textsec
          ">
            {title.split(highlight)[0]}
            <span className="text-red-600 mr-2 lg:mr-3">{highlight}</span>
            {title.split(highlight)[1]}
          </h1>
          <p className="
            text-[14px] font-normal 
            lg:text-[20px] 
            md:text-[18px]
            text-[#7A6F6F]
            py-2
            md:py-3
          ">
            {desc}
          </p>
          <div className="flex">
            <a href="#">
              <CTAButton
                className="hover:bg-fuchsia-600 hover:text-white transition-colors duration-500"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
