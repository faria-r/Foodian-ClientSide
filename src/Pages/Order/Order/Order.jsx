import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { useCategory } from "../../../Hooks/UseCategory/useCategory";
import FeaturedMenu from "../../Home/Home/FeaturedItem/FeaturedMenu";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [desserts, pizzas, salads, soups, drinks] = useCategory();
  console.log(desserts);
  return (
    <div>
      <Cover
        TitleName={"Order Food"}
        details={"Wanna Try A Dish?"}
        bgimg={coverImg}
      ></Cover>
      <div>
        <Tabs 
          selectedIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
            console.log(tabIndex);
          }}
        >
          <TabList className="hover:text-golden font-bold text-xl my-8 boder-none  border-b-2 border-b-golden text-center">
            <Tab tabIndex>Salads</Tab>
            <Tab>Desserts</Tab>
            <Tab>Pizzas</Tab>
            <Tab>Soups</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-3 gap-2 ">
              {salads.map((menu) => (
                <FeaturedMenu
                  key={menu._id}
                  img={menu.image}
                  menu={menu}
                ></FeaturedMenu>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-2 ">
              {desserts.map((menu) => (
                <FeaturedMenu
                  key={menu._id}
                  img={menu.image}
                  menu={menu}
                ></FeaturedMenu>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-2 ">
              {pizzas.map((menu) => (
                <FeaturedMenu
                  key={menu._id}
                  img={menu.image}
                  menu={menu}
                ></FeaturedMenu>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-2 ">
              {soups.map((menu) => (
                <FeaturedMenu
                  key={menu._id}
                  img={menu.image}
                  menu={menu}
                ></FeaturedMenu>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-2">
              {drinks.map((menu) => (
                <FeaturedMenu
                  key={menu._id}
                  img={menu.image}
                  menu={menu}
                ></FeaturedMenu>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
