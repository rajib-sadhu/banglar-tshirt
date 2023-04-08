import React, { useContext } from 'react';
import { RingContext } from './Grandpa';

const Special = () => {
    
    const ring = useContext(RingContext);
    
    return (
        <div>
            <h1>Special</h1>
            <p>{ring}</p>
        </div>
    );
};

export default Special;