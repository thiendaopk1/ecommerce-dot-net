import { makeStyles, Paper } from '@material-ui/core';
import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Orders from './Orders';
import ordersApi from '../../../../../api/ordersApi';

OrdersList.propTypes = {
  data: PropTypes.array,
  onSubmitCancel: PropTypes.func,
  onSubmitComment: PropTypes.func,
};
OrdersList.defaultProps = {
  data: [],
};
const useStyles = makeStyles((theme) => ({
  paper: {
    height: '100%',
  },
}));
function OrdersList({ data, onSubmitCancel = null, onSubmitComment = null }) {
  const classes = useStyles();
  const handleCancel = (orderId) => {
    (async () => {
      try {
        const animation = await ordersApi.cancel(orderId);
        console.log('order:', animation.data);
        onSubmitCancel(animation.data);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const handleComment = async (data) => {
    if (onSubmitComment) {
      await onSubmitComment(data);
    }
  };

  return (
    <Box>
      <Grid container>
        {data.map((order) => (
          <Paper elevation={0} mt={2} style={{ width: '100%' }}>
            <Grid item key={order.id} xs={12} className={classes.paper}>
              <Orders orders={order} onCancel={handleCancel} onSubmitComment={handleComment} />
            </Grid>
          </Paper>
        ))}
      </Grid>
    </Box>
  );
}

export default OrdersList;
