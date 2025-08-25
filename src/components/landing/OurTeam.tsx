"use client";

import Image from "next/image";
import CardSwiper from "../global/CardSwiper";
import { team } from "@/constants/landing_data";
import { useState } from "react";

const OurTeam = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="container pt-30 px-5 lg:px-0" id="team">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
        <div className="sec-text">
          <h2 className="sec-title">د/ احمد عبد الوكيل</h2>
          <h3 className="text-lg mt-5">
            اول وكيل الوزارة - مدير مدرية الشباب و الرياضة بالقاهرة
          </h3>
          <p className="mt-10 text-section-text text-xl">
            الدكتور أحمد عبد الوكيل هو قائد متميز في قطاع الشباب والرياضة
            بالقاهرة. يتميز بخبراته الأكاديمية والإدارية التي تُسهم بشكل فعلي في
            تطوير الأداء الرياضي والإداري. يظهر تفانيًا واضحًا من خلال جولاته
            الميدانية المتواصلة في مراكز الشباب والرياضة، حيث يلتقي الشباب
            ويستمع إلى احتياجاتهم، ويسعى لحل مشاكلهم وتعزيز الخدمات المقدمة لهم.
            كما يقود مسيرة تجديد وتحديث المنشآت الشبابية والرياضية بالشراكة مع
            الجهات المعنية، مؤكدًا على أنّ مراكز الشباب يجب أن تكون أماكن حقيقية
            لتطوير الشباب والمجتمع، ومساهمة فعلية في استراتيجية الدولة لبناء
            إنسان قادر ومتطور
          </p>
        </div>

        <Image
          src="/assets/elwakel.png"
          alt="person"
          width={500}
          height={500}
          className="z-30"
        />
      </div>

      <div className="overflow-hidden min-h-96 mt-30 flex items-center flex-col lg:flex-row lg:w-[80%] mx-auto justify-between gap-10">
        <div>
          <CardSwiper state={index} setState={setIndex} data={team} />
        </div>

        <div dir="ltr">
          <h3 className="text-5xl mb-4 text-section-title">
            {team[index].name}
          </h3>
          <h4 className="text-2xl text-section-text">{team[index].position}</h4>
          <p className="mt-10 text-section-text text-xl">
            {team[index].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
