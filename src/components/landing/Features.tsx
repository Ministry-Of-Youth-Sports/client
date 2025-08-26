import { featuresCards } from "@/constants/landing_data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";

const Features = () => {
  useGSAP(() => {
    const featTween = gsap.timeline({
      scrollTrigger: {
        trigger: "#features",
        start: "top 50%",
      },
    });

    const featSplitTitle = SplitText.create(".feat-sec-text h2", {
      type: "words",
    });

    const featSubtitle = SplitText.create(".feat-sec-text p", {
      type: "words",
    });

    featTween.from([featSplitTitle.words, featSubtitle.words], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "back.out(2)",
      stagger: 0.05,
    });

    gsap.from("#features .card", {
      y: 50,
      opacity: 0,
      ease: "back.out(2)",
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#features .card",
        start: "top 50%",
      },
    });
  });
  return (
    <section
      className="md:pt-60 pt-32  pb-10 relative overflow-y-hidden"
      id="features"
    >
      <div className="text-center feat-sec-text">
        <h2 className="sec-title">مميزات المنصة</h2>
        <p>
          تم تصميم منصتنا لتكون أداة قوية وموثوقة تدعم الشباب والرياضة وتسهّل
          الوصول إلى الخدمات في جميع أنحاء القاهرة.
        </p>
      </div>

      {/* cards*/}
      <div className="cards">
        {featuresCards.map(({ discription, number, img }, index) => (
          <div
            key={number}
            className={`card min-w-[200px] flex-1/4 ${
              index === 3
                ? "shadow-[inset_3px_2px_10px_5px_rgba(163,163,163,0.45)]"
                : "shadow-[3px_2px_10px_2px_rgba(163,163,163,0.45)]"
            } rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-6`}
          >
            <h3 className="text-2xl md:text-3xl lg:text-3xl text-[#AFAFAF] mb-3">
              {number}
            </h3>

            <div className="w-full h-32 md:h-36 lg:h-40 mb-4 relative">
              <Image
                src={img}
                alt={`feature-${number}`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            <p className="text-xl lg:text-md leading-8 lg:leading-7">
              {discription}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
