import React from 'react';

const FeaturedMenu = ({menu}) => {
    const {name, picture,about} = menu;
    return (
        <div className=' my-6'>
            <div className="w-[85%] mx-auto  shadow-xl">
    <div className='h-1/2 '>
    <img src={picture} alt="Shoes" className="h-48 w-full" />
    </div>
  <div className="card-body items-center text-center h-1/2">
    <h2 className="card-title font-bold">{name}</h2>
    <p>{about}</p>
    <div className="card-actions">
      <button className="btn bg-white uppercase text-golden border-b-golden border-2">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FeaturedMenu;