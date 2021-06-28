import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../../component/Form-control/InputField';
import { Box, Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import brandsApi from '../../../../../api/brandsApi';
NewBrands.propTypes = {
    
};

function NewBrands(props) {
    const { enqueueSnackbar } = useSnackbar();
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
            try {
                const res = await brandsApi.add(value);
                enqueueSnackbar('Blocked success!', {variant: 'success'});
            } catch (error) {
                enqueueSnackbar(error.message, {variant: 'error'});
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