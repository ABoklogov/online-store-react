import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { fetchCardProduct } from 'store/catalog/catalogOperations';
import s from 'components/ProductsList/ProductsList.module.css';

function ProductsList({ products }) {
  const dispatch = useDispatch();

  return (
    <ul className={s.productsList}>
      {products?.map(({ name, image, id }) => (
        <li key={id} className={s.item}>
          <Link
            to="/card"
            className={s.link}
            onClick={() => dispatch(fetchCardProduct(id))}
          >
            <img src={image} alt={name} className={s.img} />
            <span className={s.name}>{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;