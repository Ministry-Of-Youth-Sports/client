"use client";

import { howItWorks } from "@/constants/landing_data";
import TimeLine from "../global/TimeLine";

const HowItWorks = () => {
  return (
    <div className="pt-60" id="how-it-works">
      <div className="text-center sec-text">
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
