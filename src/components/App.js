import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Sidebar from './Sidebar';
import Tabs from './Tabs';

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
        <Sidebar />
        {/* {this.props.children} */}
      </div>
    </MuiThemeProvider>
    );
  }
}
