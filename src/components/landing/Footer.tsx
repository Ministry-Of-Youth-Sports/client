import Link from "next/link";
import SocialBox from "../global/SocialBox";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="relative mt-60 pt-24 bg-[#292929]" id="contact">
      <div className="px-5">
        <h2 className="text-white text-center text-4xl mb-7">
          وزارة الشباب والرياضة – جمهورية مصر العربية{" "}
        </h2>
        <h3 className="text-white text-center text-2xl">
          مديرية الشباب و الرياضة – القاهرة
        </h3>

        <div className="flex justify-around text-white mt-24 items-center gap-10 flex-col sm:flex-row">
          <div className="flex flex-col gap-10">
            <Link
              href={"mailto:eygate@emss.gov.eg"}
              className="hover:underline flex items-center gap-5 sm:text-2xl"
            >
              <p>البريد الإلكتروني:</p>
              Eygate@emss.gov.eg
            </Link>
            <div className="flex items-center gap-5">
              <p className="sm:text-2xl">تابعنا على:</p>
              <SocialBox
                links={{
                  youtube:
                    "https://www.youtube.com/channel/UCef3IOObALdvlMaq5zalxNw",
                  twitter: "https://x.com/emysofficial",
                  facebook:
                    "https://www.facebook.com/Youth.Sports.Cairo/?locale=ar_AR",
                }}
              />
            </div>
          </div>

          <Image
            src="/assets/qr-code.png"
            alt="qr-code"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="bg-darker mt-10 text-center py-6 px-4 text-white">
        حقوق النشر © 2025 وزارة الشباب والرياضة
      </div>
    </section>
  );
};

export default Footer;
