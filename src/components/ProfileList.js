import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
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
    width: '400px',
  },
  image: {
    height: "300px"
  },
  dataPoint: {
    fontSize: '20px',
  }
}

export default class ProfileList extends React.Component {
  renderCard = (card) => {
    return (
      <div className="col4" style={gridStyles.col}>
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
      <div style={{ padding: "0 10%" }}>
        <div style={gridStyles.row} className="row">
          {this.renderCards(cards)}
        </div>
        <div style={gridStyles.row} className="row"></div>
      </div>
    );
  }
}
