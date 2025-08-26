"use client";

import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import About from "./About";
import DawnloadApp from "./DawnloadApp";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import NavBar from "./NavBar";
import Orgs from "./Orgs";
import OurTeam from "./OurTeam";

gsap.registerPlugin(ScrollTrigger, SplitText);

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Orgs />
      <Features />
      <HowItWorks />
      <DawnloadApp />
      <OurTeam />
      <Footer />
    </>
  );
};

export default LandingPage;
