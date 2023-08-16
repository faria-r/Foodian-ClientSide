import React from 'react';
import { useTitle } from '../../../Hooks/useTitle/useTitle';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import { useMenu } from '../../../Hooks/useMenu/useMenu';

const Menu = () => {
useTitle('Rio | Menu');
const [menu] = useMenu('menu.json');
console.log(menu)
    return (
        <div >
            <div className='mb-16'>
            <Cover  bgimg={menuImg} TitleName={"Our Menu"} details={'Would you like to try a dish?'}></Cover>
            </div>
           
        </div>
    );
};

export default Menu;