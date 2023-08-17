import React from "react";
import { useTitle } from "../../../Hooks/useTitle/useTitle";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import { useMenu } from "../../../Hooks/useMenu/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";

const Menu = () => {
  useTitle("Rio | Menu");
  const [menu] = useMenu("menu.json");

  const desserts = menu.filter((item) => item.category === "dessert");
  const dessertMenu = desserts.find((Item) => Item.category === "dessert");
  const dessertDetails = dessertMenu.recipe;
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const offer = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <div className="mb-16">
        {/* main cover */}
        <Cover
          bgimg={menuImg}
          TitleName={"Our Menu"}
          details={"Would you like to try a dish?"}
        ></Cover>
      </div>
      <div>
        {/* Todays Offer  */}
        <SectionTitle
          heading={`TODAY'S OFFER`}
          subHeading={`Don't miss`}
        ></SectionTitle>
        <MenuCategory items={offer}></MenuCategory>
      </div>
      {/* Desserts  */}
      <div>
        <MenuCategory
          TitleName={"Desserts"}
          items={desserts}
          details={dessertDetails}
          bgimg={dessertImg}
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
