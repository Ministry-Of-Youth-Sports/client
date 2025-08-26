import Image from "next/image";
import AnimatedButton from "../global/AnimatedButton";
import { FaGooglePlay } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const DawnloadApp = () => {
  useGSAP(() => {
    const appTween = gsap.timeline({
      scrollTrigger: {
        trigger: "#dawnload-app",
        start: "top 50%",
      },
    });

    const SplitTitle = SplitText.create(".app-sec-text h2", {
      type: "words",
    });

    const Subtitle = SplitText.create(".app-sec-text p", {
      type: "words",
    });

    appTween.from([SplitTitle.words, Subtitle.words], {
      x: 50,
      opacity: 0,
      ease: "back.out(2)",
      stagger: 0.05,
    });

    appTween.from("#dawnload-app img", {
      x: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power.in",
    });

    appTween.from("#dawnload-app .anim-button", {
      y: -40,
      opacity: 0,
      duration: 0.5,
      ease: "back.in",
    });
  });
  return (
    <section className="container pt-30 px-5" id="dawnload-app">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="app-sec-text">
          <h2 className="sec-title">حمل التطبيق الان</h2>
          <p className="mt-10 text-section-text text-xl">
            ابدأ رحلتك مع منصة الشباب والرياضة في القاهرة. كل الخدمات والمعلومات
            في مكان واحد.
          </p>
          <div className="anim-button">
            <AnimatedButton
              variant="default"
              className="flex justify-center items-center gap-2 mt-15 rounded-lg"
            >
              <>
                <span>حمل التطبيق الان</span>
                <FaGooglePlay />
              </>
            </AnimatedButton>
          </div>
        </div>

        <Image
          src="/assets/phone-vector.png"
          alt="ios"
          width={500}
          height={500}
          className="z-30"
        />
      </div>
    </section>
  );
};

export default DawnloadApp;
