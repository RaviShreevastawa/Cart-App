import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../redux/slices/cartSlice';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.currentUser);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">{user.fullname} Your Cart</h2>
      <div className='ml-10'>
      {cart.length === 0 ? <p className='bg-blue-950 w-50 p-4 rounded-md text-center overflow-hidden'>Your cart is empty.</p> : (
        <div className='flex'>
          {cart.map(item => (
            <div key={item.id} className="items-center mb-2 bg-amber-500 m-2 p-2 rounded-md shadow-amber-700 shadow-md">
              <span className='text-center font-bold'>{item.title}</span>
              <img src={item.image} alt={item.title} className="h-40 rounded-md shadow object-contain mx-auto mb-2 p-2" />
              <div className='flex'>
                <input
                  type="number"
                  className="w-16 p-1 border rounded-md m-2"
                  value={item.quantity}
                  min={1}
                  onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
                />
                <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="mt-4 font-bold">Your Total : Rs. {total} 🤞</p>
      <button className="mt-2 rounded-md bg-green-600 text-white px-4 py-2" onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </div>
      <div>Your Cart Item No : {cart.length}</div>
    </>
  );
}
