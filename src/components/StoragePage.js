import React from 'react';
import { Link } from 'react-router';
import LoadPanels from './LoadPanels.js'
import ProfileCard from './ProfileCard.js'

import { cards } from '../constants/cards';

const cardStyles = {
  card: {
    width: '80%',
    marginLeft: '10%',
  },
  image: {
    // height: '250px'
  },
  dataPoint: {
    fontSize: '20px',
  },
  dataPointSecondary: {
    fontSize: '25px',
    marginTop: '29px',
  }
}

const storageCard =
  {
    title:"Storage Asset",
    imagePath:"images/photo1.png",
    dataTop:"76% Capacity Use",
    dataBottom: "1 Over Discharge",
  }


export default class StoragePage extends React.Component {
  render() {
    return (
      <div>
        <ProfileCard
          {...storageCard}
          styles={cardStyles}
        />
      </div>
    );
  }
}
