import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import InputField from '../../../../component/Form-control/InputField';


DeliveryAddress.propTypes = {
    user: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
    
}))

function DeliveryAddress({user ={}}) {
    console.log('user1', {user});
    const classes = useStyles();
    const form = useForm({
        defaultValues:{
            fullname: user.current.fullname,
            address:user.current.address,
            phone:user.current.phone,
            email:user.current.email,
            note:'',

        },
       
    });
    return (
        <form>
            <Box>
                <Box>
                    <p>Địa chỉ giao hàng</p>
                </Box>
                <Box>

                    <InputField name="fullname" label="Full Name" form={form} className={classes.fullname}/>
                    <Box className={classes.phoneAndEmail}>
                        <InputField name="phone" label="Phone" form={form} className={classes.phone}/>
                        <InputField name="email" label="Email" disabled form={form} className={classes.email}/>
                    </Box>
                    
                    <InputField name="address" label="Adress" form={form}/>
                    <InputField name="note" label="Note" form={form}/>
                </Box>
            </Box>
        </form>
        
    );
}

export default DeliveryAddress;