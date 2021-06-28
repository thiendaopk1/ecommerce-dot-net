import { Box } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useRouteMatch } from 'react-router';
import brandsApi from '../../../../../api/brandsApi';
import useBrandDetail from '../../../../components/hook/useBrandDetail';
import EditBrandsForm from './EditBrandsForm';

EditBrands.propTypes = {
    closeDialog: PropTypes.func,
};

function EditBrands(props) {
    const { params: {brandId}, url } = useRouteMatch();
    const { enqueueSnackbar } = useSnackbar();
    const {brand} = useBrandDetail(brandId);
    const handleSubmit = async (value) => {
        (async () => {
            try {
                value.id = brandId;
                const res = await brandsApi.edit(value);
                enqueueSnackbar('Blocked success!', {variant: 'success'});
            } catch (error) {
                console.log('error', error);
                enqueueSnackbar(error.message, {variant: 'error'});
            }
        })();
    };
    return (
        <Box style={{width:'100%'}}>
            <EditBrandsForm onSubmit={handleSubmit} brand={brand}/>
        </Box>
    );
}

export default EditBrands;