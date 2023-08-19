import React from 'react';

const Button = ({value}) => {
    return (
        <div>
             <button className="btn bg-white uppercase text-golden border-b-golden border-2">
             {value}
            </button>
        </div>
    );
};

export default Button;