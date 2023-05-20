// import { useState } from 'react';
import s from 'components/Slider/Slider.module.css';
import PropTypes from 'prop-types';

function Slider({ images, currentImage, setCurrentImage }) {

  return (
    <div className={s.container}>
      <img
        src={currentImage}
        alt="images-product"
        className={s.currentImage}
      />

      <ul>
        {
          images?.map(image => (
            <li
              key={image}
              className={s.Image}
              onClick={() => setCurrentImage(image)}
            >
              <img src={image} alt="images-scroll" className={s.imgScroll} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

Slider.protoType = {
  images: PropTypes.arrayOf(PropTypes.string),
  currentImage: PropTypes.string,
  setCurrentImage: PropTypes.func,
};

export default Slider;