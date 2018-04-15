import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { hashHistory, Link } from 'react-router';
import { Line } from 'react-chartjs-2';
import Divider from './Divider';


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
            label: 'Personal load',
            fill: false,
            lineTension: 0.1,
            borderColor: '#FF6384',
            pointBorderColor: '#FF6384',
            pointBackgroundColor: '#fff',
            data: [1465.5,1349.7,1295.7,1277.7,1274.1,1587.6,1312.2,1122,1198.2,1510.5,1471.5,1438.8,1437.6,1418.4,1370.1,1328.1,1352.7,1453.2,1591.2,1693.5,1764,1849.2,1732.5,1629.3]
        },
        {
            label: 'Average load',
            fill: false,
            lineTension: 0.1,
            borderColor: '#36A2EB',
            pointBorderColor: '#36A2EB',
            pointBackgroundColor: '#fff',
            data: [1573.8,1453.5,1387.2,1351.2,1337.4,1341.9,1352.1,1446.6,1531.2,1568.7,1571.4,1575.3,1588.5,1589.4,1539.3,1498.2,1512.6,1594.2,1710,1803.3,1865.4,1947,1846.2,1742.4
            ]
          },
    
      ]
    };

export default class BigProfile extends React.Component {

  render() {
    console.log(this.props.styles)
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
            <div style={{display: 'flex', alignItems: 'center', margin: '0 auto', justifyContent: 'center', paddingLeft: '75px'}}>
                <Line data={data} options={options}/>

            </div>
        </CardText>
      </Card>
    );
  }
}
