import React from 'react';
import { Link } from 'react-router';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the home page</h1>
        <Link to='/test'>
        <span className="icon-go"> </span>
          Go to the other page
        </Link>
      </div>
    );
  }
}
