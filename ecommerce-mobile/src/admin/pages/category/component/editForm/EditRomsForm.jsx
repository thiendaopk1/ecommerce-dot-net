import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../../../../component/Form-control/InputField';

EdirRomsForm.propTypes = {
    closeDialog: PropTypes.func,
    onsubmit: PropTypes.func,
    rom: PropTypes.object, 
};

function EdirRomsForm(props) {
    const rom = props.rom;
    const schema = yup.object().shape({
        name: yup.string().required('please enter rom name').test('should has at least two words', 'please enter at least two words',(value) => {
            return value.split(' ').length>=2;
        }),
    });

    const form = useForm({
        defaultValues:{
            name:rom.rom,  
        },
        resolver: yupResolver(schema),
    });
    form.setValue('name',rom.rom);
    const handleSubmit = async (value) => {
        const onSubmit1 = props.onSubmit;
        await onSubmit1(value);
    }
    return (
        <form style={{maxWidth:'50%',margin:'auto'}} onSubmit={form.handleSubmit(handleSubmit)}>
            <h1 style={{textAlign:'center',color:'red'}}>Edit roms</h1>
            <InputField name="name" label="Dung lượng" form={form} />
            <Button type="submit" variant="contained" color="primary" fullWidth>Edit</Button>
        </form>
    );
}

export default EdirRomsForm;