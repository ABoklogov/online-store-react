// import s from 'components/Description/Description.module.css';
import PropTypes from 'prop-types';

function Description({ description }) {
  return (
    <p>
      {description}
    </p>
  );
};

Description.protoType = {
  description: PropTypes.string,
};

export default Description;