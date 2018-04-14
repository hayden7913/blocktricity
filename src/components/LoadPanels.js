import React from 'react';
import {Line, Doughnut} from 'react-chartjs-2';
// import Card, { CardActions, CardContent } from 'material-ui/Card';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

var options = {
    animation:{
        duration: 0
    },
    responsive: true,
}

const COMMUNITY_AVATAR = "https://goatnh.com/zen/wp-content/uploads/goat-bar_hampton-nh_contact-s.jpg"

const user1 = {
    name: 'John Doe',
    avatar: 'https://www.material-ui.com/images/ok-128.jpg'
}

const user2 = {
    name: 'Bill Moley',
    avatar: 'https://www.material-ui.com/images/jsa-128.jpg'
}


const data = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};


const linedata = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
};

export default class LoadPanels extends React.Component {
  render() {
    return (
      <div>
        <Card style={{margin: '15px'}}>
            <CardHeader
                title={user1.name}
                subtitle="My load"
                avatar={user1.avatar}/>

            <CardText>
                <div style={{display: 'flex', alignItems: 'center', margin: '0 auto', justifyContent: 'center', paddingLeft: '75px'}}>
                    <Line data={linedata} options={options}/>
                    <Doughnut data={data} options={options}/>
                </div>
            </CardText>
        </Card>

        <Card style={{margin: '15px'}}>
            <CardHeader
                title="The community"
                subtitle="The load"
                avatar={COMMUNITY_AVATAR}/>
    
            <CardText>
                <div style={{display: 'flex', alignItems: 'center', margin: '0 auto', justifyContent: 'center', paddingLeft: '75px'}}>
                    <Line data={linedata} options={options}/>
                    <Doughnut data={data} options={options}/>
                </div>
            </CardText>
        </Card>

    </div>
    );
  }
}
