import React from "react";

const Cover = ({ TitleName, details, bgimg }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("${bgimg}")` }}
      TitleName={TitleName}
      details={details}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{TitleName}</h1>
          <p className="mb-5">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
