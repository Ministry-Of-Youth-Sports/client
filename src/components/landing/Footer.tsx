import Link from "next/link";
import SocialBox from "../global/SocialBox";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Footer = () => {
  useGSAP(() => {
    const footerTween = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 50%",
      },
    });

    footerTween.from("#contact", {
      opacity: 0,
    });

    const splitTitle = SplitText.create("#contact .foot-text h2", {
      type: "words",
    });

    const splitTextTitle = SplitText.create("#contact .foot-text p", {
      type: "words",
    });

    const splitLinkTitle = SplitText.create("#contact .foot-text a", {
      type: "words",
    });

    const splitSubTitle = SplitText.create("#contact .foot-text h3", {
      type: "words",
    });

    const splitSubSaveTitle = SplitText.create("#contact .foot-save p", {
      type: "words",
    });

    footerTween.from("#contact .foot-save", {
      opacity: 0,
      ease: "power.in",
    });

    footerTween.from(
      [
        splitTitle.words,
        splitSubTitle.words,
        splitLinkTitle.words,
        splitTextTitle.words,
        splitSubSaveTitle.words,
      ],
      {
        y: 50,
        opacity: 0,
        ease: "back.out(2)",
        stagger: 0.05,
      }
    );

    footerTween.from("#contact .social-anim .soical-box", {
      y: 50,
      opacity: 0,
      ease: "back.out(2)",
      stagger: 0.05,
    });

    footerTween.from("#contact img", {
      y: 50,
      opacity: 0,
      ease: "power.in",
    });
  });
  return (
    <section className="relative mt-32 pt-24 bg-[#292929]" id="contact">
      <div className="foot-text px-5">
        <h2 className="text-white text-center text-4xl mb-7">
          وزارة الشباب والرياضة – جمهورية مصر العربية{" "}
        </h2>
        <h3 className="text-white text-center text-2xl">
          مديرية الشباب و الرياضة – القاهرة
        </h3>

        <div className="flex justify-around text-white mt-24 items-center gap-10 flex-col sm:flex-row">
          <div className="flex flex-col gap-10">
            <Link
              href={"mailto:sports@cairo.gov.eg"}
              className="hover:underline flex items-center gap-5 sm:text-2xl"
            >
              <p>البريد الإلكتروني:</p>
              sports@cairo.gov.eg
            </Link>
            <div className="social-anim flex items-center gap-5">
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

      <div className="foot-save overflow-hidden bg-darker mt-10 text-center py-6 px-4 text-white">
        <p> حقوق النشر © 2025 وزارة الشباب والرياضة</p>
      </div>
    </section>
  );
};

export default Footer;
