import { Box } from '@material-ui/core';
import React from 'react';
import Comment from './Comment';
import FormComment from './FormComment';
import PropTypes from 'prop-types';

ProductReview.propTypes = {
    product: PropTypes.object,
};
function ProductReview({product = {}}) {

    const handleSubmitReview = () => {

    }
    const comments = product.commentResponse;
    console.log('alo alo ', comments);
    return (
        <Box>
            <Box>
                <FormComment product={product} comments={comments}/>
            </Box>
            
            <Box>
                <Comment comments={comments} />
            </Box>
            
        </Box>
        
    );
}

export default ProductReview;