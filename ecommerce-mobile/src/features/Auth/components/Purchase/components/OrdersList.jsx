import { makeStyles, Paper } from '@material-ui/core';
import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Orders from './Orders';
import ordersApi from '../../../../../api/ordersApi';

OrdersList.propTypes = {
    data: PropTypes.array,
    onSubmitCancel: PropTypes.func,
};
OrdersList.defaultProps = {
    data: [],
}
const useStyles = makeStyles((theme) => ({
    paper: {
        height: '100%',
        
    }
}))
function OrdersList({data, onSubmitCancel=null}) {
    const classes = useStyles();
    const handleCancel = (orderId) => {
        (async () =>{
            try {      
                const animation = await ordersApi.cancel(orderId);
                console.log('order:', animation);
                onSubmitCancel(animation);
               
            } catch (error) {
                console.log(error);
            }
        })();
    }
    
    return (
        <Box>
            <Grid container>
                {data.map((order) => (
                    
                        <Grid item key={order.id} xs={12} className={classes.paper}>
                            <Orders orders={order} onCancel={handleCancel}/>   
                        </Grid>
                    
                    
                ))}
            </Grid>
        </Box>
    );
}

export default OrdersList;