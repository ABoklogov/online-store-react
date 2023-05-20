import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from 'components/Sizes/Sizes.module.css';
import PropTypes from 'prop-types';
import {fetchSizes } from 'store/catalog/catalogOperations';

function Sizes({ productSize, setSize }) {
  const dispatch = useDispatch();
  const { catalog } = useSelector(state => state);

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
    return style;
  };

  return (
      <ul className={s.Sizes}>
        {
          catalog.sizes?.items?.map(({id, label, number}) => (
            <li
              key={id}
              onClick={() => { }}
              style={sizeAvailability(id)}
              className={s.sizeItem}
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