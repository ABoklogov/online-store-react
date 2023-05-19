import {
  useParams,
  // useRouteMatch,
  // Routes,
  // Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import s from 'views/CardProductView/CardProductView.module.css';
import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import * as API from 'services/api';
import ProductDetails from 'components/ProductDetails';
import ErrorMessage from 'components/ErrorMessage';
import Button from 'components/Button';

function CardProductView() {
  const { productId } = useParams();
  // const { url, path } = useRouteMatch();
  const location = useLocation();
  // console.log("🚀 ~ CardProductView ~ location:", location)
  const navigate = useNavigate()
  // const dispatch = useDispatch();
  // const { catalog } = useSelector(state => state);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    API
      .getProduct(productId)
      .then(data => {
        setProduct(data);
      })
      .catch(error => setError(error));
  }, [productId])

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
          <ErrorMessage error={error} />
        )
      }
    </>
  );
};

export default CardProductView;