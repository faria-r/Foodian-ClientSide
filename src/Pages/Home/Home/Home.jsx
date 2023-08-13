import React from 'react';
import Banner from './Banner/Banner';
import Category from '../Category/Category';
import Foodian from '../Foodian/Foodian';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Foodian></Foodian>
        </div>
    );
};

export default Home;