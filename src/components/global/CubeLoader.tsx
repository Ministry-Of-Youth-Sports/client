import React from "react";

const CubeLoader = () => {
  const word = ["ت", "ح", "م", "ي", "ل"];
  return (
    <div className="cube-loader" dir="rtl">
      <div className="wrapper-grid">
        {word.map((letter, index) => (
          <div key={index} className="cube">
            <div className="face face-front">{letter}</div>
            <div className="face face-back"></div>
            <div className="face face-right"></div>
            <div className="face face-left"></div>
            <div className="face face-top"></div>
            <div className="face face-bottom"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CubeLoader;
