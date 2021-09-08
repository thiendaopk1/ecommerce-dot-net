import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setQuantity } from '../cartSlice';

QuantityInputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {},

  input: {
    width: '80px',
  },
}));

function QuantityInputField(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { form, id, name, label, disabled } = props;
  const { errors, setValue } = form;
  const hasError = !!errors[name];
  return (
    <div>
      <FormControl error={hasError} fullWidth margin="normal" variant="outlined" size="small">
        <Typography>{label}</Typography>
        <Controller
          name={name}
          control={form.control}
          render={({ onChange, onBlur, value, name }) => (
            <Box>
              <IconButton>
                <RemoveIcon
                  onClick={() => {
                    setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1);
                    dispatch(
                      setQuantity({
                        id,
                        quantity: value ? value - 1 : 1,
                      })
                    );
                  }}
                />
              </IconButton>

              <OutlinedInput
                className={classes.input}
                id={name}
                type="number"
                disabled={disabled}
                value={value}
                onChange={onChange}
                onBlur={() => {
                  dispatch(
                    setQuantity({
                      id,
                      quantity: value,
                    })
                  );
                }}
              />

              <IconButton className={classes.icon}>
                <AddIcon
                  onClick={() => {
                    setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1);
                    dispatch(
                      setQuantity({
                        id,
                        quantity: value ? value + 1 : 1,
                      })
                    );
                  }}
                />
              </IconButton>
            </Box>
          )}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default QuantityInputField;
