import React from "react";
import PaddedLayout from "../wrapper/PaddedLayout";
import Image from "next/image";
import Logo from "../../../public/assets/logo/senaLogo.svg";

import SenaBotIcon from "./child/SenaBotIcon";
import MobileSideBar from "./child/MobileSideBar";
import { BASE_APP_URL, NAV_LINKS } from "./constants";


const Header = () => {
  return (
    <header className="w-full">
      <PaddedLayout className="sm:pt-5">
        <nav className="flex sm:min-h-[50px] sm:flex items-center justify-between py-6 px-[15px] sm:py-7 sm:px-4 mb-4 md:px-10 lg:px-20 sm:bg-black rounded-[25px] w-full">
          {/* <div className="flex justify-start w-1/3 sm:hidden">
            <SenaBotIcon />
          </div> */}
          <div
            role="presentation"
            className="flex justify-center w-fit"
          >
            <a
            href={`${BASE_APP_URL}`}
            >
            <Image
              alt="logo"
              src={Logo}
              className="w-[100px] md:w-[110px] h-auto cursor-pointer"
            />
            </a>
          </div>

          <ul className="sm:flex justify-end text-nowrap space-x-5 lg:space-x-9 text-white hidden">
            {NAV_LINKS.map((item, i) => (
              <li
                role="presentation"
                className="font-sora font-normal text-[14px] leading-[18.9px] lg:text-[15px] cursor-pointer"
                key={i}
              >
                <a href={`${BASE_APP_URL}${item.link}`} target="_blank">
                {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-end sm:hidden w-1/3">
            <MobileSideBar />
          </div>
        </nav>
      </PaddedLayout>
    </header>
  );
};

export default Header;
