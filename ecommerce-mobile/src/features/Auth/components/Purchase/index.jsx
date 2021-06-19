import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import PurchaseMenu from './components/PurchaseMenu';
import { Route, Switch, useLocation } from 'react-router-dom';
import ordersApi from '../../../../api/ordersApi';
import OrdersList from './components/OrdersList';

Purchase.propTypes = {
    
};

function Purchase(props) {
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
                const rp = await ordersApi.gettAll();
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
    },[])
    return (
        <Box>
            <Container>
                <Grid item>
                    <Paper elevation={0}>
                        <PurchaseMenu />
                        alo alo
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