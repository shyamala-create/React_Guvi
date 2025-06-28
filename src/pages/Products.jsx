import { useEffect, useState } from "react";
import CartModal from "./Cart";

let API_URL = `https://fakestoreapi.com/products/`;
const Products = () => {
  const [data, setData] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((value) => {
        setLoading(true);
        setData(value);
        setLoading(false);
      });
  }, []);

  const handleClick = (id) => {
    //get the product based on the id
    const product = data.find((item) => item.id === id);

    // if the item already present inside cartItem then alert the user
    if (cartItem.find((item) => item === product)) {
      alert("Item already added to the cart");
      return;
    }

    //update cartItem value based on the previous value
    setCartItem((prev) => {
      const updated = [...prev, product];
      return updated;
    });
  };

  const openCartModal = () => setIsCartOpen(true);

  const closeCartModal = () => setIsCartOpen(false);

  const deleteItem =(item) => {
    setCartItem(item);
  }

  return (
    <div>
      <nav className="flex justify-center items-center gap-5 bg-red-300 p-4">
      <h1 className="text-3xl">Product Items</h1>
      <span
        class="material-symbols-outlined"
        style={{ cursor: "pointer", display: "flex" }}
        onClick={openCartModal}
      >
        shopping_cart_checkout
      </span>
      <span className="font-bold text-2xl">{cartItem.length}</span>
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data.map((value) => (
        <div
          key={value.id}
          className="border border-black rounded-lg p-6 shadow bg-green-100 w-full max-w-sm mx-auto flex flex-col items-center justify-between"
        >
          <div className="flex flex-col justify-center items-center">
            <strong>Category:</strong> {value.category}
            <br />
            <br />
            <img
              src={value.image}
              alt={value.title}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
              }}
            />
            <br />
            <strong>Price:</strong> ₹ {value.price}
          </div>
          <button
            className="border 1px border-black p-3 rounded mt-5 bg-lime-900 text-white"
            onClick={() => handleClick(value.id)}
          >
            Add to cart
          </button>
        </div>
      ))}
      </div>

      {isCartOpen && (
        <CartModal
          cartItem={cartItem}
          open={isCartOpen}
          onClose={closeCartModal}
          deleteItem={deleteItem}
        />
      )}
      {loading && <>Loading...</>}
    </div>
  );
};

export default Products;
