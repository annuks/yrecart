import React, { Component } from 'react';

//functional components
const CartItem = (props)=>{

//class components
//class CartItem extends React.Component{
  
        const{price, title,qty} = props.product;
        const {
            product,
            onIncreaseQuantity, 
            onDecreaseQuantity,
            onDeleteProduct,
           } = props;

        return(
            <div className="cart-item"> 
            <div className="left-block">
          <img style={styles.image} src={product.img} />
        </div>
              <div className="right-block">
                  <img styles={styles.image}/>
                  <div styles={ {fontSize:20}}>{title}</div> 
                  <div styles={ {color:'#777'}}>Rs  {price}</div>
                  <div styles={ {color:'#777'}}>Qty:  {qty}</div>
                  <div className="cart-item-actions"> 
                  <img 
                  alt="increase" 
                  className="action-icons" 
                  src="https://cdn-icons-png.flaticon.com/512/875/875068.png"
                  onClick={()=>onIncreaseQuantity(product)} />
                  <img
                   alt="decrease" 
                   className="action-icons" src="https://cdn-icons-png.flaticon.com/512/54/54373.png"
                   onClick={()=>onDecreaseQuantity(product)} />
                  <img 
                  alt="delete" 
                  className="action-icons" 
                  src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                  onClick={()=>onDeleteProduct(product.id)} />

                  </div>        
              </div>    
            </div>
            
        );
    
        }
    
    const styles = {
       image: {
           height:100,
           width:110,
           borderRadious:6,
           background:'#ccc',

        }
    }
    export default CartItem;