import React, { Component } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
class CartItem extends React.Component{
     
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
            if(qty === 0){
                return;
            }
        this.setState((prevState)=>{
            return{
                qty:this.state.qty -1
            }
        })
    }
    render(){
        //console.log('this.props',this.props)
        const{price, title,qty}=this.props.product;
        return(
            <div className="cart-item"> 
         {/* {this.props.jsx} */}
            <div className="left-block">
          <img style={styles.image} />
        </div>
              <div className="right-block">
                  <img styles={styles.image}/>
                  <div styles={ {fontSize:23}}>{title}</div> 
                  <div styles={ {color:'#777'}}>Rs  {price}</div>
                  <div styles={ {color:'#777'}}>Qty:  {qty}</div>
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
            
        );
    
        }
    }
    const styles = {
       image: {
           height:100,
           width:110,
           borderRadious:4,
           background:'#ccc',

        }
    }
    export default CartItem;