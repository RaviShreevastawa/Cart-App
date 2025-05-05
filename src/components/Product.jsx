import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

export default function Product({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 m-4 rounded shadow hover:shadow-lg transition bg-amber-500">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto mb-2" />
      <h2 className="font-semibold text-sm mb-1">{product.title}</h2>
      <p className="text-blue-600 font-bold mb-2">${product.price}</p>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
}
