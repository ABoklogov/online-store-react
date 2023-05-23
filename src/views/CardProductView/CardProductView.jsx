import { useParams, useNavigate } from 'react-router-dom';
import s from 'views/CardProductView/CardProductView.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardProduct } from 'store/catalog/catalogOperations';
import { fetchBasket } from 'store/basket/basketOperations';
import ProductDetails from 'components/ProductDetails';
import ErrorMessage from 'components/ErrorMessage';
import Button from 'components/Button';

function CardProductView() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { catalog } = useSelector(state => state);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchBasket());
    (async () => {
      const product = await dispatch(fetchCardProduct(productId));
      setProduct(product);
    })();
  }, [productId]);

  return (
    <>
      <div className={s.buttonBox}>
        <Button
          onClick={() => navigate(-1)}
          text={"Назад"}
          ariaLabel={"Вернуться назад"}
        />
      </div>

      <h1>{product?.name}</h1>
      {
        (product && <ProductDetails product={product} />) || (
          <ErrorMessage error={catalog.cardProduct.error} />
        )
      }
    </>
  );
};

export default CardProductView;