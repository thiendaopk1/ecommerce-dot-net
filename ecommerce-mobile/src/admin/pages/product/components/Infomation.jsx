import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import EditInfomation from './EditInfomation';
import NewInfomation from './NewInfomation';
import { makeStyles } from '@material-ui/core';
import productApi from '../../../../api/productApi'
import { useSnackbar } from "notistack";
Infomation.propTypes = {
    informations: PropTypes.array,
    product: PropTypes.object,
    onSubmitInfo: PropTypes.func,
    onSubmitDelete: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    flexFlow:'column',
    width: '100%'
  },
  newInfo: {

    borderRadius: '5px',
    width: '100%',
    marginLeft: '5px'
  },
  editInfo:{
    // border: '1px solid black',

    width: '100%',
    marginRight: '5px',
    padding: '15px 0px',
    height: '550px'
  },
}))
function Infomation({informations, product={},onSubmitInfo = null, onSubmitDelete =null}) {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
 
  const handleDeleteInfo = async(id,infomationId) => {
    try{
      await productApi.removeInfo(id,infomationId);
      const listInfo = informations.filter((item) => item.id !== infomationId);
      onSubmitDelete(listInfo)
      enqueueSnackbar('delete infomation success!', {variant: 'success'});
    }catch(error){
      enqueueSnackbar(error.message, {variant: 'error'});
    }
  }
 
  const handleAddInfo = async(data) => {
    try {
      const res = await productApi.addInfo(data,product.id);
      console.log('edit res', res);
      onSubmitInfo(res);
      enqueueSnackbar('Thêm infomation thành công', { variant: 'success' });
    } catch (error) {
      console.log('error', error);
        enqueueSnackbar(error.message, { variant: 'error' });
    }
  }
    return (
        <div className={classes.root}>
          <h2 style={{textAlign:'center'}}>Infomation</h2>
           <div className={classes.newInfo}>
            <NewInfomation onSubmit={handleAddInfo}/>
          </div>
          <div className={classes.editInfo}>
            <EditInfomation arrInfos={informations} product={product} onSubmitDelete={handleDeleteInfo}/>
          </div> 
        </div>
        
    );
}

export default Infomation;