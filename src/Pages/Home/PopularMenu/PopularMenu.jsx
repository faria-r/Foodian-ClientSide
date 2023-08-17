import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { useMenu } from "../../../Hooks/useMenu/useMenu";

const PopularMenu = () => {
  const [popularMenu, setpopularMenu] = useState([]);
  const [menu] = useMenu("menu.json");

  useEffect(() => {
    const popularItems = menu?.filter((item) => item.category === "popular");
    setpopularMenu(popularItems);
  }, [menu]);

  return (
    <div className="mt-6">
      <div className="mb-4">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Check it out"}
        ></SectionTitle>
      </div>
      <div className="grid md:grid-cols-2 gap-4 p-4">
        {menu &&
          popularMenu.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
      </div>
    </div>
  );
};

export default PopularMenu;
