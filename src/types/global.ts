import { JSX } from "react";

type TimeLineProps = {
  data: {
    title: string;
    description: string;
    cardColor: string;
    icon?: string;
    illustrator: string;
    num?: string;
    size: { width: number; height: number };
    backSvgPath?: string;
    iconBackGround?: string;
    textColor?: string;
    svgPathColor?: string;
  }[];
  lineColor: string;
};

type AnimatedButtonProps = {
  children: string | JSX.Element;
  className?: string;
  variant: "default" | "secondary" | "3d";
  frontText?: string;
  topText?: string;
  link: string;
};

type CardSwiperProps = {
  state: number;
  setState: (state: number) => void;
  data: {
    name: string;
    position: string;
    description: string;
    image: string;
  }[];
};

type SliderSwiperProps = {
  data: {
    title: string;
    image: string;
  }[];
  className?: string;
};

export type {
  TimeLineProps,
  AnimatedButtonProps,
  CardSwiperProps,
  SliderSwiperProps,
};
