import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2 className='text-xl font-bold '>Order Summary: {cart.length} </h2>
            <div>
                {
                cart.map(tshirt=>
                <p
                className='flex justify-between justify-center px-2 py-1 bg-slate-200 mt-2 rounded-sm'
                key={tshirt._id}
                >{tshirt.name}
                <button
                onClick={()=>handleRemoveFromCart(tshirt._id)}
                className='text-lg font-bold text-red-500 hover:text-red-800'
                >x</button>
                </p>  )
                }
            </div>
        </div>
    );
};

export default Cart;