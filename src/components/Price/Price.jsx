// import s from 'components/Price/Price.module.css';
import PropTypes from 'prop-types';

function Price({ price }) {
  return (
    <div>{`Цена - ${price} ₽`}</div>
  );
};

Price.protoType = {
  price: PropTypes.string,
};

export default Price;