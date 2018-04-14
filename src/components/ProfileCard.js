import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Divider from './Divider';

export default class ProfileItem extends React.Component {
  render() {
    return (
      <Card style={this.props.styles.card}>
        <CardMedia
          overlay={<CardTitle title={this.props.title} />}
        >
          <img
            style={this.props.styles.image}
            src="images/energy-contract.jpg"
          />
        </CardMedia>
        <CardText style={{ textAlign: "center"}}>
          <div style={{ display: "inline-block" }}>
            <h1 style={this.props.styles.dataPoint}>{this.props.dataTop}</h1>
            <Divider />
            <h1 style={this.props.styles.dataPoint}>{this.props.dataBottom}</h1>
          </div>
        </CardText>
      </Card>
    );
  }
}
