import React from 'react';

const MenuItem = ({item}) => {
    const {name, price, recipe, image} = item;
    return (
        <div >
            <div className='flex justify-around p-2'>
            <img className='w-[118px] h-[104px] rounded-r-[200px]  rounded-b-[200px] ' src={image}/>
            <div>
                <h3 className='font-[cinzel]'>{name}-----------------</h3>
                <p >{recipe}</p>
            </div>
            <p className='text-golden'>{price}</p>
        </div>
        </div>
    );
};

export default MenuItem;