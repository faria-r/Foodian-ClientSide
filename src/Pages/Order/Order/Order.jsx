import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { useCategory } from "../../../Hooks/UseCategory/useCategory";
import FeaturedMenu from "../../Home/Home/FeaturedItem/FeaturedMenu";
import { useTitle } from "../../../Hooks/useTitle/useTitle";
import OrderTab from "../OrderTab/OrderTab";
const Order = () => {
  useTitle("Order");
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
            <OrderTab menuType={salads}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab menuType={desserts}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab menuType={pizzas}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab menuType={soups}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab menuType={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
