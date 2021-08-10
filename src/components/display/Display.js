import PropTypes from 'prop-types';
import './displayStyle.scss';

export default function Display({ number }) {
  return (
    <div
      className="display-container"
      value={number}
    >
      {number}
    </div>
  );
}

Display.propTypes = {
  number: PropTypes.string.isRequired,
};
