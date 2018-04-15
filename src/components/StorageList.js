import React from 'react';
import {List, ListItem} from 'material-ui/List';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const ListExamplePhone = () => (
    <Card style={{width: 400, margin: '0 auto'}}>
      <List>
        <ListItem
          primaryText="76% Capacity charge"
        />
        <ListItem
          primaryText="Over discharge 2 days ago!"
        />
        <ListItem
          primaryText="90% capacity use 2 days ago"
        />
        <ListItem
          primaryText="65% capacity use 3 days ago"
        />
      </List>
    </Card>
);

export default ListExamplePhone;
