import './displayStyle.scss';
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Display extends React.Component {
  render() {
    const { number } = this.props;
    return (
      <div
        className="display-container"
        value={number}
      >
        {number}
      </div>
    );
  }
}

Display.propTypes = {
  number: PropTypes.string.isRequired,
};

// export default function Display({ number }) {
//   return (
//     <div
//       className="display-container"
//       value={number}
//     >
//       {number}
//     </div>
//   );
// }
