import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cartTotalCountSelectors } from './selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Container, Dialog, DialogContent, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
// import ProductItem from './components/ProductItem';
import ProductItem from './components/ProductItem';

import { useHistory } from 'react-router';

import { cartItemsCountSelectors } from './selectors';
import { removeAll } from './cartSlice';
import  img  from '../../images/cartEmpty.png';

ShoppingCartFeature.propTypes = {
    
};
const useStyles = makeStyles((theme) => ({
    
    root: {},
    
    top: {
        borderBottom: '1px solid #e8e8e8',
        marginTop: '12px'
    },

    center: {
        marginTop: '10px'
    },

    bottom: {
        marginTop: '10px',
        display: 'flex',
        flexFlow: 'row nowrap',
        overflow: 'hidden',
        textTransform: 'capitalize',
    },

    header: {
        padding: '0 20px',
        color: 'rgba(0,0,0,.8)',
        background: '#fff',
        textTransform: 'capitalize',
        height: '3.4375rem',
        display: 'flex',
        flexFlow: 'row nowrap',
        overflow: 'hidden',
    },

    sp: {
        padding: '16px 0px',
        width: '46.27949%',
        display: 'block',
    },

    dg: {
        padding: '16px 0px',
        width: '15.88022%',
        display: 'block',
    },

    sl: {
        padding: '16px 0px',
        width: '15.4265%',
        display: 'block',
    },

    st: {
        padding: '16px 0px',
        width: '10.43557%',
        display: 'block',
    },

    tt: {
        padding: '16px 0px',
        width: '12.70417%',
        display: 'block',
    },

    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
    },

    container: {
        display: 'flex',
        justifyContent: 'center',
        height: '350px',
        padding: '50px 0px'
    },

    box: {
        display: 'flex',
        flexFlow: 'column',
    },

    imgCartEmpty: {
        width: '150px',
        height: '150px'
    },

    typography: {
        color: '#424242',
        fontSize: '.875rem',
        lineHeight: '1rem',
        marginTop: '1.125rem',
        fontWeight: '500'
    },

    buyNow: {
        background: 'red',
        marginTop: '20px',
        height: '50px'
    },

    removeAll: {
        width: '65%',
        marginTop: '17px',
        // background: 'red'
        // display: 'block',
    },

    sum: {
        display: 'flex',
        flexFlow: 'row nowrap',
        marginRight: '50px'
        
    },

    titleSumPrices: {
        color: 'grey',
        fontWeight: '600',
        fontSize: '18px',
        padding: '16px 0px',
        
        

    },

    sumPrices: {
     marginTop: '17px',
        color: 'red',
        fontWeight: '600',
        fontSize: '18px',
        marginLeft: '5px'
    },


     
}));
//
// const cartEmpty1 = localStorage.getItem("cart");
// console.log('alo',cartEmpty1);
function ShoppingCartFeature(props) {
    //check isLogin
 
  const history = useHistory();
  const dispatch = useDispatch();
  

    const products = useSelector((state) => {
        return state.cart.cartItems
    })

    const handleClickCheckout = () => {
        history.push('/checkout');
    }

    const handleRemoveAll= () => {
        const action = removeAll();
        dispatch(action);
    }

    const handleClickBuyNow=() => {
        history.push('/');
    }
    const cartItemsCount = useSelector(cartItemsCountSelectors);
    const cartTotal = useSelector(cartTotalCountSelectors);
    const classes = useStyles();
    // console.log(cartEmpty1);
    return (
        <Box>
            <Container>
                {(products.length === 0) && (
                    <>
                        <Container className={classes.container}>
                            <Box className={classes.box}>
                                <Box >
                                    <img src={img} className={classes.imgCartEmpty}/>
                                </Box>
                                <Typography className={classes.typography}>
                                    Giỏ hàng của bạn còn trống
                                </Typography>
                                <Button variant="contained"  size="small" className={classes.buyNow} onClick={handleClickBuyNow}>Mua ngay</Button>
                            </Box>
                            
                        </Container>
                    </>
                )}
                {(products.length !== 0) && (
                    <>
                        <Grid item className={classes.top} >
                            <Paper elevation={0} mt={2}>
                                <Box className={classes.header}>
                                    <Box className={classes.sp}>
                                        Sản Phẩm
                                    </Box>
                                    <Box className={classes.dg}>
                                        Đơn Giá
                                    </Box>
                                    <Box className={classes.sl}>
                                        Số Lượng
                                    </Box>
                                    <Box className={classes.st}>
                                        Số Tiền
                                    </Box>
                                    <Box className={classes.tt}>
                                        Thao tác
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item className={classes.center}>
                            <Paper elevation={0}>
                                <ProductItem spi={products}/>
                            </Paper>
                            
                        </Grid>
                        <Grid item > 
                            <Paper elevation={0}>
                                <Box className={classes.bottom}>
                                    <Box className={classes.removeAll}>
                                        <Button onClick={handleRemoveAll} color="primary">
                                            Xóa tất cả
                                        </Button>

                                        
                                    
                                    </Box>
                                    <Box className={classes.sum}>
                                        <Box className={classes.titleSumPrices}>
                                            Tổng thanh toán
                                        </Box>
                                        <Box className={classes.sumPrices}>
                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartTotal)}
                                        </Box>
                                        </Box>
                                
                                        <Button onClick={handleClickCheckout} variant="contained" color="secondary" style={{ height:'32px', marginTop: '14px'}}>Check Out</Button>
                                
                                        
                                </Box>
                            </Paper>
                        </Grid>
                    </>
                )}
                
            </Container>
            
            
        </Box>
    );
}

export default ShoppingCartFeature;