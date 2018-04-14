import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Sidebar from './Sidebar';

const sidebarWidth = 200;

export default class App extends React.Component {
  render() {
    return (
    <MuiThemeProvider>
      <div>
        <AppBar
          title="BLOCKTRICITY"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}
          style={{ "zIndex": "2000" }}
        />
        <Sidebar width={sidebarWidth} />
        <div style={{ "marginLeft": sidebarWidth + 100 + "px" }}>
          {this.props.children}
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}
