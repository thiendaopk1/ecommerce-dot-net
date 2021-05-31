import { Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import { default as React, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../../../component/Form-control/InputField';


FormRating.propTypes = {
    onSubmit: PropTypes.func,
};
const useStyles = makeStyles(theme => ({
    root: {

    },

    rate: {
        display: 'flex',
        flexFlow: 'row nowrap'
    },

    title: {
        fontWeight: '500'
    },

    rating: {
        marginLeft: '10px'
    },

    input: {

    },

    button: {
        float: 'right',
    },


}))
function FormRating(props) {
    const classes = useStyles();
    const [value, setValue] = useState(1);
    const form = useForm({
        defaultValues:{
            content: '',
        },
    });
  
    return (
        <form>
            <Box className={classes.rate}>
                <Typography className={classes.title}>Vui lòng chọn đánh giá:</Typography>
                <Rating
                    className={classes.rating}
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                }}
                />
            </Box>
            <Box>
                <InputField name="content" form={form} />
            </Box>
            
            <Button type="submit" variant="contained" color="primary" className={classes.button}>Bình luận</Button>
              
        </form>
    );
}

export default FormRating;