import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import FormRating from './FormRating';
import StarIcon from '@material-ui/icons/Star';
import commentsApi from '../../../../api/commentsApi';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Comment from './Comment';
FormComment.propTypes = {
  onSubmit: PropTypes.func,
  tongCmt: PropTypes.number,
  tbcRate: PropTypes.number,
  comments: PropTypes.array,
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    padding: '20px 0px',
    height: '150px',
  },

  left: {
    display: 'flex',
    width: '20%',

    borderRight: '1px solid #ddd',
    flexFlow: 'column',
  },

  title: {
    display: 'flex',
    justifyContent: 'center',
  },

  rates: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '40px',
    color: '#fd9727',
    marginTop: '30px',
  },
  star: {
    fontSize: '50px',
    color: '#fd9727',
  },

  right: {
    width: '100%',
    // display: 'flex'
    marginLeft: '10px',
    marginRight: '20px',
  },
}));

function FormComment({ tongCmt, tbcRate, comments = [] }) {
  const classes = useStyles();
  return (
    <Box>
      <Container>
        <Grid item>
          <Box className={classes.root}>
            <Box className={classes.left}>
              <Box className={classes.title}>
                <h4>Trung bình cộng số sao</h4>
              </Box>
              <Box component="p" className={classes.rates}>
                <span>{tbcRate}</span>
                <StarIcon className={classes.star} />
              </Box>
            </Box>
            <Box className={classes.right}>
              <Comment comments={comments} />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default FormComment;
