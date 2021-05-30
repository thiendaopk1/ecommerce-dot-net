
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { default as React} from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../component/Form-control/InputField';
import QuantityField from '../../../component/Form-control/QuantityField';

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
    root: {},

    form: {
        display: 'flex',
        flexFlow: 'row nowrap',
        width: '100%'
    },

    button: {
        marginLeft: '20px',
        marginTop: '40px',
        height: '50px'
    }
    
}));
function AddToCartForm({onSubmit = null }) {
    const classes = useStyles();
    const schema = yup.object().shape({
        quantity: yup.number().required('làm ơn nhập').min(1, 'Tối thiểu là 1 sản phẩm').typeError('Làm ơn nhập số'),
      });
    const form = useForm({
        defaultValues:{
            quantity:1,
            
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        if(onSubmit){
          await onSubmit(values);
        }

    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} >
            <Box className={classes.form}>
                <QuantityField name="quantity" label="Quantity" form={form}  />
                   
                <Button type="submit" variant="contained" color="primary" size="large" className={classes.button}>
                    Mua ngay
                </Button>

            </Box>
            
        
        </form>
    );
}

export default AddToCartForm;