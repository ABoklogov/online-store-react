import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from 'components/Sizes/Sizes.module.css';
import PropTypes from 'prop-types';
import {fetchSizes, chooseSize} from 'store/catalog/catalogOperations';
import { setSelectedSize } from 'store/catalog/catalogSlice';

function Sizes({ productSize, setSize }) {
  const dispatch = useDispatch();
  const { catalog } = useSelector(state => state);
  const [activeSizeId, setActiveSizeId] = useState(null);
  
  useEffect(() => {
    dispatch(fetchSizes());
  }, [dispatch]);
  
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
      style = {...style, borderColor: "#084f80", backgroundColor: "#084f80"}
    };

    return style;
  };

  const clickSize = (e, id) => {
    const findSize = productSize?.find(el => el === id);
    if (!findSize) {
      return 
    } else {
      const event = e.currentTarget;
    
      if (event.data_selected !== 'active') {
        event.style.backgroundColor = '#084f80';
        event.style.borderColor = '#084f80';
 
        if (activeSizeId === id) {
          setActiveSizeId(null);
          dispatch(setSelectedSize(null));
        } else {
          dispatch(chooseSize(id));
          setActiveSizeId(id);
        };
      } else {
        event.style.backgroundColor = '#b5d3e7';
        event.style.borderColor = '#0f7fcc';

        event.data_selected = '';
        dispatch(setSelectedSize(null));
        setActiveSizeId(null);
      };
    };
  };

  return (
      <ul className={s.Sizes}>
        {
          catalog.sizes?.items?.map(({id, label, number}) => (
            <li
              key={id}
              onClick={(e) => clickSize(e, id)}
              style={sizeAvailability(id)}
              className={s.sizeItem}
              data_selected={activeSizeId === id ? 'active' : ''}
            >
              <span className={s.sizeText}>{ `${number} (${label})`}</span>
            </li>
          ))
        }
      </ul>
  );
};

Sizes.protoType = {
  productSize: PropTypes.arrayOf(PropTypes.number),
  setSize: PropTypes.func,
};

export default Sizes;