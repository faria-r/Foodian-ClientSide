import React from 'react';
import { useTitle } from '../../../Hooks/useTitle/useTitle';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import { useMenu } from '../../../Hooks/useMenu/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

const Menu = () => {
useTitle('Rio | Menu');
const [menu] = useMenu('menu.json');

const desserts = menu.filter(item => item.category === 'dessert');
const pizzas = menu.filter(item => item.category === 'pizza');
const salads = menu.filter(item => item.category === 'salad');
const soups = menu.filter(item => item.category === 'soup');
const offer = menu.filter(item => item.category === 'offered');
const dessertDetails = desserts?.find( item => item.category === 'dessert');
const pizzaDetails = pizzas?.find( item => item.category === 'pizza');
const saladDetails = salads?.find( item => item.category === 'salad');
const soupDetails = soups?.find( item => item.category === 'soup');

    return (
        <div >
            <div className='mb-16'>
                {/* main cover */}
            <Cover  bgimg={menuImg} TitleName={"Our Menu"} details={'Would you like to try a dish?'}></Cover>
            </div>
           <div>
            {/* Todays Offer  */}
           <SectionTitle heading={`TODAY'S OFFER`} subHeading={`Don't miss`}></SectionTitle>
           <MenuCategory items={offer}></MenuCategory>
           </div>
           {/* Desserts  */}
           <div>
            <MenuCategory TitleName={'Desserts'} items={desserts} details={dessertDetails?.recipe} bgimg={dessertImg}></MenuCategory>
           </div>
           {/* pizza details  */}
          <div>
            <MenuCategory TitleName={'Pizzas'} items={pizzas} details={pizzaDetails?.recipe} bgimg={pizzaImg}></MenuCategory>
          </div>
          {/* Soup Details  */}
          <div>
            <MenuCategory TitleName={'Soups'} items={soups} details={soupDetails?.recipe} bgimg={soupImg}></MenuCategory>
          </div>
          {/* salad details  */}
          <div>
            <MenuCategory TitleName={'Salads'} items={salads} details={saladDetails?.recipe} bgimg={saladImg}></MenuCategory>
          </div>
          
        </div>
    );
};

export default Menu;