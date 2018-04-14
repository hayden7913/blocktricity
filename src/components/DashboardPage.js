import React from 'react';
import { Link } from 'react-router';
import LoadPanels from './LoadPanels.js'

export default class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        <LoadPanels />
      </div>
    );
  }
}
