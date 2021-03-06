import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../components/textField/InputField';
NewBrands.propTypes = {
    onSubmit1: PropTypes.func,
};

function NewBrands({onSubmit1}) {
    
    const schema = yup.object().shape({
        name: yup.string().required('please enter ram name'),
    });

    const form = useForm({
        defaultValues:{
            name:'',  
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = async (value) => {
        
        if(onSubmit1){
            await onSubmit1(value);
        }
    };
    return (
        <Box style={{width:'100%'}}>
        <form style={{maxWidth:'50%',margin:'auto'}} onSubmit={form.handleSubmit(handleSubmit)}>
            <h1 style={{textAlign:'center',color:'red'}}>New brands</h1>
            <InputField name="name" label="Tên hãng" form={form} />
            <Button type="submit" variant="contained" color="primary" fullWidth>save</Button>
        </form>
        </Box>
    );
}

export default NewBrands;