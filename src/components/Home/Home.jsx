import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirts from '../TShirts/TShirts';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([])

    const handleAddToCart = tshirt =>{
     
        const exists = cart.find(ts=>ts._id===tshirt._id);

        if(exists){
            toast.error(`this item exists`)
        }
        else{
            
            const newCart = [...cart, tshirt];
            setCart(newCart)
    
            toast(`add to cart.`,{
                style:{
                    backgroundColor:'black',
                    color:'white'
                },
                duration:1500
            })
        }


    };

    const handleRemoveFromCart = id =>{
        toast(`${id} is removed!`)
        const remaining = cart.filter(ts=>ts._id!==id);
        setCart(remaining)
    }



    return (
        <div className='grid grid-cols-4 px-10 gap-10 p-5'>

            <div className='col-span-3 grid grid-cols-4 gap-10'>
                {
                    tShirts.map(tShirt=><TShirts key={tShirt._id} tShirt={tShirt} handleAddToCart={handleAddToCart} /> )
                }
            </div>
            <div className='p-5'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
            </div>
        </div>
    );
};

export default Home;