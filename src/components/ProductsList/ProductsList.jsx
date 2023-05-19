import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import { fetchCardProduct } from 'store/catalog/catalogOperations';
import s from 'components/ProductsList/ProductsList.module.css';
import Name from 'components/Name';

function ProductsList({ products }) {
  // const dispatch = useDispatch();
  const location = useLocation();

  return (
    <ul className={s.productsList}>
      {products?.map(({ name, image, id }) => (
        <li key={id} className={s.item}>
          <Link
            to={{
              pathname: `/product/${id}`,
              state: { from: location },
            }}
            className={s.link}
          // onClick={() => dispatch(fetchCardProduct(id))}
          >
            <img src={image} alt={name} className={s.img} />
            <Name name={name} />
          </Link>
        </li>
      ))
      }
    </ul>
  );
}

export default ProductsList;