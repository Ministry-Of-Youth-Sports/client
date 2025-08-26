"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedButton from "../global/AnimatedButton";
import { Link as ScrollLink } from "react-scroll";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const heroTextsTween = gsap.timeline({
      delay: 0.5,
    });

    const heroSplitTitle = SplitText.create(".content h1", {
      type: "words",
    });

    const heroSubtitle = SplitText.create(".content p", {
      type: "words",
    });

    heroTextsTween.from([heroSplitTitle.words, heroSubtitle.words], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "back.out(2)",
      stagger: 0.05,
    });

    heroTextsTween.from(".content a", {
      y: 50,
      opacity: 0,
      ease: "back.out(2)",
    });
  });

  return (
    <div className="hero" id="home">
      {/* layer div */}
      <div className="blacklayer"></div>

      {/* content div */}
      <div className="content">
        <h1>منصة وطنية موحدة للشباب والرياضة في القاهرة</h1>

        <p>
          مشروع وطني ضخم يربط كل الإدارات والمؤسسات الشبابية والرياضية على مستوى
          محافظة القاهرة في مكان واحد هدفنا هو تسهيل وصول الشباب إلى الخدمات،
          .تعزيز الأنشطة، ودعم التنمية المجتمعية بشكل عصري وفعّال
        </p>

        <ScrollLink to="dawnload-app" smooth>
          <AnimatedButton variant="3d" frontText="حمل" topText="التطبيق">
            حمل التطبيق
          </AnimatedButton>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Hero;
