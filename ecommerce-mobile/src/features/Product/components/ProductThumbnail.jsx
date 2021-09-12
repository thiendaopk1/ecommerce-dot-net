import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';

// import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/index';
import { Carousel } from 'react-responsive-carousel';

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};
const useStyles = makeStyles((theme) => ({
  productThumbnail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  productImg: {
    width: '370px',
    height: '400px',
  },

  productImgDetail: {
    width: '100%',
    height: '100%',
  },

  listImage: {
    marginTop: '15px',
    width: '100%',
  },

  listImages: {
    paddingLeft: '0',
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageItem: {
    width: '70px',
    height: '70px',
    padding: '2px',
    '&:hover': {
      border: '#E11B1C solid 1px',
    },
  },

  imageItemDetail: {
    width: '100%',
    height: '100%',
  },
}));
function ProductThumbnail({ product = {} }) {
  const classes = useStyles();
  const { images } = product;
  const [imgActive, setImgActive] = useState(images[0].image);
  const handleChangeImage = (image) => {
    setImgActive(image.image);
  };
  return (
    <Box className={classes.productThumbnail}>
      <Box className={classes.productImg}>
        <img src={imgActive} alt="" className={classes.productImgDetail} />
      </Box>
      <Box className={classes.listImage}>
        <ul className={classes.listImages}>
          {images.map((image) => (
            <li
              key={image.id}
              className={classes.imageItem}
              onClick={() => handleChangeImage(image)}
            >
              <img src={image.image} alt="" className={classes.imageItemDetail} />
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}

export default ProductThumbnail;
