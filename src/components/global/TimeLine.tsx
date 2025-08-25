import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimeLineProps } from "@/types/global";

const TimeLine = ({ data, lineColor }: TimeLineProps) => {
  return (
    <VerticalTimeline lineColor={lineColor}>
      {data.map(
        (
          {
            title,
            description,
            cardColor,
            icon,
            illustrator,
            num,
            size,
            backSvgPath,
            iconBackGround,
            textColor,
            svgPathColor,
          },
          index
        ) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work relative overflow-hidden"
            contentStyle={{
              background: cardColor,
              color: textColor ? textColor : "#fff",
              borderRadius: "10px",
              boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${cardColor}`,
            }}
            iconStyle={{
              background: iconBackGround ? iconBackGround : "#fff",
              color: textColor ? textColor : cardColor,
              outline: `3px solid ${cardColor}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5px",
            }}
            icon={
              num ? (
                <span className="text-2xl">{num}</span>
              ) : (
                <Image
                  src={icon || ""}
                  alt="icon"
                  width={30}
                  height={30}
                  unoptimized
                />
              )
            }
          >
            {/* images div */}
            <div
              className={`absolute flex justify-center items-center ${
                index % 2 === 0
                  ? "-right-[128%] top-0 w-full h-full"
                  : "-left-[128%]"
              } w-full h-full`}
            >
              {/* svg back image */}
              {backSvgPath && (
                <svg
                  className="absolute w-96 h-96 opacity-20"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill={svgPathColor}
                    d={backSvgPath}
                    transform="translate(100 100)"
                  />
                </svg>
              )}

              <Image
                className="z-30"
                src={illustrator}
                alt="illustartor"
                width={size.width}
                height={size.height}
                unoptimized
              />
            </div>
            <h3
              className="vertical-timeline-element-title"
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: "20px",
                textAlign: "right",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                lineHeight: "1.6",
                fontWeight: "lighter",
                textAlign: "right",
                margin: 0,
              }}
            >
              {description}
            </p>
          </VerticalTimelineElement>
        )
      )}
    </VerticalTimeline>
  );
};

export default TimeLine;
