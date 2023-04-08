import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {

    let msg;
    if (cart.length === 0) {
        msg = <p>Please Add Some Product </p>
    }
    else {
        msg = <p>Watch your products</p>
    }


    return (
        <div>
            <h2 className={`text-xl font-bold ${cart.length<1?'bg-red-400':((cart.length>=1&&cart.length<=3?'bg-yellow-400':'bg-green-400'))}`}>Order Summary: {cart.length} </h2>
            {/* Contional Rendering check */}
            {msg}
            {
                cart.length > 2 ? <span>Aro Keno</span> : <span>Taka nei naki?</span>
            }
            {
                cart.length === 2 && <p>Matro 2 to kinle</p>
            }
            {
                cart.length === 3 || <h3>Ontoto 3te keno</h3>
            }

            <div>
                {
                    cart.map(tshirt =>
                        <p
                            className='flex justify-between justify-center px-2 py-1 bg-slate-200 mt-2 rounded-sm'
                            key={tshirt._id}
                        >{tshirt.name}
                            <button
                                onClick={() => handleRemoveFromCart(tshirt._id)}
                                className='text-lg font-bold text-red-500 hover:text-red-800'
                            >x</button>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Cart;


/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 * 
 * */ 

/**
 * CONDITIONAL CSS Class
 * 1. use ternary 
 * 2. ternary inside template string
 * */ 