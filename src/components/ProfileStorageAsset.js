import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Divider from './Divider';

export default class EnergyContract extends React.Component {
  render() {
    return (
      <Card style={this.props.styles.card}>
        <CardMedia
          overlay={<CardTitle title="Storage Asset" />}
        >
          <img
            style={{ height: "300px" }}
            src="images/tesla.jpg" alt=""
          />
        </CardMedia>
        <CardText style={{ textAlign: "center"}}>
          <div style={{ display: "inline-block" }}>
            <h1 style={this.props.styles.dataPoint}>76% Capacity Use</h1>
            <Divider />
            <h1 style={this.props.styles.dataPoint}>1 Overdischarge This Week</h1>
          </div>
        </CardText>
      </Card>
    );
  }
}
