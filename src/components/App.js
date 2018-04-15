import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import LoadPanel from './LoadPanels.js'
import Sidebar from './Sidebar';

const sidebarWidth = 200;
const blocktricityGrey= "#c3c3c3";
const styles = {
  pageContainer: {
    "marginLeft": sidebarWidth + "px",
    "paddingTop": 125,
  },
   appBar: {
    "backgroundColor": blocktricityGrey,
    "position": "fixed",
    "zIndex": "2000"
  },
  logo: {
    position: "absolute",
    top: "7px",
    height: "50px",
  },
}

export default class App extends React.Component {
  render() {
    return (
    <MuiThemeProvider>
      <div>
        <AppBar
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}
          style={styles.appBar}
        >
          <img style={styles.logo} src="images/logo.png" alt="" />
        </AppBar>
        <Sidebar width={sidebarWidth} />
        <div style={styles.pageContainer}>

          {this.props.children}
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}
