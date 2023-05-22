import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBasket } from 'store/basket/basketOperations';
import s from './BasketView.module.css';
import ProductsList from 'components/ProductsList'
import Button from 'components/Button';
import Spinner from 'components/Spinner';
import ErrorMessage from 'components/ErrorMessage';

function BasketView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { basket } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchBasket());
  }, [])

  if (basket.isLoading) {
    return <Spinner />
  } else if (basket.error) {
    return <ErrorMessage error={basket.error} />
  } else if (basket.items.length === 0) {
    return <ErrorMessage error={'Корзина пуста'} />
  } else {
    return (
      <>
        <div className={s.buttonBox}>
          <Button
            onClick={() => navigate(-1)}
            text={"Назад"}
            ariaLabel={"Вернуться назад"}
          />
        </div>

        <h1>Корзина</h1>
        <ProductsList products={basket.items} />
      </>
    )
  }
};

export default BasketView;