import React from 'react';
import Banner from './Banner/Banner';
import Category from '../Category/Category';
import Foodian from '../Foodian/Foodian';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Foodian></Foodian>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;