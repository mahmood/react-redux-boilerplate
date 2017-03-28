// @flow
import React, {Component} from 'react';

function foo(number: number): number  {
  if (number) {
    return number;
  }
}

export default class Index extends Component {
  render() {
    return (
      <div className="intro">
        <h1>Hello React, Redux</h1>
      </div>
    );
  }
}
