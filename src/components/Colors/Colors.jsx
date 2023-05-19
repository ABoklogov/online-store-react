import s from 'components/Colors/Colors.module.css';
import PropTypes from 'prop-types';

function Colors({ colors, changeColor }) {
  return (
    <ul className={s.colorsList}>
      {
        colors?.map(color => (
          <li
            key={color.id}
            className={s.color}
            onClick={() => changeColor(color)}
          >
            {color.name}
          </li>
        ))
      }
    </ul>
  );
};

Colors.protoType = {
  colors: PropTypes.arrayOf(PropTypes.object),
  changeColor: PropTypes.func,
};

export default Colors;