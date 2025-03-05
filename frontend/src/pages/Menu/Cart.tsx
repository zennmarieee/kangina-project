import React from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  cartItems: CartItem[];
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart, updateQuantity }) => {
  const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subTotal * 0.05; 
  const totalAmount = subTotal + tax;

  return (
    <div className="w-1/3 bg-white p-4 rounded-lg flex flex-col h-full">
      <h2 className="text-4xl font-extrabold text-[#32347C]">Kain na, User!</h2>
      <hr className="my-5 w-full border-gray-400" />
      <p className="text-[#32347C] mt-2">Here's what's in your cart:</p>

      <ul className="mt-4 space-y-2 flex-grow overflow-y-auto">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item.id} className="flex items-center justify-between p-3 border rounded-lg shadow-sm">
    
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg" />

              <div className="flex-1 mx-2">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">Php {item.price.toFixed(2)}</p>
              </div>

              <div className="flex items-center">
                <button 
                  className="px-2 py-1 text-gray-600 border rounded-l" 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button 
                  className="px-2 py-1 text-gray-600 border rounded-r" 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <button
                className="ml-3 text-red-500 hover:text-red-700"
                onClick={() => removeFromCart(item.id)}
              >
                🗑️
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        )}
      </ul>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <div className="flex justify-between text-gray-700">
          <span>Sub Total</span>
          <span>Php {subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Tax 5%</span>
          <span>Php {tax.toFixed(2)}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold text-lg text-gray-900">
          <span>Total Amount</span>
          <span>Php {totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3">
        <div className="flex flex-col items-center space-y-2">
          <button className="py-2 px-5 bg-white border rounded-lg shadow-sm">
        <img src="/public/cash.png" alt="Cash" className="w-8 h-8" />
          </button>
          <span className="text-xs">Cash</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <button className="py-2 px-5 bg-white border rounded-lg shadow-sm">
        <img src="/public/card.png" alt="Credit/Debit" className="w-8 h-8" />
          </button>
          <span className="text-xs">Credit/Debit</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <button className="py-2 px-5 bg-white border rounded-lg shadow-sm">
        <img src="/public/qr.png" alt="QR Code" className="w-8 h-8" />
          </button>
          <span className="text-xs">QR Code</span>
        </div>
      </div>

      <div className="mt-4 w-full">
        <button className="block w-full py-3 px-4 bg-[#32347C] text-white rounded-full transition">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;