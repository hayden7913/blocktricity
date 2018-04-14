import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            showMenuIconButton={false}
            title="BLOCKTRICITY"
          />
          {this.props.children}
        </div>
    </MuiThemeProvider>
    );
  }
}
