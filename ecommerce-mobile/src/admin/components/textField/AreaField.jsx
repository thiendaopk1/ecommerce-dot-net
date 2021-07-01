import React from 'react';
import PropTypes from 'prop-types';
import { TextareaAutosize, TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core';
import { Area } from 'recharts';

AreaField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    
};
const useStyles = makeStyles((theme) => ({
    root:{
        width: '85%',
        marginLeft: '60px'
    }
}))
function AreaField (props) {
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
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            rowsMax={10}
            label={label}
            disabled={disabled}
            error={!!hasError}
            helperText={errors[name]?.message}
        />
    );
}

export default AreaField;