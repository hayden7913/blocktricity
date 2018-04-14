import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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

const GridListExampleSimple = () => (
  <div style={{ padding: "0 10%" }}>
    <div style={gridStyles.row} className="row">
      <div className="col6" style={gridStyles.col}>
        <ProfileCard
          title="Energy Conract"
          image="images/energy-contract.jpg"
          styles={{ ...cardStyles }}
          dataTop="76% Capacity Use"
          dataBottom="1 Overdischarge This Week"
        />
      </div>
      <div className="col6" style={gridStyles.col}>
      </div>
    </div>
    <div style={gridStyles.row} className="row">
      <div className="col6" style={gridStyles.col}>
      </div>
      <div className="col6" style={gridStyles.col}>
      </div>
    </div>
  </div>
);

export default GridListExampleSimple;
