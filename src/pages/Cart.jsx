import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../redux/slices/cartSlice';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
      {cart.length === 0 ? <p className='bg-lime-700'>Your cart is empty.</p> : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.title}</span>
              <img src={item.image} alt={item.title} className="h-20 object-contain mx-auto mb-2" />
              <input
                type="number"
                className="w-16 p-1 border"
                value={item.quantity}
                min={1}
                onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
              />
              <button className="bg-red-500 text-white px-2 py-1" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          <p className="mt-4 font-bold">Total: ${total}</p>
          <button className="mt-2 bg-green-600 text-white px-4 py-2" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}
