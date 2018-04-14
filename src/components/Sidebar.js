import React from 'react';
import { hashHistory, Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const iconStyle = {
  'marginRight': '8px'
}


export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <div>
        <Drawer docked width={this.props.width}>
          <MenuItem
            onClick={() => { hashHistory.push('/') }}
            style={{"marginTop": "70px"}}
          >
            <span style={iconStyle} className="icon-meter"></span>
            Dashboard
          </MenuItem>
          <MenuItem
            onClick={() => { hashHistory.push('/profile') }}
          >
            <span style={iconStyle} className="icon-user"></span>
            Profile
          </MenuItem>
          <MenuItem>
            <span style={iconStyle} className="icon-coin-dollar"></span>
            Marketplace
          </MenuItem>
          <MenuItem>
            <span style={iconStyle} className="icon-envelop"></span>
            Messenger
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}
