import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Button, InputLabel,makeStyles } from '@material-ui/core';
import InputField from '../../../../component/Form-control/InputField/index';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

Editing.propTypes = {
    infomation:PropTypes.object,
    onSubmit: PropTypes.func,
    product: PropTypes.object,
};
const useStyles = makeStyles(theme => ({
    root:{},

    box1:{
        display:'flex',
        flexFlow: 'row nowrap',
        padding: '50px 50px'
    },

    label:{
        width: '20%',
        textAlign: 'center',
        fontWeight: '600',
        padding: '30px 20px'
    },

    inputField:{
        width: '80%',
        padding: '0px 30px'
    },

    btn:{
        display:'flex',
        float:'right',
        padding: '0px 80px'
    },

    btnSave:{
        marginRight:'10px'
    },

    btnCancel:{
        marginLeft:'10px'
        
    }
}))
function Editing({infomation = {},onSubmit=null, product={}}) {
    const match = useRouteMatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();
    const form = useForm();
    form.setValue('content',infomation.content);
    const handleSubmit = async(value) => {
        console.log('value',value);
        const data= {
            name: infomation.name,
            content: value.content
        }
        if(onSubmit){
            await onSubmit(data);
            history.push(`/Admin/product/${product.id}`)
            console.log('edit info', data);
        }
    }
    const handleCancel = () => {
        history.push(`/Admin/product/${product.id}`)
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
           <h2 style={{ textAlign: 'center', color: 'red', fontSize: '30px', padding: '25px 25px' }}>Edit Infomation</h2>
            <div className={classes.box1}>
                <InputLabel className={classes.label}>{infomation.name}</InputLabel >
                <div className={classes.inputField}>
                    <InputField name="content" form={form}/>
                </div>
            </div>
            <div className={classes.btn}>
                <Button variant="contained" color="primary" className={classes.btnSave} type="submit">Save</Button>
                <Button variant="contained" color="primary" className={classes.btnCancel} onClick={handleCancel}>Cancel</Button>
            </div>
        </form>
    );
}

export default Editing;