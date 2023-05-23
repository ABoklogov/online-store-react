import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from 'components/Sizes/Sizes.module.css';
import PropTypes from 'prop-types';
import { fetchSizes, chooseSize } from 'store/catalog/catalogOperations';
import { setSelectedSize } from 'store/catalog/catalogSlice';
import Spinner from 'components/Spinner';

function Sizes({ productSize, removeSearchParam, addSearchParam }) {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { catalog } = useSelector(state => state);
  const [activeSizeId, setActiveSizeId] = useState(null);

  useEffect(() => {
    dispatch(fetchSizes());
    return () => removeSize();
  }, []);

  // проверяем url строку
  useEffect(() => {
    const sizeQuery = searchParams.get('size') || '';

    if (sizeQuery) {
      const findSize = productSize.find(el => el === +sizeQuery);
      findSize ? addSize(findSize) : removeSize();
    };
  }, [productSize, searchParams]);

  const sizeAvailability = (id) => {
    let style = null;

    productSize?.forEach(el => {
      if (el === id) {
        style = {
          borderColor: "#0f7fcc",
          backgroundColor: "#b5d3e7",
          cursor: "pointer",
        };
      };
    });

    if (id === activeSizeId) {
      style = { ...style, borderColor: "#084f80", backgroundColor: "#084f80" }
    };

    return style;
  };

  const changeSize = (e, id) => {
    const findSize = productSize?.find(el => el === id);
    if (!findSize) {
      return
    } else {
      const event = e.currentTarget;

      if (event.data_selected !== 'active') {
        event.style.backgroundColor = '#084f80';
        event.style.borderColor = '#084f80';

        if (activeSizeId === id) {
          removeSize();
          removeSearchParam('size');
        } else {
          addSize(id);
          addSearchParam('size', id)
        };
      } else {
        event.style.backgroundColor = '#b5d3e7';
        event.style.borderColor = '#0f7fcc';

        event.data_selected = '';
        removeSize();
        removeSearchParam('size');
      };
    };
  };

  const addSize = (id) => {
    dispatch(chooseSize(id));
    setActiveSizeId(id);
  };

  const removeSize = () => {
    dispatch(setSelectedSize(null));
    setActiveSizeId(null);
  };

  return (
    <ul className={s.Sizes}>
      {
        catalog.sizes?.items?.map(({ id, label, number }) => (
          <li
            key={id}
            onClick={(e) => changeSize(e, id)}
            style={sizeAvailability(id)}
            className={s.sizeItem}
            data_selected={activeSizeId === id ? 'active' : ''}
          >
            {
              (catalog.sizes.isLoading && activeSizeId === id) ? (
                <Spinner margin={0} width={30} />
              ) : (
                <span className={s.sizeText}>{`${number} (${label})`}</span>
              )
            }
          </li>
        ))
      }
    </ul>
  );
};

Sizes.protoType = {
  productSize: PropTypes.arrayOf(PropTypes.number),
  removeSearchParam: PropTypes.func,
  addSearchParam: PropTypes.func,
};

export default Sizes;