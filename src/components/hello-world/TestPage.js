import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the other page</h1>
        <Link to='/'>
          <span className="icon-home"> </span>
          Go home
        </Link>
      </div>
    );
  }
}
