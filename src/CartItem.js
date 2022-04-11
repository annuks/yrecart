import React, { Component } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
class CartItem extends React.Component{
    constructor (){
        super();
        this.state={
            price:9999,
            title:'Smart Watch',
            qty:4,
            img: ''
        
        }  
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    } 
        increaseQuantity=()=>{
            console.log('this',this.state);
        
    }
    render(){
        const{price, title,qty}=this.state;
        return(
            <div className="CartItem">
          <div className="left-block">
              <div className="right-block">
                  <img style={style.image}/>
                  <div style={ {fontSize:23}}>{title}</div> 
                  <div style={ {color:'#777'}}>Rs  {price}</div>
                  <div style={ {color:'#777'}}>Qty:  {qty}</div>
                  <div className="cart-item-actions"> 
                  <img 
                  alt="increase" 
                  className="action-icons" src="https://cdn-icons.flaticon.com/png/128/2040/premium/2040520.png?token=exp=1649644082~hmac=3a6cb9b104bd1c988d8f6ab2b6b573f5"
                  onClick={this.increaseQuantity} />
                  <img
                   alt="decrease" 
                   className="action-icons" src="https://cdn-icons.flaticon.com/png/128/2040/premium/2040522.png?token=exp=1649644162~hmac=551178ede7b4f23c27ace4ee31d09e09"/>
                  
                  <img 
                  alt="delete" 
                  className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"/>
                  </div>        
              </div>    
            </div>
            </div>
        );
    
        }
    }
    const style = {
       image: {
           height:110,
           width:100,
           borderRadious:4,
           background:'#ccc',

        }
    }
    export default CartItem;