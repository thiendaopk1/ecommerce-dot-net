import React from 'react';
import PropTypes from 'prop-types';

ProductDescription.propTypes = {
    product: PropTypes.object,
};

function ProductDescription({product = {}}) {
    return (
        <div dangerouslySetInnerHTML={{__html: product.longDescription}}/>
           
    );
}

export default ProductDescription;