import React from 'react';
import background from '../../../assets/home/chef-service.jpg'
const Foodian = () => {
    return (
        <div style={
            {backgroundImage: `url(${background})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
          backgroundPosition:'center'
          
            
            }} className='h-[70vh] p-24 my-16 bg-fixed '>
            <div className='bg-white text-black p-10 w-3/4 h-auto mx-auto'>
                <h2 className='text-4xl font-[Cinzel] text-center'>Cafe Rio</h2>
                <p className='text-justify'>
                Welcome to Cafe Rio, where every moment is a savory delight. Begin your day with artisanal coffees and cozy chai. Enjoy lunch with our hearty paninis, or savor dinner's tender steaks and fresh salads. Treat yourself to our exquisite éclairs and luscious chocolate tortes a taste of pure joy awaits
                </p>
            </div>
        </div>
    );
};

export default Foodian;