import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../../../../component/Form-control/InputField';

EditBrandsForm.propTypes = {
    closeDialog: PropTypes.func,
    onsubmit: PropTypes.func,
};

function EditBrandsForm(props) {

    const schema = yup.object().shape({
        name: yup.string().required('please enter brand name').test('should has at least two words', 'please enter at least two words',(value) => {
            return value.split(' ').length>=2;
        }),
    });

    const form = useForm({
        defaultValues:{
            name:'',  
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (value) => {
        const onSubmit1 = props.onSubmit;
        await onSubmit1(value);
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="name" label="Name" form={form} />
            <Button type="submit" variant="contained" color="primary" fullWidth>Edit</Button>

        </form>
    );
}

export default EditBrandsForm;