import { featuresCards } from "@/constants/landing_data";
import Image from "next/image";

const Features = () => {
  return (
    <section className="pt-60" id="features">
      <div className="text-center sec-text">
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
            className={`hover:-translate-y-4 transition-transform duration-300 ${
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

            <p>{discription}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
