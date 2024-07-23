import React, { useState } from "react";

function Cart() {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <>
      <div className="w-[500px] h-[550px] relative bg-gray-200">
        <div className="text-justify absolute top-[30px] left-[30px] text-black text-[30px] font-bold font-['Inter']">
          Shopping cart
        </div>
        <div className="absolute top-[35px] left-[450px]">
          <a href="#">
            <img
              src="/src/assets/Vector.png"
              alt="Delete"
              className="w-5 h-5"
            />
          </a>
        </div>
        <img
          className="w-[130px] h-[100px] absolute top-[110px] left-[70px]"
          src="/src/assets/Featured4.png"
          alt="Perfume"
        />
        <div className="w-[311px] h-[16] text-center text-black text-[30px] font-bold font-['Caveat'] absolute top-[100px] left-[100px]">
          Alcorae
        </div>
        <div className="w-[311px] h-16 text-center text-black text-[25px] font-extralight font-['Inter'] absolute top-[140px] left-[100px]">
          $ 999.99
        </div>

        <form className="max-w-xs mx-auto absolute">
          <label
            htmlFor="counter-input"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white absolute top-[180px] left-[215px]"
          >
            Quantity:
          </label>
          <div className="relative flex items-center">
            <button
              type="button"
              id="decrement-button"
              onClick={decrement}
              className="flex-shrink-0 bg-transparent hover:bg-gray-200 inline-flex items-center justify-center absolute top-[180px] left-[290px] border rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-2.5 h-2.5 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="counter-input"
              data-input-counter
              className="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center absolute top-[180px] left-[300px]"
              placeholder=""
              value={quantity}
              readOnly
              required
            />
            <button
              type="button"
              id="increment-button"
              onClick={increment}
              className="flex-shrink-0 bg-transparent dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-tra rounded-md h-5 w-5 absolute top-[180px] left-[330px] focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-2.5 h-2.5 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <div className="absolute top-[180px] left-[370px] hover:underline">
            <a href="#">Remove</a>
          </div>

          <div class="w-[450px] absolute top-[400px] left-[25px] grow shrink basis-0 h-px bg-neutral-200 border border-black"></div>
          <div className="absolute top-[400px] left-[30px] mt-1 font-bold font text-black text-[25px] font-['Inter']">
            Subtotal
          </div>
          <div className="w-[50px] absolute top-[408px] mt-1 left-[130px] text-[15px] font-thin">
            1 item
          </div>
          <div className="w-[100px] absolute top-[408px] left-[400px] text-[20px] font-normal">
            $ 999.99
          </div>
          <div className="absolute left-[180px] top-[450px] w-[200px] ">
            <button className="flex items-center bg-black border  border-gray-300 rounded p-2">
              <span className="ml-5 text-white font-medium font-['Inter'] mr-5">
                Check out
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cart;
