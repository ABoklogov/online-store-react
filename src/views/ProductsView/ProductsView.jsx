import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from 'store/catalog/catalogOperations';
import { fetchBasket } from 'store/basket/basketOperations';
import ProductsList from 'components/ProductsList'

function ProductsView() {
  const dispatch = useDispatch();
  const { catalog } = useSelector(state => state);
  // получаем товары и корзину
  useEffect(() => {
    dispatch(fetchBasket());
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <h1>Список товаров</h1>
      <ProductsList products={catalog.products.items} />
    </>
  );
}

export default ProductsView;