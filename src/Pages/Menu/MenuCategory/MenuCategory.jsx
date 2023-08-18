import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({items,TitleName,details,bgimg}) => {
    return (
        <div>
            {
                TitleName && <Cover TitleName={TitleName} details={details} bgimg={bgimg}></Cover>
            }
          
            <div className="grid md:grid-cols-2 gap-4 p-4">
        {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
      </div>
        </div>
    );
};

export default MenuCategory;