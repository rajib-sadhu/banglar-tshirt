import React from 'react';

const TShirts = ({tShirt, handleAddToCart}) => {

    const {_id, picture, name, price} = tShirt;

    return (
        <div className='flex flex-col items-center gap-2 shadow-xl rounded-xl p-5'>
            <img className='w-[90%] h-[15rem] object-cover' src={picture} alt="" />
            <h1 className='text-xl font-semibold'>Name: {name}</h1>
            <p className='text-lg font-bold' >Price: {price}</p>
            <button 
            className='px-3 py-1 bg-blue-500 hover:bg-blue-700 rounded-md text-white'
            onClick={()=>handleAddToCart(tShirt)}
            >
                Buy Now
            </button>
        </div>
    );
};

export default TShirts;