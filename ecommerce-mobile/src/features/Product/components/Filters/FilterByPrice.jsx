import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import FilterStyles from './FilterStyles';

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const classes = FilterStyles();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
  };

  const handleSubmitDelete = () => {
    setValues({ salePrice_gte: 0, salePrice_gte: 0 });
    if (onChange) onChange({ salePrice_gte: undefined, salePrice_lte: undefined });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2" className={classes.title}>
        Khoảng giá
      </Typography>

      <Box className={classes.range}>
        <TextField name="salePrice_gte" value={values.gte} onChange={handleChange} />
        <span>-</span>
        <TextField name="salePrice_lte" value={values.lte} onChange={handleChange} />
      </Box>

      <Button variant="outlined" color="secondary" size="small" onClick={handleSubmit}>
        Áp dụng
      </Button>
      <Button variant="outlined" color="secondary" size="small" onClick={handleSubmitDelete}>
        Xóa
      </Button>
    </Box>
  );
}

export default FilterByPrice;
