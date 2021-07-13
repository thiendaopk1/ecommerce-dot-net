import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ordersApi from '../../../../api/ordersApi';
import OrdersList from './components/OrdersList';
import PurchaseMenu from './components/PurchaseMenu';
import {Redirect} from 'react-router-dom';
Purchase.propTypes = {
    
};
const useStyles = makeStyles((theme) => ({
    pagination: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',

        marginTop: '20px',
        paddingBottom: '20px',
    }

}))
function Purchase(props) {
    const classes = useStyles();
    const [ordersList, setOrdersList] = useState([]);
    const history = useHistory();
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);

        return {
            ...params,
            _page: Number.parseInt(params._page)|| 1,
            _limit: Number.parseInt(params._limit) || 10,
            
        };
    }, [location.search]);
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 10,
        page: 1,
    });
    useEffect(() => {
        (async () => {
            try {
                const params2={...queryParams};
                const rp=await ordersApi.getAll(params2);

                const {data, pagination} = rp;
                console.log('data', data);
                setOrdersList(rp.data);
                setPagination(pagination);
            } catch (error) {
                console.log(error)
            }
        })();
    },[queryParams]);
    const handlePageChange = (e, page) => {

        const filters = {
            ...queryParams,
            _page: page,
        };
        history.push({
            pathName: history.location.pathName,
            search: queryString.stringify(filters),
        });
    };
    //handle filter 
    const handelFiltersChange = (newFilters) => {
  
        const filters = {
            ...queryParams,
            ...newFilters,
        };
        history.push({
            pathName: history.location.pathName,
            search: queryString.stringify(filters),
        });
        
    };
    const handleCancel = (value) => {
        setOrdersList(value)
    }
    const loggedInUser = useSelector(state => state.user.current);
    const isLoggedIn = !!loggedInUser.id;
    if(!isLoggedIn){
        return <Redirect to="/"/>
    }
    return (
        <Box >
            <Container >
                <Grid item>
                    <Paper elevation={0}>
                        <PurchaseMenu filters={queryParams} onChange={handelFiltersChange} />
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper elevation={0} mt={2}>
                        <OrdersList data={ordersList} onSubmitCancel={handleCancel}/>
                        <Box className={classes.pagination}>
                                <Pagination 
                                color="secondary" 
                                count={Math.ceil(pagination._total / pagination._limit)} 
                                _page={pagination._page}
                                onChange={handlePageChange}
                                >
                                </Pagination>
                            </Box>
                    </Paper>
                </Grid>
            </Container>
        </Box>
    );
}

export default Purchase;