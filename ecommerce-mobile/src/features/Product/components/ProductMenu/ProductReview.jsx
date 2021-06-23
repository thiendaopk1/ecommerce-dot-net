import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import Comment from './Comment';
import FormComment from './FormComment';
import PropTypes from 'prop-types';

ProductReview.propTypes = {
    product: PropTypes.object,
    onSubmit: PropTypes.func,
};
function ProductReview({product = {},onSubmit}) {
    const [comments, setComments] = useState(product.commentResponse);

    const handleSubmitReview = (value) => {
        setComments([...comments,value])
    }
    console.log('alo alo ', comments);
    return (
        <Box>
            <Box>
                <FormComment product={product} comments={comments} onSubmit={handleSubmitReview}/>
            </Box>
            
            <Box>
                <Comment comments={comments} />
            </Box>
            
        </Box>
        
    );
}

export default ProductReview;