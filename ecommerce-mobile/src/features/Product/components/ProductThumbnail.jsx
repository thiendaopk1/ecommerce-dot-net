import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
// import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/index';
import { Carousel } from "react-responsive-carousel";

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({product = {}}) {

const {images} = product;


    return (
        <Carousel >
            {images && images.map((image) => (
                <div key={image.id} >
                    <img alt="" src={image.image} />
                </div>
            ))}
            
        </Carousel>
    );
}

export default ProductThumbnail;