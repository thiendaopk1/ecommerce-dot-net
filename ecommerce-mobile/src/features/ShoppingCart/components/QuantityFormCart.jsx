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
        width: '100%'
    },

    button: {
        marginLeft: '20px',
        marginTop: '40px',
        height: '50px'
    }
    
}));
function QuantityFormCart({quantityItem,id, onChange = null}) {
    
    const classes = useStyles();
    const schema = yup.object().shape({
        quantity: yup.number().required('làm ơn nhập').min(1, 'Tối thiểu là 1 sản phẩm').typeError('Làm ơn nhập số'),
      });
    // console.log('quantity', quantityItem);
    const handleOnChange = async (values) => {
        if(onChange){
            await onChange(values);
        }
    }
    const form = useForm({
        defaultValues:{
            quantity:quantityItem,  
        },
        // onChange:{
        //      quantity:handleOnChange,
        // },
        resolver: yupResolver(schema),
       
    });
    // console.log('onchange', onChange);
    

  
    return (
        <form>
            <QuantityInputField name="quantity" id={id} form={form} />
        </form>
    );
}

export default QuantityFormCart;