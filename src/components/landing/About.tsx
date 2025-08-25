"use client";

import { aboutData } from "../../constants/landing_data";
import TimeLine from "../global/TimeLine";

const About = () => {
  return (
    <section className="py-10 px-10" id="about">
      <div className="container">
        <h2 className="sec-title">عن المشروع</h2>

        <p>
          نحن نعمل على بناء منصة رقمية حديثة تجمع كل إدارات ومؤسسات وزارة الشباب
          والرياضة في مصر. المنصة تتيح للمواطنين الوصول إلى البيانات والخدمات
          بسهولة، وتعمل على تعزيز الشفافية والتواصل بين الدولة والشباب.
        </p>
      </div>

      <div className="mt-20" dir="ltr">
        <TimeLine data={aboutData} lineColor="var(--color-timeline-line)" />
      </div>
    </section>
  );
};

export default About;
