"use client";

import { useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import HamburgerMenu from "../global/HamburgerMenu";
import { navLinks } from "../../constants/landing_data";

const NavBar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="py-2 bg-white sticky top-0 z-1000 px-5">
      <nav>
        <ScrollLink to="home" href={"home"} className="block w-16 h-16" smooth>
          <Image
            src="/assets/logo.jpg"
            alt="logo"
            width={60}
            height={60}
            className="w-full h-full"
          />
        </ScrollLink>

        <ul>
          {navLinks.map(({ title, link }, index) => (
            <li key={title} className="hover:cursor-pointer">
              <ScrollLink
                to={link}
                href={link}
                smooth
                spy
                hashSpy
                activeClass="bg-active-link text-white"
                className={
                  index === 0 && !hasScrolled ? "bg-active-link text-white" : ""
                }
                offset={-80}
                onSetActive={() => setHasScrolled(true)}
              >
                {title}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* bar button */}
        <div className="xl:hidden">
          <HamburgerMenu
            isOpen={navOpen}
            toggleMenu={() => setNavOpen((prev) => !prev)}
          />
        </div>
      </nav>

      {/* responsive navbar */}
      <div
        className={`xl:hidden fixed top-[80px] left-0 transition-transform duration-300 w-full h-[calc(100vh-80px)] bg-[#e9e9e9] z-1000 flex justify-center items-center ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex justify-between flex-col items-center gap-10 py-10">
          {navLinks.map(({ title, link }, index) => (
            <li key={title} className="hover:cursor-pointer">
              <ScrollLink
                to={link}
                href={link}
                smooth
                spy
                hashSpy
                activeClass="bg-vectors/30 text-active-link py-3 px-6 rounded-full"
                className={`text-2xl ${index === 0 && !hasScrolled ? "" : ""}`}
                offset={-120}
                onSetActive={() => setHasScrolled(true)}
              >
                {title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
