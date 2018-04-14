import React from 'react';
import { Menu } from 'semantic-ui-react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Menu borderless>
          <Menu.Item
            header
            name="BLOCKTRICITY"
          />
        </Menu>
        {this.props.children}
      </div>
    );
  }
}
