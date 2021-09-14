import { yupResolver } from '@hookform/resolvers/yup';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import QuantityField from '../../../component/Form-control/QuantityField';
import QuantityInputField from './QuantityInputFied';

QuantityFormCart.propTypes = {
  quantityItem: PropTypes.number,
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {},

  form: {
    display: 'flex',
    flexFlow: 'row nowrap',
    width: '100%',
  },

  button: {
    marginLeft: '20px',
    marginTop: '40px',
    height: '50px',
  },
}));
function QuantityFormCart({ quantityItem, idp, onChange = null }) {
  const classes = useStyles();

  const handleOnChange = async (values) => {
    if (onChange) {
      await onChange(values);
    }
  };

  const form = useForm({
    defaultValues: {
      quantity: quantityItem,
    },
  });
  // console.log('onchange', onChange);

  return (
    <form>
      <QuantityInputField name="quantity" idp={idp} form={form} />
    </form>
  );
}

export default QuantityFormCart;
