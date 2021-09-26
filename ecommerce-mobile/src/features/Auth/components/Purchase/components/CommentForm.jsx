import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Box, Button, Typography } from '@material-ui/core';
import FormComment from './FormComment';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import commentsApi from '../../../../../api/commentsApi';
CommentForm.propTypes = {
  closeDialog: PropTypes.func,
  onSubmitComment: PropTypes.func,
  cartItems: PropTypes.array,
  ido: PropTypes.number,
};
const useStyles = makeStyles((theme) => ({
  commentCenter: {
    flex: '1',
    overflowY: 'auto',
    paddingRight: '50px',
    marginRight: '-50px',
    paddingLeft: '50px',
    marginLeft: '-50px',
    position: 'relative',
  },

  commentCenter: {
    marginBottom: '84px',
  },

  commentFooter: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'flex-end',
    right: '0',
    height: '84px',
    textTransform: ' uppercase',
    background: 'linear-gradient(rgba(255,255,255,0.9), #fff)',
    alignItems: 'center',
    padding: '22px 30px',
    boxSizing: 'border-box',
    borderBottomLeftRadius: '3px',
    borderBottomRightRadius: '3px',
  },
}));
function CommentForm({ closeDialog = null, onSubmitComment = null, cartItems = [], ido }) {
  const classes = useStyles();
  console.log('cartItems', cartItems);
  console.log('ido', ido);
  const { enqueueSnackbar } = useSnackbar();
  const form = useForm({});

  const handleClose = () => {
    if (closeDialog) closeDialog();
  };

  const handleSubmit = async (values) => {
    let rates = values.rate;
    let contents = values.content;
    let datas = [];
    let data1 = {
      rate: '',
      content: '',
      idp: 1,
      ido: 1,
    };
    for (let i = 0; i < rates.length; i++) {
      data1 = {
        rate: parseInt(rates[i]),
        content: contents[i],
        idp: cartItems[i].idp,
        ido: ido,
      };
      datas.push(data1);
    }
    console.log('data', datas);
    const list = await commentsApi.addComment(datas);
    const { data } = list;
    enqueueSnackbar('bạn đã comment đơn hàng này', { variant: 'success' });

    if (onSubmitComment) {
      onSubmitComment(data);
    }
    if (closeDialog) {
      closeDialog();
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Typography variant="h4">Đánh giá</Typography>
      <Box className={classes.commentCenter}>
        {cartItems.map((cartItem, index) => (
          <FormComment
            form={form}
            index={index}
            cartItem={cartItem}
            className={classes.formComment}
          />
        ))}
      </Box>
      <Box className={classes.commentFooter}>
        <Button onClick={handleClose}>Trở lại</Button>
        <Button type="submit">Hoàn thành</Button>
      </Box>
    </form>
  );
}

export default CommentForm;
