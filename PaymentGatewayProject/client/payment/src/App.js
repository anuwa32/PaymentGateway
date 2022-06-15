import './App.css';
import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';
//import {toast} from 'react-toastify';
import axios from 'axios';
//import "react-toastify/dist/ReactToastify.css";

function App() {

 // toast.configure()

   const [product] = useState({

    name: "Sample car Game", // create product object name
    price : 200,         //create product price
    description: 'This is sample car game',
   });

   async function handleToken(token,_addresses){

    const response = await axios.post('http://localhost:5000/checkout',{token, product});

    console.log(response.status)

    if(response.status === 200){

      //toast("Payment is completed",{type:'success'});


    }else{
       
      //toast("Payment is unsuccessful",{type:"error"});

    }

   }

  return (
    <div className="App">
      <div className = "container">

      <br/><br/>
       <h1 className = "text-center">stripe Checkout </h1>
      <br/><br/> 

        <h2 className="text-center">Product Info</h2>
        <h3 className="text-center">Product Name: {product.name}</h3>
        <h3 className="text-center">Product Price: {product.price}</h3>
        <h3 className ="text-center">Description: {product.description}</h3>
        <br/><br/>
        <div className='form-group-container'>

                <StripeCheckout
                className = "center"
                stripeKey=''
                token={handleToken}
                amount = {product.price * 100}
                //name = {product.name}
                name = "sample book"
                billingAddress
                shippingAddress



                />
        </div>

      </div>
      
    </div>
  );
}

export default App;
