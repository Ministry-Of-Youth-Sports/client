"use client";

import AnimatedButton from "../global/AnimatedButton";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      {/* layer div */}
      <div className="blacklayer"></div>

      {/* content div */}
      <div className="content">
        <h1>منصة وطنية موحدة للشباب والرياضة في القاهرة</h1>

        <p>
          مشروع وطني ضخم يربط كل الإدارات والمؤسسات الشبابية والرياضية على مستوى
          الجمهورية في مكان واحد. هدفنا هو تسهيل وصول الشباب إلى الخدمات، تعزيز
          الأنشطة، ودعم التنمية المجتمعية بشكل عصري وفعّال.
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
