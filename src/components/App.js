import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Sidebar from './Sidebar';

const sidebarWidth = 200;
const blocktricityGrey= "#c3c3c3";
const styles = {
  pageContainer: {
    "marginLeft": sidebarWidth + "px",
    "paddingTop": 20,
  },
   appBar: {
    "backgroundColor": blocktricityGrey,
    "zIndex": "2000"
  },
}

export default class App extends React.Component {
  render() {
    return (
    <MuiThemeProvider>
      <div>
        <AppBar
          title="BLOCKTRICITY"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}
          style={styles.appBar}
        />
        <Sidebar width={sidebarWidth} />
        <div style={styles.pageContainer}>
          {this.props.children}
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}
