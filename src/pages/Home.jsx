import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/slices/productSlice';
import Product from '../components/Product';
import {sampleProducts} from '../assets/products'

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const user = useSelector(state => state.auth.currentUser)

  useEffect(() => {
    dispatch(setProducts(sampleProducts));
  }, [dispatch]);

  return (
    <>
      <div>
        <h2 className='text-center font-bold m-2'>Welcome {user}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
