import React from 'react';
import Banner from './Banner/Banner';
import Category from '../Category/Category';
import Foodian from '../Foodian/Foodian';
import PopularMenu from '../PopularMenu/PopularMenu';
import Call from './Contact/Call';
import FeaturedItem from './FeaturedItem/FeaturedItem';
import FromMenu from './FromMenu/FromMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Foodian></Foodian>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <FeaturedItem></FeaturedItem>
            <FromMenu></FromMenu>
        </div>
    );
};

export default Home;