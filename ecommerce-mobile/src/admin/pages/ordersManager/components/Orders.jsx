import { Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ordersApi from '../../../../api/ordersApi';
import ListItems from './ListItems';
import img from '../components/tagSale.png';
Orders.propTypes = {
    Orders: PropTypes.object,
};
const useStyles = makeStyles(theme => ({
    header: {
        padding: '20px 25px',
        borderBottom: '1px solid rgba(0,0,0,.09)',
        // marginBottom: '5px'
    },

    paymentType:{
        // display:'flex',
        // float:'left',
        color: '#26aa99',
        marginRight:15,
    },

    status:{
        // display:'flex',
        float:'right',
        color: '#ee4d2d',
    },

    

    footer:{
        // borderBottom: '1px solid rgba(0,0,0,.09)',
    },

    date:{
        display: 'flex',
        float: 'left'
    },

    dates:{
        color: 'rgba(0,0,0,.54)'
    },

    btn:{
        display: 'flex',
        flexFlow: 'column',
        float: 'right'
    },

    tongDonHang:{
        display: 'flex',
        flexFlow: 'row nowrap',
        float: 'right'
    },

    tongtien:{
        lineHeight: '30px',
        fontSize: '14px',
        margin: '0 10px 0 0',
        textAlign: 'center'
    },
    
    totalPrice:{
        color: '#ee4d2d',
        fontSize: '24px',
        lineHeight: '30px',
        // marginLeft: '10px'
    },

    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
      },
        percent: {
            width: "39px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 0 5px!important",
            margin: "0 !important",
            fontSize: "12px",
            position: "absolute",
            overflow: "hidden",
            color: "#fff",
            fontWeight: "700",
            zIndex: '2',
            backgroundImage: `url(${img})`},
}))
function Orders({orders}) {
    const classes = useStyles();
    const {status, date, lastPrice,name, paymentType, cartItems,id } = orders;
    return (
        <Box>
            {status.id==1&&<span className={classes.percent}>new</span>}  
            <Container>
                <Grid item >
                    <Box className={classes.header}> 
                        <span className={classes.paymentType}>
                           Hình thức thanh toán: {paymentType}
                        </span>
                        <span className={classes.paymentType}>
                            người mua: {name}
                        </span>
                        <span className={classes.status}>
                           {status.statusString}
                        </span>                        
                    </Box>
                </Grid>
                <Grid item className={classes.center}>
                    <ListItems listItems={cartItems}/>
                </Grid>
                <Grid item className={classes.footer}>
                    <Box className={classes.date}>
                        <Typography className={classes.dates}>Ngày đặt hàng:{date}</Typography>
                    </Box>
                    <Box className={classes.btn}>
                        <Box className={classes.tongDonHang}>
                            <Typography className={classes.tongtien}>Tổng số tiền: </Typography>
                            <Typography className={classes.totalPrice}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(lastPrice)}</Typography>
                        </Box >
                        {/* <Box className={classes.btn1}>
                            {(status.statusString === "Đang tiếp nhận" && "Đang vận chuyển") && (
                                <>
                                    <Button variant="contained" color="secondary" onClick={handleCancelOrder}>Hủy đơn hàng</Button>
                                </>
                            )}
                            {(status.statusString === "Hủy đơn hàng") && (
                                <>
                                    <Button variant="contained" color="secondary" onClick={handleBuyAgaint}>Mua lại</Button>
                                </>
                            )} 
                        </Box> */}
                    </Box>
                </Grid>
                
            </Container>
            
        </Box>
       
    
    );
}

export default Orders;