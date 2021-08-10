import PropTypes from 'prop-types';

export default function Display({ number }) {
  return (
    <div
      className="display"
      value={number}
    >
      {number}
    </div>
  );
}

Display.propTypes = {
  number: PropTypes.string.isRequired,
};
