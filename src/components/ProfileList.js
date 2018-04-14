import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ProfileItem from './ProfileItem';

const styles = {
  root: {
    marginTop: '50px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridList: {
    width: 1000,
    height: 450,
  },
  gridTile: {
    "border": "1px solid black",
    "marginRight": "50px"
  }
};

const tilesData = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
];

/**
 * A simple example of a scrollable `div` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <div
      style={styles.gridList}
    >
      <ProfileItem />
      <ProfileItem />
      <ProfileItem />
      <ProfileItem />
    </div>
  </div>
);

export default GridListExampleSimple;
