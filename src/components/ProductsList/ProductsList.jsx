import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import s from 'components/ProductsList/ProductsList.module.css';
import { removeProductBasket } from 'store/basket/basketOperations';
import Name from 'components/Name';
import Button from 'components/Button';

function ProductsList({ products }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToProduct = (id, basket) => {
    const data = basket ? {
      color: basket?.color,
      size: basket?.size,
    } : null;

    navigate(`/product/${id}`, { state: data });
  };

  return (
    <ul className={s.productsList}>
      {
        products?.map(({ name, image, id, idBasket, basket }) => (
          <li
            key={idBasket ? idBasket : id}
            className={s.item}
          >
            <div
              onClick={() => goToProduct(id, basket)}
              className={s.descriptionBox}
            >
              <img src={image} alt={name} className={s.img} />
              <Name name={name} />
              {
                /* если находимся на странице корзины */
                basket &&
                <>
                  <p className={s.description}>
                    Цвет - <span className={s.descriptionName}>{basket.color.name}</span>
                  </p>
                  <p className={s.description}>
                    Размер - <span className={s.descriptionName}>{`${basket.size.number} (${basket.size.label})`}</span>
                  </p>
                  <p className={s.description}>
                    Цена - <span className={s.descriptionName}>{`${basket.color.price} ₽`}</span>
                  </p>
                </>
              }
            </div>
            {
              /* если находимся на странице корзины */
              basket &&
              <div className={s.btnRemove}>
                <Button
                  text={'Удалить'}
                  ariaLabel={'Удалить из корзины'}
                  onClick={() => dispatch(removeProductBasket(idBasket))}
                  color={'red'}
                />
              </div>
            }
          </li>
        ))
      }
    </ul>
  );
};

export default ProductsList;