import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from './ProductDetails.module.css';
import PropTypes from 'prop-types';
import { addProductBasket } from 'store/basket/basketOperations';
import Slider from 'components/Slider';
import Description from 'components/Description';
import Colors from 'components/Colors';
import Price from 'components/Price';
import Name from 'components/Name';
import Sizes from 'components/Sizes';
import Button from 'components/Button';

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { catalog } = useSelector(state => state);
  const [searchParams, setSearchParams] = useSearchParams();
  const [color, setColor] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

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
    setColor(color);
    setCurrentImage(color.images[0]);
    addSearchParam('color', color.id);
  };

  const removeSearchParam = (query) => {
    if (searchParams.has(query)) {
      searchParams.delete(query);
      setSearchParams(searchParams);
    };
  };

  const addSearchParam = (key, value) => {
    const search = {};

    for (let entry of searchParams.entries()) {
      search[entry[0]] = entry[1];
    };
    setSearchParams({ ...search, [key]: value });
  };

  const addToBasket = () => {
    const productTotal = {
      id: product.id,
      idBasket: `${product.id}-${color.id}-${catalog.sizes.selecteSize.id}`,
      name: product.name,
      colors: product.colors,
      image: color.images[0],
      basket: {
        description: color.description,
        size: catalog.sizes.selecteSize,
        color: color,
      }
    };
    dispatch(addProductBasket(productTotal));
  };

  return (
    <div className={s.container}>
      {color &&
        <Slider
          images={location.state ? location.state.images : color.images}
          currentImage={location.state ? location.state.images[0] : currentImage}
          setCurrentImage={setCurrentImage}
          className={s.slider}
        />}

      <div className={s.cardProductContent}>
        {color && (
          <div>
            <Name name={`${product.name} ${color.name}`} />
            <Description description={color.description} />
            <Price price={color.price} />
            <Sizes
              productSize={color.sizes}
              removeSearchParam={removeSearchParam}
              addSearchParam={addSearchParam}
            />
          </div>
        )}
        <Colors
          colors={product.colors}
          changeColor={changeColor}
          currentColor={location.state ? location.state.idColor : color?.id}
        />

        <div className={s.basketBtn}>
          <Button
            onClick={addToBasket}
            text={"В корзину"}
            ariaLabel={"добавить в корзину"}
            disabled={(!catalog.sizes.selecteSize || !color) ?? false}
          />
        </div>
      </div>
    </div>
  );
};

ProductDetails.protoType = {
  product: PropTypes.arrayOf(PropTypes.object),
};

export default ProductDetails;