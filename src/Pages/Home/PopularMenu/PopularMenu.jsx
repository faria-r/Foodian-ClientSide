import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { useMenu } from "../../../Hooks/useMenu/useMenu";

const PopularMenu = () => {
const [menu] = useMenu("menu.json");
const popularItems = menu?.filter((item) => item.category === "popular");

  return (
    <div className="mt-6">
      <div className="mb-4">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Check it out"}
        ></SectionTitle>
      </div>
      <div className="grid md:grid-cols-2 gap-4 p-4">
        {popularItems.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
      </div>
    </div>
  );
};

export default PopularMenu;
