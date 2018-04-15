import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { hashHistory, Link } from 'react-router';
import Divider from './Divider';

export default class ProfileItem extends React.Component {
  render() {

    return (
      <Card className="profile-card" style={this.props.styles.card} onClick={() => hashHistory.push("/storage")}>
        <CardMedia
          overlay={<CardTitle title={this.props.title} />}
          style={{ height: '300px' }}
        >
          <img
            style={this.props.styles.image}
            src={this.props.imagePath}
          />
        </CardMedia>
        <CardText style={{ textAlign: "center"}}>
          <div style={{ display: "inline-block" }}>
            <h1 style={this.props.dataBottom ? this.props.styles.dataPoint : this.props.styles.dataPointSecondary}>
              {this.props.dataTop}
            </h1>
            {this.props.dataBottom
              ? (<div>
                  <Divider />
                  <h1 style={this.props.styles.dataPoint}>{this.props.dataBottom}</h1>
                </div>)
              : <div></div>
            }
          </div>
        </CardText>
      </Card>
    );
  }
}
