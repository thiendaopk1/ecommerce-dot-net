import React from 'react';
import PropTypes from 'prop-types';
import { Box,Typography,Button } from '@material-ui/core';


PaymentSuccess.propTypes = {
    
};

function PaymentSuccess(props) {
    return (
        <Box>
            <Box>
                <Typography>Thanh toán thành công</Typography>
                <Typography>Đơn hàng của bạn đã được tiếp nhận</Typography>
                <Typography>Kiểm tra email để biết thêm chi tiết</Typography>
                <Button>OK</Button>
            </Box>
        </Box>
    )
}

export default PaymentSuccess;