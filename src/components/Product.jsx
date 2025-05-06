import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

export default function Product({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 m-4 rounded shadow hover:shadow-lg transition bg-amber-500">
      <h2 className="text-sm mb-1 text-center font-bold">{product.title}</h2>
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto mb-2" />
      <p className="text-blue-600 font-bold mb-2"><span className='text-black'>Price</span> : ${product.price}</p>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
}
