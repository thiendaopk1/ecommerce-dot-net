import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Controller } from 'react-hook-form';
import Rating from '@material-ui/lab/Rating';
import AreaField from '../../../../../admin/components/textField/AreaField';
FormComment.propTypes = {
  form: PropTypes.object,
  cartItem: PropTypes.object,
  index: PropTypes.number,
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },

  infoProduct: {
    display: 'flex',
    alignItems: 'center',
  },

  infoProduct__imgae: {
    width: '80px',
    height: '80px',
  },

  infoProduct__imgae1: {
    width: '100%',
    height: '100%',
  },

  rating: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0 20px',
    position: 'relative',
    flexDirection: 'column',
  },

  textFeild: {
    display: 'flex',
    flex: '1',
    width: '100%',
  },
}));
function FormComment({ form = {}, cartItem = {}, index }) {
  const classes = useStyles();
  const { product } = cartItem;
  const [valueRate, setValueRate] = useState(0);
  const handleChangeRate = (newValues) => {
    setValueRate(newValues);
  };
  return (
    <div>
      <Box className={classes.root}>
        <Box className={classes.infoProduct}>
          <Box className={classes.infoProduct__imgae}>
            <img src={product.images[0].image} alt="" style={{ width: '100%', height: '100%' }} />
          </Box>
          <Box className={classes.infoProduct__name}>
            <Typography className={classes.infoProduct__name1}>{product.name}</Typography>
          </Box>
        </Box>
        <Box className={classes.rating}>
          <Controller
            name={`rate[${index}]`}
            control={form.control}
            defaultValue={valueRate}
            as={
              <Rating
                key={`rate[${index}]`}
                onChange={(event, newValue) => {
                  console.log('newValue', newValue);
                  handleChangeRate(newValue);
                }}
                className={classes.rate}
                size="large"
              />
            }
          />
          {form.watch(`rate[${index}]`) >= 1 && (
            <Box className={classes.textFeild}>
              <AreaField
                name={`content[${index}]`}
                form={form}
                placeholder="Hãy cho chúng tôi biết đánh giá của bạn về sản phẩm này"
              />
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default FormComment;
