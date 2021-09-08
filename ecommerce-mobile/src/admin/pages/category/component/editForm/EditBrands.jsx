import { Box, Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, useRouteMatch } from 'react-router';
import brandsApi from '../../../../../api/brandsApi';
import InputField from '../../../../../component/Form-control/InputField';
import useBrandDetail from '../../../../components/hook/useBrandDetail';
import EditBrandsForm from './EditBrandsForm';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
EditBrands.propTypes = {
    closeDialog: PropTypes.func,
};

function EditBrands(props) {
    const { params: {brandId}, url } = useRouteMatch();
    const { enqueueSnackbar } = useSnackbar();
    const {brand} = useBrandDetail(brandId);
    const [open, setOpen] = useState(false);
    const handleSubmit = async (value) => {
        (async () => {
            try {
                value.id = brandId;
                const res = await brandsApi.edit(value);
                enqueueSnackbar('success!', {variant: 'success'});
                setOpen(true);
            } catch (error) {
                console.log('error', error);
                enqueueSnackbar(error.message, {variant: 'error'});
            }
        })();
    };
    if(open){
        return <Redirect to="/Admin/categories"/>
    }
    return (
        <Box style={{width:'100%'}}>
            <EditBrandsForm onSubmit={handleSubmit} brand={brand.name}/>
        </Box>
    );
}

export default EditBrands;