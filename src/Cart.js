
import React from 'react';
import CartItem from './CartItem';

        const Cart=(props)=>{ 
            const {products} = props;
       
        return (
            <div className='cart'>
            {products.map((product)=>{
               return (
                <CartItem
                 product={product} 
                 key={product.id}
                 onIncreaseQuantity = {props.onIncreaseQuantity}
                 onDecreaseQuantity = {props.onDecreaseQuantity}
                 onDeleteProduct =    {props.onDeleteProduct}
                 //anything could be passed as a props like function,jsx,boolean or even a components
                // funct={()=> console.log('Can passed function')}
                // isLoggedIn ={false}
                // jsx={<h1>A jsx can be paased</h1>}
                 />
            
            )
            })}
            </div>
        );
    }
    export default Cart;