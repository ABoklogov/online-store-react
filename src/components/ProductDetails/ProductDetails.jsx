import { useState, useEffect } from 'react';
// import noImage from '../../img/noImage.jpeg';
import { useSearchParams } from 'react-router-dom';
import s from './ProductDetails.module.css';
import PropTypes from 'prop-types';
import Slider from 'components/Slider';
import Description from 'components/Description';
import Colors from 'components/Colors';
import Price from 'components/Price';
import Name from 'components/Name';

const ProductDetails = ({ product }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [color, setColor] = useState(null);
  console.log("🚀 ~ ProductDetails ~ color:", color)

  useEffect(() => {
    const colorQuery = searchParams.get('color') || '';

    if (colorQuery) {
      const findColor = product.colors.find(el => el.id === +colorQuery);

      findColor ? setColor(findColor) : setColor(product.colors[0]);
    } else {
      setColor(product.colors[0]);
    };
  }, [product, searchParams])

  const changeColor = (color) => {
    setSearchParams({ color: color.id });
    setColor(color);
  };

  return (
    <div className={s.boxDetailsMovie}>
      {color && <Slider images={color.images} />}

      <div className={s.cardProductContent}>
        {color && (
          <div>
            <Name name={color.name} />
            <Description description={color.description} />
            <Price price={color.price} />
          </div>
        )}
        <Colors colors={product.colors} changeColor={changeColor} />
      </div>
    </div>
  );
};

ProductDetails.protoType = {
  product: PropTypes.arrayOf(PropTypes.object),
};

export default ProductDetails;