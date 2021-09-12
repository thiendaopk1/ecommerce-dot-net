import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router';
import * as yup from 'yup';
import romsApi from '../../../../../api/romsApi';
import InputField from '../../../../../component/Form-control/InputField';
NewRoms.propTypes = {
    
};

function NewRoms(props) {
    const { enqueueSnackbar } = useSnackbar();
    const schema = yup.object().shape({
        rom: yup.string().required('please enter rom capacity'),
    });
    const [open, setOpen] = useState(false);
    const form = useForm({
        defaultValues:{
            rom:'',  
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = async (value) => {
            try {
                const res = await romsApi.add(value);
                enqueueSnackbar('success!', {variant: 'success'});
                setOpen(true);
            } catch (error) {
                enqueueSnackbar(error.message, {variant: 'error'});
            }
    };
    if(open){
        return <Redirect to="/Admin/categories"/>
    }
    return (
        <Box style={{width:'100%'}}>
        <form style={{maxWidth:'50%',margin:'auto'}} onSubmit={form.handleSubmit(handleSubmit)}>
            <h1 style={{textAlign:'center',color:'red'}}>New rom</h1>
            <InputField name="rom" label="Capacity" form={form} />
            <Button type="submit" variant="contained" color="primary" fullWidth>save</Button>
        </form>
        </Box>
    );
}

export default NewRoms;