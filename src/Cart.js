import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
        constructor (){
            super();
            this.state={
                products:[
                    {
                        id:1,
                        price:19999,
                        title:'Sony XH Boomer',
                        qty:1,
                        img: ''
                    
                    }  ,
                    {
                        id:2,
                        price:59999,
                        title:'Dell 2 in 1 ',
                        qty:1,
                        img: ''
                    
                    }  ,
                    {
                        id:.3,
                        price:39999,
                        title:'One Plus 13 Pro',
                        qty:1,
                        img: ''
                    
                    }  

                ]
            }
             
        }
        render(){
            const {products} = this.state;
        return (
            <div className='cart'>
            
            {products.map((product)=>{
               return <CartItem
                 product={product} 
                 key={product.id}

                 //anything could be passed as a props like function,jsx,boolean or even a components
                // funct={()=> console.log('Can passed function')}
                // isLoggedIn ={false}
                // jsx={<h1>A jsx can be paased</h1>}
                 />

            })}
            </div>
        );
    }
    
         
    
        }
    
    
    export default Cart;