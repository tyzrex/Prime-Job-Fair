import React, { useEffect, useState } from 'react';
import { NavLink } from '../reusables/nav-link';
import { Menu } from "lucide-react";

const MobileNavbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [drawerOpen]);

  return (
    <div className="text-center">
      <button
        className=""
        type="button"
        onClick={toggleDrawer}
      >
        <Menu />
      </button>

      {drawerOpen && (
        <>
          <div className="fixed inset-0 bg-gray-900 z-10  bg-opacity-50 duration-300 ease-out transition-opacity opacity-100" onClick={toggleDrawer}></div>
          <Drawer closeDrawer={toggleDrawer} />
        </>
      )}
    </div>
  );
};

const Drawer: React.FC<{ closeDrawer: () => void }> = ({ closeDrawer }) => {
  return (
    <div
      id="drawer-navigation"
      className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform transform bg-white dark:bg-gray-800 translate-x-0 duration-300 ease-out"
      tabIndex={-1}
      aria-labelledby="drawer-navigation-label"
    >
      <h2
        id="drawer-navigation-label"
        className="text-lg font-semibold text-black uppercase dark:text-black text-left"
      >
        Prime Job Fair
      </h2>
      <button
        type="button"
        aria-controls="drawer-navigation"
        className="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-3 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={closeDrawer}
      >
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="flex flex-col items-start gap-5 mt-5">
        <NavLink id="homeSection" title="Home" onClick={closeDrawer} />
        <NavLink id="aboutSection" title="About" onClick={closeDrawer} />
        <NavLink id="companySection" title="Company" onClick={closeDrawer} />
        <NavLink id="highlightsSection" title="Highlights" onClick={closeDrawer} />
        <NavLink id="servicesSection" title="Services" onClick={closeDrawer} />
      </div>
    </div>
  );
}

export default MobileNavbar;
