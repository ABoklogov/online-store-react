import {
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import s from 'views/CardProductView/CardProductView.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardProduct } from 'store/catalog/catalogOperations';
import ProductDetails from 'components/ProductDetails';
import ErrorMessage from 'components/ErrorMessage';
import Button from 'components/Button';

function CardProductView() {
  const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { catalog } = useSelector(state => state);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const product = await dispatch(fetchCardProduct(productId));
      setProduct(product);
    })();
  }, [dispatch, productId])

  const onGoBack = () => {
    const backLocation = location?.state?.from;
    if (backLocation?.pathname === `/product/${productId}`) {
      navigate(backLocation?.state?.from);
      return;
    };
    navigate(backLocation ?? '/');
  };

  return (
    <>
      <div className={s.buttonBox}>
        <Button onGoBack={onGoBack} />
      </div>

      {
        (product && <ProductDetails product={product} />) || (
          <ErrorMessage error={catalog.cardProduct.error} />
        )
      }
    </>
  );
};

export default CardProductView;