import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../../component/Form-control/InputField';
import { Redirect } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';

EditBrandsForm.propTypes = {
    closeDialog: PropTypes.func,
    onsubmit: PropTypes.func,
    brand: PropTypes.object, 
};

function EditBrandsForm(props) {
    const brand = props.brand;
    const schema = yup.object().shape({
        name: yup.string().required('please enter brand name'),
    });

    const form = useForm({
        defaultValues:{
            name:" ",  
        },
        resolver: yupResolver(schema),
    });
    form.setValue('name',brand);
    const handleSubmit = async (value) => {
        const onSubmit1 = props.onSubmit;
        await onSubmit1(value);
       
    }
   
    return (
        <form style={{maxWidth:'50%',margin:'auto'}} onSubmit={form.handleSubmit(handleSubmit)}>
            <h1 style={{textAlign:'center',color:'red'}}>Edit brands</h1>
            <InputField name="name" label="brand name" required="required" form={form} />
            <Button type="submit" variant="contained" color="primary" fullWidth>Edit</Button>
        </form>
    );
}

export default EditBrandsForm;