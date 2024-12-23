/*
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../toolkitsfiles/CartSlice";
import Cart from "./Cart";
import products from "./products.json";

const Home = () => {
  const dispatch = useDispatch();
  const currentCart = useSelector((state) => state.Ekart); 
  console.log(currentCart);

  return (
    <div>
    
      <header className="bg-blue-600 text-white text-center py-4 text-3xl font-bold shadow-md">
        Your Shop
      </header>

      <div className="flex mt-8 ">
        
        <div className="w-1/4  fixed left-0 top-15 h-full bg-white shadow-lg p-6 z-50">
          <Cart />
        </div>

        <div className="w-3/4 ml-[25%] flex flex-wrap gap-4 pl-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-60 flex flex-col rounded-xl bg-white shadow-lg p-4 mb-4"
            >
              <img
                src={product.imager}
                alt={product.item}
                className="rounded-t-xl w-full h-40 object-cover"
              />
              <div className="flex flex-col py-3">
                <div className="flex justify-between">
                  <h1 className="font-bold">{product.item}</h1>
                  <h2 className="font-semibold">${product.price}</h2>
                </div>
                <button
                  onClick={() =>
                    dispatch(
                      AddToCart({
                        price: product.price,
                        name: product.item,
                        imag: product.imager,
                      })
                    )
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
*/

import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../toolkitsfiles/CartSlice";
import Cart from "./Cart";
import products from "./products.json";

const Home = () => {
  const dispatch = useDispatch();
  const currentCart = useSelector((state) => state.Ekart); 
  console.log(currentCart);

  return (
    <div>
      <header className="bg-blue-600 text-white text-center py-4 text-3xl font-bold shadow-md fixed top-0 left-0 w-full z-50">
        Your Shop
      </header>

      <div className="flex mt-24"> 
        
        <div className="w-1/4 fixed left-0 top-15 h-full bg-white shadow-lg p-6 z-50">
          <Cart />
        </div>

        
        <div className="w-3/4 ml-[25%] flex flex-wrap gap-4 pl-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-60 flex flex-col rounded-xl bg-white shadow-lg p-4 mb-4"
            >
              <img
                src={product.imager}
                alt={product.item}
                className="rounded-t-xl w-full h-40 object-cover"
              />
              <div className="flex flex-col py-3">
                <div className="flex justify-between">
                  <h1 className="font-bold">{product.item}</h1>
                  <h2 className="font-semibold">${product.price}</h2>
                </div>
                <button
                  onClick={() =>
                    dispatch(
                      AddToCart({
                        price: product.price,
                        name: product.item,
                        imag: product.imager,
                      })
                    )
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
