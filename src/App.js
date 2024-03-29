import React from 'react';
import CartItem from './CartItem';
import Cart  from './Cart';
import Navbar from './Navbar';
import { db } from './index';
import { collection , getDocs } from "firebase/firestore";

class App extends React.Component {

  constructor (){
    super();
    this.state={
      loading: true,
        products:[
            // {
            //     id:1,
            //     price:19999,
            //     title:'Sony XH Boomer',
            //     qty:1,
            //     img: 'https://images.unsplash.com/photo-1658800265699-05f710ea073e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
            
            // }  ,
            // {
            //     id:2,
            //     price:59999,
            //     title:'Dell 2 in 1 ',
            //     qty:1,
            //     img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80'
            
            // }  ,
            // {
            //     id:3,
            //     price:39999,
            //     title:'One Plus 13 Pro',
            //     qty:1,
            //     img: 'https://images.unsplash.com/photo-1614796740292-50ae67262ff0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80'
            
            // }  

        ]
    }
     
}

async componentDidMount(){
    // const colRef = await collection(db,"products");
    let products = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      products.push(doc.data());
    });
    this.setState({
      products
    })
 
}



//to increase the quantuty
handleIncreaseQuantity = (product) =>{
    // console.log('Increases Quantity of',product)
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty +=1 ;
    this.setState({
        products
    })

}
// to decrease the quantity
handleDecreaseQuantity = (product) =>{
   
    console.log('Decrease Quantity of',product)
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return;
    }
    products[index].qty -=1 ;
    this.setState({
        products

    })

}
handleDeleteProduct = (id) =>{

    const { products} = this.state;

    const items = products.filter((item)=>item.id !== id);

    console.log('Delete Operation')
    this.setState({
        products:items
    })
}


getCartCount =()=>{
  const{products} = this.state
  let count = 0;
  products.forEach((product)=>{
    count +=product.qty;
  })
  return count ;

}
getCartTotal =()=>{
  let cartTotal = 0;
  const {products} = this.state
  products.map((product)=>{
    cartTotal= cartTotal + product.qty*product.price
    
  })
  return cartTotal;
}
  render(){
    const {products, loading} = this.state;
  return (
    <div className="App">
    <Navbar count ={this.getCartCount()}/>
      <h2>My Cart</h2>
      <Cart
                  products = {products}
                 onIncreaseQuantity = {this.handleIncreaseQuantity}
                 onDecreaseQuantity = {this.handleDecreaseQuantity}
                 onDeleteProduct =    {this.handleDeleteProduct}
      />
      {loading && <h4> Loading for You..</h4>}
      <div><h4>Total: {this.getCartTotal()}</h4></div>
    </div>
  );
}
}

export default App;
