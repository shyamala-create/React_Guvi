const CartModal = ({ open, onClose, cartItem, deleteItem }) => {
  if (!open) return null;

  const handleDelete = (id) => {
    const filterCart = cartItem.filter((item) => item.id !== id);
    console.log("filterCart", filterCart);
    deleteItem(filterCart)
  }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">Your Cart</h2>

        <div className="max-h-60 overflow-y-auto">
          {cartItem.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItem.map((item) => (
              <div className="flex justify-between">
                <div key={item.id} className="mb-4">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">₹ {item.price}</p>
                  <hr className="w-full mt-2"/>
                </div>
                <span style={{ cursor: "pointer"}} onClick={() => handleDelete(item.id)} class="material-symbols-outlined">delete</span>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
