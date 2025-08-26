"use client";

import { useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import HamburgerMenu from "../global/HamburgerMenu";
import { navLinks } from "../../constants/landing_data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "header",
        start: "bottom top",
        scrub: 1,
      },
    });

    navTween.to("header", {
      borderRadius: "50px",
      width: "90%",
      margin: "auto",
      top: "10px",
    });

    gsap.from(".anim-link", {
      opacity: 0,
      stagger: 0.1,
      y: -30,
    });

    gsap.from(".logo", {
      opacity: 0,
      x: 50,
    });
  });

  return (
    <>
      <header className="py-2 bg-white fixed w-full top-0 right-[50%] -translate-x-[-50%] z-1001 px-5">
        <nav>
          <ScrollLink
            to="home"
            href={"home"}
            className="block w-16 h-16 logo"
            smooth
          >
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
              <li key={title} className="hover:cursor-pointer anim-link">
                <ScrollLink
                  to={link}
                  href={link}
                  smooth
                  spy
                  hashSpy
                  activeClass="bg-active-link text-white"
                  className={
                    index === 0 && !hasScrolled
                      ? "bg-active-link text-white"
                      : ""
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
      </header>

      {/* responsive navbar */}
      <div
        className={`xl:hidden fixed top-[80px] left-0 transition-transform duration-150 w-full h-[calc(100vh-80px)] bg-[#fff] z-1001 flex justify-center items-center ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex justify-between flex-col items-center gap-10 py-10">
          {navLinks.map(({ title, link }, index) => (
            <li key={title} className="hover:cursor-pointer">
              <ScrollLink
                onClick={() => setNavOpen(false)}
                to={link}
                href={link}
                smooth
                spy
                hashSpy
                activeClass="bg-active-link text-white py-4 px-6 rounded-full"
                className={
                  index === 0 && !hasScrolled
                    ? "bg-active-link py-4 px-6 rounded-full text-white"
                    : ""
                }
                offset={-80}
                onSetActive={() => setHasScrolled(true)}
              >
                {title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
