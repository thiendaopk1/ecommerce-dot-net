import React from 'react';
import PropTypes from 'prop-types';
import { Box,Typography,Button, makeStyles } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useHistory } from 'react-router-dom';

PaymentSuccess.propTypes = {
    
};
const useStyles = makeStyles(theme => ({
    root:{
        textAlign: 'center',
        marginTop: '10px',
        padding: '150px 200px'
    },

    icon:{
        color: '#7dc532',
        height: '100px',
        width: '100px'
    },

    tttc: {
        color: 'green',
        fontWeight: '500',
        fontSize: '25px'
    },

    dh:{
        fontSize: '20px'
    },

    kt:{
        fontSize: '20px'
    },

    button:{
        background: '#7dc532',
        color: '#ffff',
        width: '250px',
        marginTop: '5px'
    },

}))
function PaymentSuccess(props) {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }
    return (
        <Box>
            <Box className={classes.root}>
                <CheckCircleOutlineIcon className={classes.icon}/>
                <Typography className={classes.tttc}>Thanh toán thành công!</Typography>
                <Typography className={classes.dh}>Đơn hàng của bạn đã được tiếp nhận!</Typography>
                <Typography className={classes.kt}>Kiểm tra email để biết thêm chi tiết!</Typography>
                <Button className={classes.button} onClick={handleClick}>OK</Button>
            </Box>
        </Box>
    )
}

export default PaymentSuccess;