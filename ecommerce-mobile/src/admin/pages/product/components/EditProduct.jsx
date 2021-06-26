import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Box, Typography } from '@material-ui/core';
import InputField from '../../../components/textField/InputField';

EditProduct.propTypes = {
   product: PropTypes.object, 
};

function EditProduct({product = {}}) {


    const form = useForm({
        defaultValues: {
            name: product.name,
        },
        
    })
    return (
        <form>
            <Box >
                <label>Name:</label>
                <Typography>{product.name}</Typography>
                <InputField name="name" form={form}/>
            </Box>
        </form>
    );
}

export default EditProduct;