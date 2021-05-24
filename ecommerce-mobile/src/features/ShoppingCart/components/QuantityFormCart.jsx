import { yupResolver } from '@hookform/resolvers/yup';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import QuantityField from '../../../component/Form-control/QuantityField';


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
function QuantityFormCart({quantityItem, onChange = null}) {
    
    const classes = useStyles();
    const schema = yup.object().shape({
        quantity: yup.number().required('làm ơn nhập').min(1, 'Tối thiểu là 1 sản phẩm').typeError('Làm ơn nhập số'),
      });
    // console.log('quantity', quantityItem);
    const form = useForm({
        defaultValues:{
            quantity:quantityItem,
            
        },
        resolver: yupResolver(schema),
    });
    const handleOnChange = async (values) => {
        if(onChange){
            await onChange(values);
        }
    }

  
    return (
        <form>
            <QuantityField name="quantity" form={form} onChange={handleOnChange}/>
        </form>
    );
}

export default QuantityFormCart;