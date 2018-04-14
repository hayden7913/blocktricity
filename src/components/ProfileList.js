import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import shortid from 'shortid';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import { cards } from '../constants/cards';
import ProfileCard from './ProfileCard';
import Divider from './Divider';

const gridStyles = {
  row: {
    marginBottom: 50,
  },
  col: {
  },
}

const cardStyles = {
  card: {
    width: '300px',
  },
  image: {
    height: '250px',
  },
  dataPoint: {
    fontSize: '20px',
  }
}

export default class ProfileList extends React.Component {
  renderCard = (card) => {
    const key = shortid.generate();
    return (
      <div key={key} className="col4" style={gridStyles.col}>
        <ProfileCard
          {...card}
          styles={cardStyles}
        />
      </div>
    );
  }

  renderCards = (cards) => {
    return (
      cards.map(card => this.renderCard(card))
    );
  }

  render() {
    return (
      <div style={{ padding: "0 7%" }}>
        <div style={gridStyles.row} className="row">
          {this.renderCards(cards.slice(0,3))}
        </div>
        <div style={gridStyles.row} className="row">
          {this.renderCards(cards.slice(3,6))}
        </div>
      </div>
    );
  }
}
