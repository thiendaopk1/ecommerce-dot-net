import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FormRating from './FormRating';
import Comment from './Comment';
import FormComment from './FormComment';
import commentsApi from '../../../../api/commentsApi';

ProductReview.propTypes = {
    
};
function ProductReview(props) {

    const handleSubmitReview = () => {

    }
    const [commentList, setCommentList] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const list = await commentsApi.get();
                setCommentList(list.map((x) => ({
                    id: x.id,
                    listCommentByProduct: x.listCommentByProduct,
                }))
                );
            } catch (error) {
              console.log(error);  
            }
        })();
    },[]);
    return (
        <Box>
            <Box>
                <FormComment />
            </Box>
            
            <Box>
                <Comment />
            </Box>
            
        </Box>
        
    );
}

export default ProductReview;