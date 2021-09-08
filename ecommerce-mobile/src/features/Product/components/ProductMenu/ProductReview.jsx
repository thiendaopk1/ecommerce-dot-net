import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import FormComment from './FormComment';
import PropTypes from 'prop-types';
import commentsApi from '../../../../api/commentsApi';
ProductReview.propTypes = {
  product: PropTypes.object,
  onSubmit: PropTypes.func,
};
function ProductReview({ product = {}, onSubmit }) {
  const [comments, setComments] = useState([]);
  const { id } = product;
  const [tbcRate, setTbcRate] = useState();
  const [tongCmt, setTongCmt] = useState();
  useEffect(() => {
    (async () => {
      try {
        const list = await commentsApi.getAllComment(id);
        console.log('list', list);
        const { listCommentByProduct, tbcRate, tongCmt } = list;
        setComments(listCommentByProduct);
        setTbcRate(tbcRate);
        setTongCmt(tongCmt);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, []);

  const handleSubmitReview = (value) => {
    setComments(value.listCommentByProduct);
  };

  return (
    <Box>
      <Box>
        <FormComment
          comments={comments}
          tbcRate={tbcRate}
          tongCmt={tongCmt}
          onSubmit={handleSubmitReview}
        />
      </Box>
    </Box>
  );
}

export default ProductReview;
