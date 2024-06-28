import companyBoard from "@/assets/company-board.png";
import React from "react";

export default function CompanyBg({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-center -mt-[14px] md:-mt-[32px] lg:-mt-[36px]">
        <div
          className="
          bg-cover bg-center bg-no-repeat bg-contain relative
          w-full h-[456px]
          sm:h-[516px]
          sm:w-[400px]
          md:w-[543px] md:h-[704px]
          lg:w-[672px] lg:h-[878px]
          "
          style={{ backgroundImage: `url(${companyBoard})` }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
