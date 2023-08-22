import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center w-fit mx-auto'>
            <p className='text-golden mb-2'>---{subHeading}---</p>
            <p className=' border-lightGray uppercase border-y-4 my-2 text-2xl  lg:text-4xl py-4'>{heading}</p>
        </div>
    );
};

export default SectionTitle;