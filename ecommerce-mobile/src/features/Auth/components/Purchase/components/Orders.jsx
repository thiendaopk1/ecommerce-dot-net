import { Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import ListItems from './ListItems';


Orders.propTypes = {
    Orders: PropTypes.object,
    onCancel: PropTypes.func,
};
const useStyles = makeStyles(theme => ({
    header: {
        padding: '20px 25px',
        borderBottom: '1px solid rgba(0,0,0,.09)',
        // marginBottom: '5px'
    },

    paymentType:{
        display:'flex',
        float:'left',
        color: '#26aa99'
    },

    status:{
        display:'flex',
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
}))
function Orders({orders,onCancel}) {
    const classes = useStyles();
    const {status, date, lastPrice, paymentType, cartItems,id } = orders;

    const handleCancelOrder = async() => {
        if(onCancel){
            await onCancel(id);
        }
    }
    const handleBuyAgaint = () => {

    }
    return (
        <Box>
            <Container>
                
                <Grid item >
                    <Box className={classes.header}> 
                        <Box className={classes.paymentType}>
                            <Typography >Hình thức thanh toán: {paymentType}</Typography>
                        </Box>
                        <Box className={classes.status}>
                            <Typography className={classes.statuss}>{status.statusString}</Typography>
                        </Box>                        
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
                        <Box className={classes.btn1}>
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
                        </Box>
                    </Box>
                </Grid>
                
            </Container>
            
        </Box>
       
    
    );
}

export default Orders;