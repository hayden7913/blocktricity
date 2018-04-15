import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { hashHistory, Link } from 'react-router';
import { Line } from 'react-chartjs-2';
import Divider from './Divider';
import StorageList from './StorageList';


var options = {
    animation:{
        duration: 0
    },
    responsive: true,
}

const data = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      labels: ['19', '20h', '21h', '22h', '23h', '00h','01h', '02h','03h','04h','05h','06h','07h','08h','09h','10h','11h','12h','13h','14h', '15h', '16h', '17h', '18h'],
      datasets: [
        {
            label: 'Storage load',
            fill: false,
            lineTension: 0.1,
            borderColor: '#FF6384',
            pointBorderColor: '#FF6384',
            pointBackgroundColor: '#fff',
            data: [576.454704,802.010854,1002.967865,1159.676498,1263.595227,1011.483542,937.9592226,664.834809,391.6804955,-15.42412192,95.96148708,392.1860565,787.7479405,1245.64251,1756.699303,2242.050553,2596.393038,2724.2148,2246.647358,1581.985144,938.454656,685.404548,647.665116,709.443564]
        },
      ]
    };

export default class BigProfile extends React.Component {

  render() {
    return (
      <Card style={this.props.styles.card} onClick={() => hashHistory.push("/storage")}>
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
            <div style={{display: 'flex', alignItems: 'center', margin: '20px auto', justifyContent: 'center'}}>
                <Line data={data} options={options}/>
            </div>
            <StorageList style={{marginTop: 30}}></StorageList>
        </CardText>
      </Card>
    );
  }
}
