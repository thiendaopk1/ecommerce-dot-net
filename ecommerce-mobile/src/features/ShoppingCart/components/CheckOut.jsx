import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import DeliveryAddress from './CheckOut/DeliveryAddress';
import CartItems from './CheckOut/CartItems';
import { cartItemsCountSelectors,cartTotalCountSelectors } from '../selectors';

CheckOut.propTypes = {
    
};
const useStyles = makeStyles(theme => ({
    form:{
        display: 'flex',
        flexFlow: 'row'
    },

    deleveryAddress:{
        width: '30%',
        marginLeft:'5px'
    },

   
    cartItems: {
        width: '70%',
        marginLeft:'10px'
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
        width: '56.25771%',
        display: 'block',
        fontWeight: '500',
       
    },

    dg: {
        padding: '16px 0px',
        width: '15.88022%',
        display: 'block',
        color:'#bbb',
        textAlign: 'center'
    },

    sl: {
        padding: '16px 0px',
        width: '15.4265%',
        display: 'block',
        color:'#bbb',
        textAlign: 'center'
    },

    tt: {
        padding: '16px 0px',
        width: '12.43557%',
        display: 'block',
        color:'#bbb',
        textAlign: 'center'
    },

    tongTien:{
        display: 'flex',
        flexFlow: 'row nowrap',
        float: 'right',
        marginRight: '25px'
    },
}))
function CheckOut(props) {
    const classes = useStyles();

    const user = useSelector((state) => {
        return state.user;
    })
    
    
    const products = useSelector((state) => {
        return state.cart.cartItems
    })
    
    const cartItemsCount = useSelector(cartItemsCountSelectors);
    const cartTotal = useSelector(cartTotalCountSelectors);
    console.log('product', products);
    return (
        <form>
            <Box>
                <Container>
                    <Grid item >
                        <Box className={classes.form}>
                            <Paper elevation={0} className={classes.deleveryAddress}>
                                <DeliveryAddress user={user}/>
                            </Paper>
                            <Paper elevation={0} className={classes.cartItems}>
                            <Box className={classes.header}>
                                <Typography className={classes.sp}>Sản phẩm</Typography>
                                <Typography className={classes.dg}>Đơn Giá</Typography>
                                <Typography className={classes.sl}>Số Lượng</Typography>
                                <Typography className={classes.tt}>Thành tiền</Typography>
                            </Box>
                            <CartItems spi={products}/>
                            <Box className={classes.tongTien}>
                                <Typography>Tổng tiền:</Typography>
                                <Typography>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartTotal)}</Typography>
                            </Box>
                            </Paper>
                            
                        </Box>
                        
                    </Grid>
                    <Grid item className={classes.checkOut}>
                        <Box>
                            
                        </Box>
                    </Grid>
                </Container> 
            </Box>
        </form>
        
    );
}

export default CheckOut;