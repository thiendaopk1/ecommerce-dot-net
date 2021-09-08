import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import { default as React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import InputField from '../../../../component/Form-control/InputField';
import { useSnackbar } from 'notistack';

FormRating.propTypes = {
  onSubmit: PropTypes.func,
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {},

  rate: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },

  title: {
    fontWeight: '500',
  },

  rating: {
    marginLeft: '10px',
  },

  input: {},

  button: {
    float: 'right',
  },
}));
function FormRating({ product = {}, onSubmit }) {
  const { enqueueSnackbar } = useSnackbar();

  //check isLogin
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const commented = product.commentResponse.listCommentByProduct;

  const classes = useStyles();
  const [value, setValue] = useState(1);
  const form = useForm({
    defaultValues: {
      content: '',
      rate: value,
    },
  });

  const handleSubmitComment = async (values) => {
    values.rate = value;
    values.productId = product.id;
    commented.forEach((comment) => {
      if (loggedInUser.id === comment.id) {
        enqueueSnackbar('bạn đã đánh giá sản phẩm này rồi', { variant: 'success' });
        return;
      }
    });
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmitComment)}>
      <Box className={classes.rate}>
        <Typography className={classes.title}>Vui lòng chọn đánh giá:</Typography>
        <Rating
          form={form}
          className={classes.rating}
          name="rate"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            // console.log('akiki', newValue);
          }}
        />
      </Box>
      <Box>
        <InputField name="content" form={form} />
      </Box>

      <Button type="submit" variant="contained" color="primary" className={classes.button}>
        Bình luận
      </Button>
    </form>
  );
}

export default FormRating;
