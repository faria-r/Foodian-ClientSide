import React from 'react';
import { useTitle } from '../../../Hooks/useTitle/useTitle';

const Menu = () => {
useTitle('Menu')
    return (
        <div>
            <h3>
                This is Menu Page
            </h3>
        </div>
    );
};

export default Menu;