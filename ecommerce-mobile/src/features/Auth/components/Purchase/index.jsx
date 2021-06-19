import { Box, Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ordersApi from '../../../../api/ordersApi';
import OrdersList from './components/OrdersList';
import PurchaseMenu from './components/PurchaseMenu';

Purchase.propTypes = {
    
};

function Purchase(props) {
    const loggedInUser = useSelector(state => state.user.current);
    const [ordersList, setOrdersList] = useState([]);
    console.log('ordersList',ordersList);
    // const location = useLocation();
    // const queryParams = useMemo(() => {
    //     const params = queryString.parse(location.search);
    //     return {
    //         ...params,
    //     };
    // }, [location.search]);
    useEffect(() => {
        (async () => {
            try {
                // const params2={...queryParams};
                // const rp = await ordersApi.getAll(params2);
                // console.log('params', params2);
                const rp = await ordersApi.getAll(loggedInUser.id);
                console.log('rp', rp);
                setOrdersList(rp.map((x) => ({
                    id: x.id,
                    status: x.status,
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
        <Box>
            <Container>
                <Grid item>
                    <Paper elevation={0}>
                        <PurchaseMenu />
                        alo 
                    </Paper>
                </Grid>
                <Grid item>
                    <OrdersList data={ordersList}/>
                </Grid>
            </Container>
        </Box>
    );
}

export default Purchase;