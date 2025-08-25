import Image from "next/image";
import AnimatedButton from "../global/AnimatedButton";
import { FaGooglePlay } from "react-icons/fa";

const DawnloadApp = () => {
  return (
    <section className="container pt-30 px-5" id="dawnload-app">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="sec-text">
          <h2 className="sec-title">حمل التطبيق الان</h2>
          <p className="mt-10 text-section-text text-xl">
            ابدأ رحلتك مع منصة الشباب والرياضة في القاهرة. كل الخدمات والمعلومات
            في مكان واحد.
          </p>
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
