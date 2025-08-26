import Image from "next/image";
import React, { useRef } from "react";
import Map from "../global/Map";
import { countingOrgsBoxes } from "@/constants/landing_data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Orgs = () => {
  const countingBoxesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const orgsTween = gsap.timeline({
      scrollTrigger: {
        trigger: "#orgs",
        start: "top 60%",
      },
    });

    orgsTween.from(".org-sec-text", {
      y: 50,
      opacity: 0,
      ease: "power.in",
    });

    orgsTween.from(".org-sec-text img", {
      opacity: 0,
      x: -50,
      ease: "power2.out",
    });

    const orgsSplitTitle = SplitText.create(".org-sec-text h2", {
      type: "words",
    });

    const orgsSubtitle = SplitText.create(".org-sec-text p", {
      type: "words",
    });

    orgsTween.from([orgsSplitTitle.words, orgsSubtitle.words], {
      y: 50,
      opacity: 0,
      ease: "back.out(2)",
      stagger: 0.05,
    });

    // Second timeline for counting boxes with staggered appearance
    const boxesTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".counting-boxes",
        start: "top 80%",
      },
    });

    boxesTimeline.from(".counting-boxes > div", {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.2,
    });

    // Counting animation for each box
    countingBoxesRef.current.forEach((box, index) => {
      if (box) {
        const numberElement = box.querySelector(".counting-number");
        const targetNumber = countingOrgsBoxes[index].count;

        if (numberElement) {
          // Set initial value to 0
          const counter = { value: 0 };

          // Set the initial display to 0
          numberElement.innerHTML = "+0";

          // Create individual ScrollTrigger for each counter
          gsap.to(counter, {
            value: targetNumber,
            duration: 2,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".counting-boxes",
              start: "top 80%",
            },
            onUpdate: function () {
              const currentValue = Math.round(counter.value);
              numberElement.innerHTML = `+${currentValue.toLocaleString()}`;
            },
          });
        }
      }
    });

    // Map animation
    gsap.from(".map-container", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".map-container",
        start: "top bottom",
      },
    });
  }, []);

  return (
    <section className="pt-30" id="orgs">
      {/* section title box */}
      <div className="org-sec-text overflow-x-hidden">
        <div className="p-5">
          <h2 className="sec-title">تغطية على مستوى القاهرة</h2>
          <p>
            نحن نعمل على بناء منصة رقمية حديثة تجمع كل إدارات وهيئات مديرية
            الشباب والرياضة في القاهرة. المنصة تتيح للمواطنين الوصول إلى
            البيانات والخدمات بسهولة، وتعمل على تعزيز الشفافية والتواصل بين
            الدولة والشباب.
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
      <div className="counting-boxes overflow-x-hidden">
        {countingOrgsBoxes.map(({ title }, index) => (
          <div
            ref={(el) => {
              countingBoxesRef.current[index] = el;
            }}
            key={title}
            className="rounded-xl border border-stroke flex-1/3 p-8 text-center"
          >
            <p className="text-5xl mb-7 counting-number">+0</p>
            <p className="font-cairo text-2xl">{title}</p>
          </div>
        ))}
      </div>

      {/* map */}
      <div className="map-container h-[400px] w-[95%] lg:w-[80%] mt-10 rounded-xl overflow-hidden mx-auto shadow-[0_0_10px_#848484]">
        <Map />
      </div>
    </section>
  );
};

export default Orgs;
