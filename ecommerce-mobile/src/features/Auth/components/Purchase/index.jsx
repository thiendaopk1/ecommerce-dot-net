import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ordersApi from '../../../../api/ordersApi';
import OrdersList from './components/OrdersList';
import PurchaseMenu from './components/PurchaseMenu';

Purchase.propTypes = {
    
};
const useStyles = makeStyles((theme) => ({
    // orders: {
    //  background: '#f8f9fa'
    // }
}))
function Purchase(props) {
    const classes = useStyles();
    const [ordersList, setOrdersList] = useState([]);
    console.log('ordersList',ordersList);
    useEffect(() => {
        (async () => {
            try {
               
                const rp = await ordersApi.getAll();
                setOrdersList(rp.map((x) => ({
                    id: x.id,
                    status: 
                        x.status.statusString
                    ,
                    date: x.date,
                    paymentType: x.paymentType,
                    lastPrice: x.lastPrice,
                    listItems: x.listItems,

                })));
            } catch (error) {
                console.log(error)
            }
        })();
    },[]);
    
    return (
        <Box >
            <Container >
                <Grid item>
                    <Paper elevation={0}>
                        <PurchaseMenu />
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper elevation={0} mt={2}>
                        <OrdersList data={ordersList}/>
                    </Paper>
                </Grid>
            </Container>
        </Box>
    );
}

export default Purchase;