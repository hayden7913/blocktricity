import React from 'react';
import ProfileList from './ProfileList';

export default class PofilePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the profile page</h1>
        <ProfileList />
      </div>
    );
  }
}
