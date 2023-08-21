import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import FeaturedMenu from './FeaturedMenu';

const FeaturedItem = () => {
    const [featureMenu,setFeatureMenu] = useState([]);
    useEffect(()=>{
        fetch('Featured.json')
        .then(res => res.json())
        .then(data => setFeatureMenu(data))
    },[])
    return (
        <div>
            <div>
                <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"}></SectionTitle>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-1'>
            {
                featureMenu.map(menu => <FeaturedMenu key={menu._id} img={menu.picture} menu={menu}></FeaturedMenu>)
            }
           </div>
        </div>
    );
};

export default FeaturedItem;