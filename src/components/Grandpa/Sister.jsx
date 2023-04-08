import React, { useContext } from 'react';
import { MoneyContext } from './Grandpa';

const Sister = () => {

    const [money] = useContext(MoneyContext);

    return (
        <div>
            <h1>Sister</h1>
            <p>{money}</p>
        </div>
    );
};

export default Sister;