import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper, RadioGroup, Radio, Typography, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import DeliveryAddress from './CheckOut/DeliveryAddress';
import CartItems from './CheckOut/CartItems';
import { cartItemsCountSelectors,cartTotalCountSelectors } from '../selectors';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import cod from '../../../images/iconCOD.png';
import vnpay from '../../../images/iconVNPay.png';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

CheckOut.propTypes = {
    
};
const useStyles = makeStyles(theme => ({
    form:{
        display: 'flex',
        flexFlow: 'row'
    },

    deleveryAddress:{
        width: '30%',
        marginLeft:'5px',
        padding: '10px'
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

    bottom:{
        padding: '10px 20px',
        marginLeft:'10px',
    },

    radio:{
        display:'flex',
        flexFlow: 'row nowrap'
    },

    img:{
        height: '25px',
        width: '70px' 
    },

    label:{
        marginLeft: '10px',
        fontWeight: '500'
    },

    checkOutPrice:{
        display: 'flex',
        flexFlow: 'row nowrap',
        marginTop:'10px'
    },

    thanhTienTitle:{
        fontWeight: '500'
    },
    thanhTien:{
        marginLeft: '10px',
        fontWeight: '600',
        color: 'red'
    },
    button:{
        marginTop: '10px'
    },

    tongTienTitle:{
        fontWeight: '500',
    },

    price:{
        fontWeight: '500',
        color: 'red'
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
    
    const [value, setValue] = React.useState("cod");

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    const cartItemsCount = useSelector(cartItemsCountSelectors);
    const cartTotal = useSelector(cartTotalCountSelectors);
    console.log('product', products);
    return (
        <form>
            <Box>
                <Container>
                    <Grid item >
                        <Box className={classes.form} mt={1}>
                           
                            <Paper elevation={1} className={classes.cartItems}>
                            <Box className={classes.header}>
                                <Typography className={classes.sp}>Sản phẩm</Typography>
                                <Typography className={classes.dg}>Đơn Giá</Typography>
                                <Typography className={classes.sl}>Số Lượng</Typography>
                                <Typography className={classes.tt}>Thành tiền</Typography>
                            </Box>
                            <CartItems spi={products}/>
                            <Box className={classes.tongTien}>
                                <Typography className={classes.tongTienTitle}>Tổng tiền:</Typography>
                                <Typography className={classes.price}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartTotal)}</Typography>
                            </Box>
                            </Paper>
                            <Paper elevation={1} className={classes.deleveryAddress}>
                                <DeliveryAddress user={user}/>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item className={classes.checkOut} >
                        <Box  mt={1}>
                            <Paper elevation={1}>
                                <Box className={classes.bottom}>
                                    <FormControl component="fieldset" className={classes.bottomRadio}>                                    
                                        <RadioGroup
                                            aria-label="payment"
                                            name="payment"
                                            value={value}
                                            onChange={handleChange}
                                            className={classes.raidoForm}
                                        >
                                            <FormControlLabel 
                                            value="cod" 
                                            control={<Radio />} 
                                            label={
                                            <Box className={classes.radio}>
                                                <img src={cod} className={classes.img}/>
                                                <Typography className={classes.label}>COD</Typography>
                                            </Box>} />
                                            <FormControlLabel 
                                            value="vnpay" 
                                            control={<Radio />} 
                                            label={
                                                <Box className={classes.radio}>
                                                    <img src={vnpay} className={classes.img}/>
                                                    <Typography className={classes.label}>VNPay</Typography>
                                                </Box>} />
                                        </RadioGroup>
                                    </FormControl>
                                    <Box className={classes.bottomCheckOut}>
                                        <Box className={classes.checkOutArea}>
                                            <Box className={classes.checkOutPrice}>
                                                <Typography className={classes.thanhTienTitle}>Thành tiền ({cartItemsCount} Sản phẩm):</Typography>
                                                <Typography className={classes.thanhTien}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartTotal)}</Typography>
                                            </Box>
                                            <Box>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                size="normal"
                                                className={classes.button}
                                                startIcon={<AccountBalanceWalletIcon />}
                                            >
                                                Đặt Hàng
                                            </Button>
                                            </Box>
                                        </Box>   
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Container> 
            </Box>
        </form>
        
    );
}

export default CheckOut;