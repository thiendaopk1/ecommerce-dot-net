import { Box, Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React from 'react';
import ramsApi from '../../../../../api/ramsApi';
import InputField from '../../../../../component/Form-control/InputField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Redirect } from 'react-router';
NewRams.propTypes = {
    
};

function NewRams(props) {
    const { enqueueSnackbar } = useSnackbar();
    const schema = yup.object().shape({
        ram: yup.string().required('please enter ram capacity'),
    });
    const [open, setOpen] = useState(false);
    const form = useForm({
        defaultValues:{
            ram:'',  
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = async (value) => {
            try {
                const res = await ramsApi.add(value);
                enqueueSnackbar('add ram success!', {variant: 'success'});
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
            <h1 style={{textAlign:'center',color:'red'}}>New ram</h1>
            <InputField name="ram" label="Capacity" form={form} />
            <Button type="submit" variant="contained" color="primary" fullWidth>save</Button>
        </form>
        </Box>
    );
}

export default NewRams;