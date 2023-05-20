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
import Sizes from 'components/Sizes';

const ProductDetails = ({ product }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [color, setColor] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [size, setSize] = useState(null);
  
  // console.log("🚀 ~ ProductDetails ~ color:", color)

  // обновляем текущий цвет
  useEffect(() => {
    const colorQuery = searchParams.get('color') || '';

    if (colorQuery) {
      const findColor = product.colors.find(el => el.id === +colorQuery);

      findColor ? setColor(findColor) : setColor(product.colors[0]);
    } else {
      setColor(product.colors[0]);
    };
  }, [product, searchParams])
  // обновляем текущую картинку
  useEffect(() => setCurrentImage(color?.images[0]), [color?.images]);
  
  const changeColor = (color) => {
    setSearchParams({ color: color.id });
    setColor(color);
    setCurrentImage(color.images[0]);
  };

  return (
    <div className={s.container}>
      {color &&
        <Slider
          images={color.images}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          className={s.slider}
        />}

      <div className={s.cardProductContent}>
        {color && (
          <div>
            <Name name={`${product.name} ${color.name}`} />
            <Description description={color.description} />
            <Price price={color.price} />
            <Sizes productSize={color.sizes} setSize={setSize} />
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