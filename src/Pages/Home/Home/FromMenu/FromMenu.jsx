import React from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import img from "../../../../assets/home/featured.jpg";
import style from '../FromMenu/Styles.css'
const FromMenu = () => {
  return (
    <div className="featuredImg min-w-full my-16 p-8 ">
      <div className="mt-16">
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"Check it out"}
        ></SectionTitle>
      </div>
      <div className="md:flex justify-center items-center mt-8 mb-6">
        <div>
          <img src={img}  />
        </div>
        <div className="md:ml-10">
          <p>
            March 20, 2023 <br />
            <span> WHERE CAN I GET SOME?</span> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn  uppercase text-white border-b-white border-2">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default FromMenu;
