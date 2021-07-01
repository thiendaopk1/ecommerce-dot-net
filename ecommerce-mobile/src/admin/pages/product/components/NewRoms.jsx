import { Box, Button } from '@material-ui/core';
import React from 'react';
import InputField from '../../../components/textField/InputField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
NewRoms.propTypes = {
    onSubmit2: PropTypes.func,
};

function NewRoms({onSubmit2}) {
    
    const schema = yup.object().shape({
        rom: yup.string().required('please enter rom capacity'),
    });

    const form = useForm({
        defaultValues:{
            rom:'',  
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = async (value) => {
        if(onSubmit2){
            await onSubmit2(value);
        }
    };
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