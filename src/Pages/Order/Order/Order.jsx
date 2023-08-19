import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
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