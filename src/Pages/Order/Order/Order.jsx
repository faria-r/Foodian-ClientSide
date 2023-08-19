import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import { useCategory } from '../../../Hooks/UseCategory/useCategory';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [desserts,pizzas,salads,soups,drinks] = useCategory();
    console.log(desserts);
    return (
        <div>
            <Cover TitleName={"Order Food"} details={'Wanna Try A Dish?'} bgimg={coverImg}></Cover>
<div>
<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
</div>
        </div>
    );
};

export default Order;