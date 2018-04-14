import React from 'react';
import { Link } from 'react-router';
import { colorPrimary } from '../constants/colors';

export default class Divider extends React.Component {
  render() {
    return (
      <div  style={{
          borderTop: "2px solid " + colorPrimary,
          fontSize: 0,
          height: 0,
          margin: "0 auto",
          width: "70%",
        }}>-</div>
    );
  }
}
