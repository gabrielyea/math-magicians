import './displayStyle.scss';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Display extends React.Component {
  setDisplay = (numbers) => {
    if (numbers.number.next) {
      return numbers.number.next;
    }
    if (numbers.number.total) {
      return numbers.number.total;
    }
    return 0;
  }

  render() {
    const result = (this.setDisplay(this.props));
    return (
      <div
        className="display-container"
        value={result}
      >
        {result}
      </div>
    );
  }
}
