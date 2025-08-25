import Image from "next/image";
import React from "react";
import Map from "../global/Map";
import { countingOrgsBoxes } from "@/constants/landing_data";

const Orgs = () => {
  return (
    <section className="pt-30" id="orgs">
      {/* section title box */}
      <div className="sec-text">
        <div className="p-5">
          <h2 className="sec-title">تغطية على مستوى القاهرة</h2>
          <p>
            نحن نعمل على بناء منصة رقمية حديثة تجمع كل إدارات ومؤسسات وزارة
            الشباب والرياضة في مصر. المنصة تتيح للمواطنين الوصول إلى البيانات
            والخدمات بسهولة، وتعمل على تعزيز الشفافية والتواصل بين الدولة
            والشباب.
          </p>
        </div>

        <Image
          src="/assets/egypt map.png"
          className="shadow-[0_0_10px_#848484] rounded-xl mx-auto md:mx-0"
          alt="orgs"
          width={300}
          height={300}
        />
      </div>

      {/* counting boxes */}
      <div className="counting-boxes">
        {countingOrgsBoxes.map(({ title, count }) => (
          <div
            key={title}
            className="rounded-xl border border-stroke flex-1/3 p-8 text-center"
          >
            <p className="text-5xl mb-7">+{count}</p>
            <p className="font-cairo text-2xl">{title}</p>
          </div>
        ))}
      </div>

      {/* map */}
      <div className="h-[400px] w-[95%] lg:w-[80%] mt-10 rounded-xl overflow-hidden mx-auto shadow-[0_0_10px_#848484]">
        <Map />
      </div>
    </section>
  );
};

export default Orgs;
