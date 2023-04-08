import React, { createContext, useState } from 'react';
import './AllStye.css';

import Father from './Father';
import Uncle from './Uncle';
import Aunty from './Aunty';

export const RingContext = createContext('Gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {

    const [money, setMoney] = useState(0)

    return (
        <div className='text-center space-y-4'>
            <h1 className='text-5xl font-extrabold uppercase'>Grandpa</h1>
            <p>Has Money: {money} </p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Golden Ring' >
                    <section className='all-style'>
                        <Father />
                        <Uncle />
                        <Aunty />
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;


/**
 * 1. create context and export 
 * 2. Create a provider and pass a value 
 * 3. use useContext to receive 
 * */
