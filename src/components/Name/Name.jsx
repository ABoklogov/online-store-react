import s from 'components/Name/Name.module.css';
import PropTypes from 'prop-types';

function Name({ name }) {
  return (
    <div className={s.name}>{name}</div>
  );
};

Name.protoType = {
  name: PropTypes.string,
};

export default Name;