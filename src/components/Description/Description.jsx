import s from 'components/Description/Description.module.css';
import PropTypes from 'prop-types';

function Description({ description }) {
  // console.log("🚀 ~ Slider ~ images:", images)


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