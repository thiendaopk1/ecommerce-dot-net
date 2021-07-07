import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useRouteMatch } from 'react-router-dom';
import useInfomationDetail from '../../../components/hook/useInfomationDetail';
import Editing from './Editing';
import { Paper } from '@material-ui/core';
import { useSnackbar } from "notistack";
import productApi from '../../../../api/productApi'
import useProductDetail from '../../../components/hook/useProductDetail';

EditInfo.propTypes = {
    
};

function EditInfo(props) {
    const { enqueueSnackbar } = useSnackbar();
    const { params: {productId,infomationId} } = useRouteMatch();
    const {infomation} = useInfomationDetail(productId,infomationId);
    const {product} = useProductDetail(productId);
    console.log({infomation});
   

    const handleOnChange = async(data) => {
        console.log('data', data);
        try {
            data.productId=productId;
            data.infomationId=infomationId;
            const res = await productApi.editInfo(data);
            console.log('res', res);
            enqueueSnackbar('Edit infomation thành công', {variant: 'success'});
        
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error'});
        }
    }
    return (
        <div style={{width:'100%', }}>
            <Paper elevation={0} style={{height: '362px'}}>
                <Editing infomation={infomation} onSubmit={handleOnChange} product={product}/>
            </Paper>
        </div>
    );
}

export default EditInfo;