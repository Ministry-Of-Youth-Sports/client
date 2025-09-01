"use client";

import { aboutData } from "../../constants/landing_data";
import TimeLine from "../global/TimeLine";

import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    const aboutTextsTween = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 40%",
      },
    });

    const textsSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const subtitleSplit = SplitText.create("#about p", {
      type: "words",
    });

    aboutTextsTween.from([textsSplit.words, subtitleSplit.words], {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "back.out(2)",
      stagger: 0.05,
    });
  });
  return (
    <section className="py-10 px-10" id="about">
      <div className="container">
        <h2 className="sec-title">عن المشروع</h2>

        <p>
          في إطار توجيهات فخامة السيد رئيس الجمهورية عبد الفتاح السيسي، ودولة
          رئيس مجلس الوزراء، ومعالي وزير الشباب والرياضة، وتحت إشراف السيد وكيل
          مديرية الشباب والرياضة بالقاهرة، جاء هذا المشروع بهدف دعم مسار التحول
          الرقمي داخل المؤسسات الحكومية، بما يسهم في تمكين المواطنين من الوصول
          إلى مختلف الخدمات بطريقة ميسرة وفعّالة، توفر الوقت والجهد وتعزز مبادئ
          الكفاءة والشفافية.
        </p>
      </div>

      <div className="mt-20" dir="ltr">
        <TimeLine data={aboutData} lineColor="var(--color-timeline-line)" />
      </div>
    </section>
  );
};

export default About;
