

import { useDispatch, useSelector } from "react-redux";
import { RemoveFromCart } from "../toolkitsfiles/CartSlice";  

const Cart = () => {
  const Cart = useSelector((state) => state.Ekart);
  const dispatch = useDispatch();

  const Total = Cart.reduce((acc, item) => acc + Number(item.price), 0);
  const formattedTotal = Math.floor(Total); 

  const handleDelete = (item) => {
    dispatch(RemoveFromCart(item)); 
  };

  return (
    <>
      <div className="w-full bg-blue-500 py-3 text-white text-xl font-bold">
        <span>Quantity: {Cart.length}</span> <br />
        <span>Total: ${formattedTotal}</span>
      </div>

      <div className="bg-white text-black py-3">
        {Cart.map((item, index) => (
          <div key={index} className="flex items-center justify-between border-b pb-2">
            <img src={item.imag} alt={item.name} className="w-10 h-10 rounded" />
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button
              onClick={() => handleDelete(item)}  
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;



