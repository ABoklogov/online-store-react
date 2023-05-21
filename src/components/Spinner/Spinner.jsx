import { Oval }  from 'react-loader-spinner';
import PropTypes from 'prop-types';

function Spinner({ width, margin }) {
  return <Oval
          height={width}
          width={width}
          color="#4fa94d"
          wrapperStyle={{ margin, justifyContent: 'center' }}
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
};

Spinner.protoType = {
  width: PropTypes.number,
  margin: PropTypes.number
};

Spinner.defaultProps = {
  width: 80,
  margin: 100,
};

export default Spinner;