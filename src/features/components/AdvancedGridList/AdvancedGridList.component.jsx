import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Icon from "@material-ui/core/Icon";
// import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

function AdvancedGridList(props) {
  const { classes, board } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={0} className={classes.gridList}>
        {board.images.map((tile, i) => (
          <GridListTile key={board.name+i} cols={i == 0 ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img  src={tile} alt="{tile.title}" />
            <GridListTileBar
              title={`image ${i+1}`}
              titlePosition="top"
              actionIcon={
                <IconButton className={classes.icon}>
                  <Icon>edit_icon</Icon>
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridList);