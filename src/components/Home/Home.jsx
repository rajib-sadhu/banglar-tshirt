import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirt = useLoaderData();
    return (
        <div>
            <h1>{tShirt.length}</h1>
        </div>
    );
};

export default Home;