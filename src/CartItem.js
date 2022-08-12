import React, { Component } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
class CartItem extends React.Component{
    constructor (){
        super();
        this.state={
            price:19999,
            title:'Sound System',
            qty:1,
            img: ''
        
        }  
         //this.increaseQuantity=this.increaseQuantity.bind(this);
    } 
        increaseQuantity=()=>{
            // console.log(this.state);
            // this.state.qty +=1;

            // shallow merging
        
            //set state type 1
            // this.setState({
            //     qty:this.state.qty  +1,

            // });

            //set state type 2( if previos state needed)

            this.setState((prevState)=>{
                return{
                    qty:prevState.qty +1
                }

            })
        }
        decreaseQuantity=()=>{
            const {qty} = this.state;
            if(qty == 0){
                return;
            }
        this.setState((prevState)=>{
            return{
                qty:this.state.qty -1
            }
        })
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
                  className="action-icons" src="https://cdn-icons-png.flaticon.com/512/875/875068.png"
                  onClick={this.increaseQuantity} />
                  <img
                   alt="decrease" 
                   className="action-icons" src="https://cdn-icons-png.flaticon.com/512/54/54373.png"
                  onClick = {this.decreaseQuantity}/>
                  <img 
                  alt="delete" 
                  className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                    // onClick={deleteItem}

                    />
                  </div>        
              </div>    
            </div>
            </div>
        );
    
        }
    }
    const style = {
       image: {
           height:100,
           width:110,
           borderRadious:4,
           background:'#ccc',

        }
    }
    export default CartItem;