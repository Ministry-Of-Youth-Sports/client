"use client";

import { howItWorks } from "@/constants/landing_data";
import TimeLine from "../global/TimeLine";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const HowItWorks = () => {
  useGSAP(() => {
    const worksTween = gsap.timeline({
      scrollTrigger: {
        trigger: "#how-it-works",
        start: "top 50%",
      },
    });

    const SplitTitle = SplitText.create(".works-sec-text h2", {
      type: "words",
    });

    const Subtitle = SplitText.create(".works-sec-text p", {
      type: "words",
    });

    worksTween.from([SplitTitle.words, Subtitle.words], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "back.out(2)",
      stagger: 0.05,
    });
  });
  return (
    <div className="pt-32" id="how-it-works">
      <div className="text-center works-sec-text">
        <h2 className="sec-title">كيف تعمل المنصة</h2>
        <p className="mt-6 md:mt-8 text-section-text text-lg">
          بخطوات بسيطة وسهلة تقدر توصل لأي خدمة أو إدارة من خلال المنصة
        </p>
      </div>

      <div className="mt-20" dir="ltr">
        <TimeLine data={howItWorks} lineColor="#cdcdcd" />
      </div>
    </div>
  );
};

export default HowItWorks;
