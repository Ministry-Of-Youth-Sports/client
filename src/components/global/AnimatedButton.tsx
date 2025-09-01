import { AnimatedButtonProps } from "@/types/global";
import Link from "next/link";

const AnimatedButton = ({
  children = "Get in touch",
  className = "",
  variant,
  frontText = "",
  topText = "",
  link,
}: AnimatedButtonProps) => {
  return (
    <>
      {variant === "default" && (
        <Link href={link} target="_blank">
          <button
            className={`relative px-6 py-3 
        border border-gray-600 rounded 
        text-lg text-btn-primary cursor-pointer 
        overflow-hidden z-10
        transition-all duration-200 ease-in
        hover:text-white hover:border-btn-primary
        before:content-[''] before:absolute before:left-1/2 before:top-full 
        before:w-[140%] before:h-[180%] before:bg-btn-primary/5
        before:rounded-full before:block before:z-[-1]
        before:transform before:-translate-x-1/2 before:scale-y-100 before:scale-x-125
        before:transition-all before:duration-500 before:delay-100 before:ease-[cubic-bezier(0.55,0,0.1,1)]
        after:content-[''] after:absolute after:left-[55%] after:top-[180%]
        after:w-[160%] after:h-[190%] after:bg-btn-primary
        after:rounded-full after:block after:z-[-1]
        after:transform after:-translate-x-1/2 after:scale-y-100 after:scale-x-[1.45]
        after:transition-all after:duration-500 after:delay-100 after:ease-[cubic-bezier(0.55,0,0.1,1)]
        hover:before:top-[-35%] hover:before:bg-btn-primary
        hover:before:transform hover:before:-translate-x-1/2 hover:before:scale-y-130 hover:before:scale-x-80
        hover:after:top-[-45%] hover:after:bg-btn-primary
        hover:after:transform hover:after:-translate-x-1/2 hover:after:scale-y-130 hover:after:scale-x-80
        ${className}
        `}
          >
            {children}
          </button>
        </Link>
      )}
      {variant === "3d" && (
        <div className={`w-40 flex justify-center items-center ${className}`}>
          <div
            className="
          text-gray-300 cursor-pointer font-['Roboto',sans-serif] font-bold uppercase
          w-40 h-16 
          transition-all duration-500 ease-[cubic-bezier(0.17,0.67,0.14,0.93)]
          hover:-rotate-x-90
        "
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "100% 50%",
            }}
          >
            {/* Top Side */}
            <span
              className="rounded-lg
            box-border absolute inline-block 
            h-16 w-40 text-center pt-6 font-bold uppercase
            bg-yellow-100 text-gray-800
            shadow-[inset_0_0_0_5px_#fff]
          "
              style={{
                transform: "rotateX(90deg) translate3d(0, 0, 2em)",
              }}
            >
              {topText}
            </span>

            {/* Front Side */}
            <span
              className={`rounded-lg
            box-border absolute inline-block 
            h-16 w-40 text-center pt-6 font-bold uppercase
            bg-transparent text-white
            shadow-[inset_0_0_0_1px_#fff]
          `}
              style={{
                transform: "translate3d(0, 0, 2em)",
              }}
            >
              {frontText}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimatedButton;
