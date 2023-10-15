import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function WishlistPage() {
  const wishlistItem = useSelector((store) => store.wishlist.wishitems);

  return (
    <div className="relative top-24  h-[90vh]">
     
      <div className="flex flex-wrap border-4 border-black justify-between">
        {wishlistItem &&
          wishlistItem.map(
            ({ id, title, price, rating, description, images }) => {
              return (
                <CartItem
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  rating={rating}
                  description={description}
                  image={images[0]}
                />
              );
            }
          )}
      </div>

    </div>
  );
}

export default WishlistPage;
