import React from 'react';
import Banner from './Banner/Banner';
import Category from '../Category/Category';
import Foodian from '../Foodian/Foodian';
import PopularMenu from '../PopularMenu/PopularMenu';
import Call from './Contact/Call';
import FeaturedItem from './FeaturedItem/FeaturedItem';
import FromMenu from './FromMenu/FromMenu';
import Testimonials from './Testimonials/Testimonials';
import { useTitle } from '../../../Hooks/useTitle/useTitle';

const Home = () => {
    useTitle('Cafe Rio-Home')
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Foodian></Foodian>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <FeaturedItem></FeaturedItem>
            <FromMenu></FromMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;