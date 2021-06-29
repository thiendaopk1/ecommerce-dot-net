import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    
};
const useStyles = makeStyles((theme) => ({
    root:{
        width: '280px',
        
        
    }
}))
function InputField(props) {
    const classes = useStyles();
    const {form, name, label, disabled} = props;
    const {errors} = form;
    const hasError = errors[name];
    return (
        <Controller
        name={name}
        control={form.control}
        as={TextField}
        className={classes.root}
        margin = "normal"
        // variant="outlined"
        fullWidth
        label={label}
        disabled={disabled}
        
        error={!!hasError}
        helperText={errors[name]?.message}
        />
    );
}

export default InputField;