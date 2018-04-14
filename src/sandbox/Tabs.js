import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import OtherPage from './OtherPage';
import HomePage from './HomePage';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const TabsComponent = () => (
  <Tabs>
    <Tab label="Item One" >
      <HomePage />
    </Tab>
    <Tab label="Item Two" >
      <OtherPage />
    </Tab>
  </Tabs>
);

export default TabsComponent;
