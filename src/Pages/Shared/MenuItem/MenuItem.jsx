import React from 'react';

const MenuItem = ({item}) => {
    const {name, price, recipe, image} = item;
    return (
        <div >
            <div className='flex justify-evenly p-2'>
            <img className='w-[118px] h-[104px] mr-2 rounded-r-[200px]  rounded-b-[200px] ' src={image}/>
            <div>
                <h3 className='font-[cinzel] uppercase'>{name}-----------------</h3>
                <p >{recipe}</p>
            </div>
            <p className='text-golden'>{price}</p>
        </div>
        </div>
    );
};

export default MenuItem;