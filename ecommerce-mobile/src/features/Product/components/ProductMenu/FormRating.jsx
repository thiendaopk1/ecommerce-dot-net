import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import { default as React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import InputField from '../../../../component/Form-control/InputField';


FormRating.propTypes = {
    onSubmit: PropTypes.func,
    product: PropTypes.object,
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
function FormRating({product = {}, onSubmit}) {
    //check isLogin
  const loggedInUser = useSelector(state => state.user.current);
  const isLoggedIn = !!loggedInUser.id;

  //
    const classes = useStyles();
    const [value, setValue] = useState(1);
    const form = useForm({
        defaultValues:{
            content: '',
           rate: value,
        },
       
    });
    console.log('123', form);
    const handleSubmitComment = async (values) => {  
        values.rate = value;
        values.productId = product.id;
        
        if(onSubmit){
            await onSubmit(values);
            // console.log('123', values);
        }

           
    }
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
            {!isLoggedIn && (
                <>
                    <Button disabled type="submit" variant="contained" color="primary" className={classes.button}>Bình luận</Button>
                </>
            )}
            {isLoggedIn && (
                <>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>Bình luận</Button>
                </>
            )}
            
              
        </form>
    );
}

export default FormRating;