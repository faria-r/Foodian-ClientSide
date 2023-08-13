import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center w-fit mx-auto'>
            <p className='text-golden mb-3'>{subHeading}</p>
            <p className=' border-lightGray uppercase border-t-2 border-b-2 text-4xl py-4'>{heading}</p>
        </div>
    );
};

export default SectionTitle;