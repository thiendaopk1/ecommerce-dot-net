import { makeStyles } from '@material-ui/core';
import img from '../../../images/tagSale.png';

const ProductStyles = makeStyles(() => ({
  root: {},

  button: {
    display: 'flex',
    alignItems: 'center',
  },

  buttonCompare: {
    '&.MuiButton-root': {
      backgroundColor: '#fff',
      '&:hover': {
        background: '#fff',
      },
    },
    '&.MuiButton-text': {
      fontSize: '15px',
      color: '#69a3f2',
    },
  },

  buttonCompareDisabled: {
    '&.MuiButton-root': {
      backgroundColor: '#fff',
      '&:hover': {
        background: '#fff',
      },
    },
    '&.MuiButton-text': {
      fontSize: '15px',
      color: '#b0b0b0',
    },
  },

  name: {
    height: '45px',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },

  rate: {
    fontSize: '1rem',
    top: '3px',
  },

  comment: {
    fontSize: '0.75rem',
  },

  originalPrice: {
    textDecoration: 'line-through',
    fontSize: '0.65rem',
  },

  salePrice: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'red',
  },

  image: {
    weight: '230px',
    height: '290px',
    left: '0',
    right: '0',
    // position: "relative",
  },

  percent: {
    width: '39px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 0 5px!important',
    margin: '0 !important',
    fontSize: '12px',
    position: 'absolute',
    right: '0',
    overflow: 'hidden',
    color: '#fff',
    fontWeight: '700',
    zIndex: '2',
    // top: "-25px",

    //tagSale
    backgroundImage: `url(${img})`,
    // '&:hover>img':{
    //     transition: 'all 0.3s ease-out'
    // },
    // '&:hover>img':{
    //     transition: 'scale(1.2, 1.2)'
    // },
  },
}));

export default ProductStyles;
