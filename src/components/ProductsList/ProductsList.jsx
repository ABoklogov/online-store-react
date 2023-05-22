import { useNavigate } from 'react-router-dom'
import s from 'components/ProductsList/ProductsList.module.css';
import Name from 'components/Name';

function ProductsList({ products }) {
  const navigate = useNavigate();

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
          <li key={idBasket ? idBasket : id} className={s.item}>
            <div onClick={() => goToProduct(id, basket)}>
              <img src={image} alt={name} className={s.img} />
              <Name name={name} />
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default ProductsList;