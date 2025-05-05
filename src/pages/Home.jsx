import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/slices/productSlice';
import Product from '../components/Product';

export default function Home() {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading products...</p>;
  if (status === 'failed') return <p>Failed to load products.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
      {items.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
