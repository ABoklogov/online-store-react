import { useState } from 'react';
import s from 'components/Slider/Slider.module.css';

function Slider({ images }) {
  // console.log("🚀 ~ Slider ~ images:", images)
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className={s.container}>
      <img src={currentImage} alt="images-product" className={s.currentImage} />

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
}

export default Slider;