import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, makeStyles, Typography,Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import ListItems from './ListItems';

Orders.propTypes = {
    Orders: PropTypes.object,
};
const useStyles = makeStyles(theme => ({
    header: {
        padding: '20px 25px',
        borderBottom: '1px solid black',
        // marginBottom: '5px'
    },

    paymentType:{
        display:'flex',
        float:'left'
    },

    status:{
        display:'flex',
        float:'right'
    },

    footer:{
        borderTop: '1px solid black',
    },

    date:{
        display: 'flex',
        float: 'left'
    },

    btn:{
        display: 'flex',
        flexFlow: 'column',
        float: 'right'
    },
}))
function Orders({orders}) {
    const classes = useStyles();
    const {status, date, lastPrice, paymentType, listItems } = orders;

    return (
        <Box>
            <Container>
                
                <Grid item >
                    <Box className={classes.header}> 
                        <Box className={classes.paymentType}>
                            <Typography>Hình thức thanh toán: {paymentType}</Typography>
                        </Box>
                        <Box className={classes.status}>
                            <Typography>{status}</Typography>
                        </Box>                        
                    </Box>
                </Grid>
                <Grid item className={classes.center}>
                    <ListItems listItems={listItems}/>
                </Grid>
                <Grid item className={classes.footer}>
                    <Box className={classes.date}>
                        <Typography>Ngày đặt hàng:{date}</Typography>
                    </Box>
                    <Box className={classes.btn}>
                        <Box>
                            <Typography>Tổng đơn hàng: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(lastPrice)}</Typography>
                        </Box>
                        <Box>
                            <Button>Đánh giá</Button>
                            <Button>Hủy đơn hàng</Button>
                        </Box>
                    </Box>
                </Grid>
                
            </Container>
        </Box>
    );
}

export default Orders;