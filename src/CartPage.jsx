import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { store } from "./Store";
import { BsCartFill } from "react-icons/bs";
import CartItem from "./CartItem";


function CartPage() {
  const cartItems = useSelector((store) => store.cart.items);

  function showItems() {
    console.log("saroj kumar");
    console.log(cartItems.length);
    console.log(cartItems);
  }

  return (
    <div className="relative top-52 flex  flex-col">
      <h1 className="text-xl text-center  border-b-2 mx-10 pb-2 border-black font-semibold mt-4">
        Shopping cart{" "}
        <BsCartFill className="inline text-3xl text-yellow-500 -mt-1" />
      </h1>
      <button onClick={showItems()}>show items</button>

       <div>
        {
          cartItems && cartItems.map(({id,title,price,rating,description,images})=>{
            return <CartItem key={id} id={id} title={title} price={price} rating={rating} description={description} image={images[0]}/>
          })
        }
       </div>

      
    </div>
  );
}

export default CartPage;
