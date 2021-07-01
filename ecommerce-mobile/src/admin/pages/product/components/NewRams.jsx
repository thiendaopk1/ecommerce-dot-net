import { Box, Button } from '@material-ui/core';
import React from 'react';
import InputField from '../../../components/textField/InputField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
NewRams.propTypes = {
    onSubmit3: PropTypes.func,
};

function NewRams({onSubmit3}) {
    
    const schema = yup.object().shape({
        ram: yup.string().required('please enter ram capacity'),
    });

    const form = useForm({
        defaultValues:{
            ram:'',  
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = async (value) => {
        if(onSubmit3){
            await onSubmit3(value);
        }
    };
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