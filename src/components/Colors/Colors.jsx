import s from 'components/Colors/Colors.module.css';
import PropTypes from 'prop-types';

function Colors({ colors, changeColor, currentColor }) {
  return (
    <ul className={s.colorsList}>
      {
        colors?.map(color => (
          <li
            key={color.id}
            className={s.color}
            style={color.id === currentColor ? { color: '#0f7fcc' } : { color: '#000c0c' }}
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
  currentColor: PropTypes.number,
};

export default Colors;