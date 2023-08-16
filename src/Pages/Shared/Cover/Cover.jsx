import React from "react";
import { Parallax, Background } from "react-parallax";
const Cover = ({ TitleName, details, bgimg }) => {
  return (
    <Parallax
      bgImage={bgimg}
      strength={100}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(21, 21, 21, 0.6)`,
              left: "50%",
              top: "50%",

              transform: "translate(-50%,-50%)",
              width: percentage * 700,
              height: percentage * 250,
            }}
          />
        </div>
      )}
    >
      <div>
        <div className="hero h-[90vh] p-16" TitleName={TitleName} details={details}>
          <div className=""></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase font-[cinzel]">
                {TitleName}
              </h1>
              <p className="mb-5">{details}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
