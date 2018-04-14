import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import LoadPanel from './LoadPanels.js'
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
          showMenuIcon={false}
        />
        <Sidebar />
        <LoadPanels/>
        {/* {this.props.children} */}
      </div>
    </MuiThemeProvider>
    );
  }
}
