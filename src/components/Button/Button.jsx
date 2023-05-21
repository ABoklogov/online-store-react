import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClick, text, ariaLabel, disabled }) => {
  const disabledStyle = { backgroundColor: '#e3e3e3', color: '#5c5c5c' };
  
  return (
    <button
      type="button"
      className={s.button}
      onClick={disabled ? null : onClick}
      aria-label={ariaLabel}
      style={ disabled ? disabledStyle : null }
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
};

export default Button;