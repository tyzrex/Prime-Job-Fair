import React from 'react'
import { socials } from '../global/footer'
import PrimeItClub from "@/assets/it_club_logo 1.png";

const CommingSoon = () => {
    return (
        <div className='w-screen h-[80vh] md:h-[85vh] flex items-center relative justify-center flex-col'>
            <p className='text-[10vw] font-bold font-mono mt-[-150px] md:mt-[-60px]'>
                Coming Soon
            </p>
            <p className='text-[1.2em] md:text-[3vw] font-semi font-mono'>
                Stay Tuned!
            </p>
            <div className="flex gap-4 flex-wrap  justify-center mt-10">
                {socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block w-9 h-9 md:w-10 md:h-10 mr-2"
                    >
                        <div className="border border-black bg-black rounded-full p-[10px]">
                            <img src={social.icon} alt={social.name} />
                        </div>
                    </a>
                ))}
            </div>
            <div className="mt-8 w-48 border-b border-solid border-b-white"></div>
            <div className="absolute  left-50 bottom-5 flex flex-col items-center">
                <img src={PrimeItClub} alt="" className="inline-block max-w-32" />
                <p className="max-[479px]:text-xs text-[15px] flex-2 ">
                    Prime IT Club © Copyright 2024. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default CommingSoon
