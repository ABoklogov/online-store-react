import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClick, text, ariaLabel, disabled, color }) => {
  const disabledStyle = { backgroundColor: '#e3e3e3', color: '#5c5c5c', cursor: 'auto' };

  return (
    <button
      type="button"
      className={color === 'red' ? s.btnRed : s.btnBlue}
      onClick={disabled ? null : onClick}
      aria-label={ariaLabel}
      style={disabled ? disabledStyle : null}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'blue',
};

export default Button;