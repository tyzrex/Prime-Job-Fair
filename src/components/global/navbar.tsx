import { NavLinks } from "@/constants/navbar";
import CTAButton from "../reusables/cta-button";
import JobFairLogo from "@/assets/jobfair.png";
import MobileNavbar from "./mobile-navbar";
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <header>
                <div className="h-24 flex items-center">
                    <nav className="mx-auto h-auto w-full lg:relative lg:top-0">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-40">
                            <a
                                href="/"
                                aria-current="page"
                                className="relative float-left bg-[#00000000] leading-[0] text-[#333333] no-underline hover:outline-0 max-[991px]:mr-auto max-[767px]:pl-0"
                                aria-label="home"
                            >
                                <img
                                    src={JobFairLogo}
                                    loading="lazy"
                                    alt=""
                                    className="inline-block
                                      max-w-full aspect-auto w-32"
                                />
                            </a>
                            {/* MENU CONTENT 1 */}
                            <div className="mt-14 lg:flex space-y-8 lg:mt-0 lg:flex-row lg:space-x-1 lg:space-y-0 hidden gap-5">
                                {NavLinks.map((link, idx) => (
                                    { link.title }
                                    </Link>
                                ))}
                        </div>
                        <div className="lg:flex flex-col space-y-8 lg:flex-row lg:space-x-3 lg:space-y-0 mt-8 lg:mt-0 hidden">
                            <Link to="#">
                                <CTAButton className="hover:bg-fuchsia-600 hover:text-white transition-colors duration-500" />
                            </Link>
                        </div>
                        {/* BURGER MENU */}
                        <div className="absolute right-5 lg:hidden">
                            <MobileNavbar />
                        </div>
                </div>
            </nav>
        </div >
            </header >
        </>
    );
}
