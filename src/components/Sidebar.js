import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  'zIndex': 0
}

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <div style={style}>
        <Drawer docked>
          <MenuItem style={{"marginTop": "70px"}}>Dashboard</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Marketplace</MenuItem>
          <MenuItem>Messenger</MenuItem>
        </Drawer>
      </div>
    );
  }
}
