import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from 'store/catalog/catalogOperations';
import ProductsList from 'components/ProductsList'

function ProductsView() {
  const dispatch = useDispatch();
  const { catalog } = useSelector(state => state);

  // получаем товары
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (<ProductsList products={catalog.products.items} />);
}

export default ProductsView;