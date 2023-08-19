import React from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import img from "../../../../assets/home/featured.jpg";
import  '../FromMenu/Styles.css'
const FromMenu = () => {
  return (
    <div className="featuredImg min-w-full my-16 p-4 ">
      <div className="mt-16">
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"Check it out"}
        ></SectionTitle>
      </div>
      <div className="md:flex justify-center items-center px-16 py-6 mt-8 mb-6 mx-auto">
        <div >
          <img src={img} className="w-3/4" />
        </div>
        <div className=" md:-ml-10 w-auto">
          <p>
            March 20, 2023 <br />
            <span> WHERE CAN I GET SOME?</span> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btnAnimation bg-transparent uppercase text-white border-b-white b border-t-0 border-x-0 mt-2 border-2">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default FromMenu;
