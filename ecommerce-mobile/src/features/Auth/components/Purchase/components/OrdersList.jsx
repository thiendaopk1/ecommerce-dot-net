import { makeStyles, Paper } from '@material-ui/core';
import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Orders from './Orders';

OrdersList.propTypes = {
    data: PropTypes.array,
};
OrdersList.defaultProps = {
    data: [],
}
const useStyles = makeStyles((theme) => ({
    paper: {
        height: '100%',
        
    }
}))
function OrdersList({data}) {
   const classes = useStyles();
    return (
        <Box>
            <Grid container>
                {data.map((order) => (
                    
                        <Grid item key={order.id} xs={12} className={classes.paper}>
                            <Orders orders={order}/>   
                        </Grid>
                    
                    
                ))}
            </Grid>
        </Box>
    );
}

export default OrdersList;