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
        ({ title, description, cardColor, icon, illustrator }, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work relative overflow-hidden"
            contentStyle={{
              background: cardColor,
              color: "#fff",
              borderRadius: "10px",
              boxShadow: "2px 2px 10px 1px rgba(0, 0, 0, 0.5)",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${cardColor}`,
            }}
            iconStyle={{
              background: "#fff",
              color: cardColor,
              outline: `3px solid ${cardColor}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5px",
            }}
            icon={<Image src={icon} alt="icon" width={30} height={30} />}
          >
            <div
              className={`absolute flex justify-center items-center ${
                index % 2 === 0
                  ? "-right-[128%] top-0 w-full h-full"
                  : "-left-[128%]"
              } w-full h-full`}
            >
              <Image
                src={illustrator}
                alt="illustartor"
                width={210}
                height={210}
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
