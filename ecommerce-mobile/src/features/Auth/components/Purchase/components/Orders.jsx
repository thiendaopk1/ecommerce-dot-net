import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, makeStyles, Typography,Paper, Dialog } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import ListItems from './ListItems';
import ordersApi from '../../../../../api/ordersApi';
import { Close } from '@material-ui/icons';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import FormComment from '../components/CommentForm/FormComment'
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
function Orders({orders}) {
    const classes = useStyles();
    const {status, date, lastPrice, paymentType, listItems,id } = orders;

    const [openComment, setOpenComment] = useState(false);
    const handleCloseComment = () => {
        setOpenComment(false);
        
      };
    const [cancel, setCancel] = useState();
    console.log('cancel', cancel);
    const handleCancelOrder = (e) => {
        (async () =>{
            try {      
                const animation = await ordersApi.cancel(id);
                setCancel(animation);
            } catch (error) {
                console.log(error);
            }
        })();
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
                            <Typography className={classes.statuss}>{status}</Typography>
                        </Box>                        
                    </Box>
                </Grid>
                <Grid item className={classes.center}>
                    <ListItems listItems={listItems}/>
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
                            {(status === "Đang tiếp nhận" && "Đang vận chuyển") && (
                                <>
                                    <Button variant="contained" color="secondary" onClick={handleCancelOrder}>Hủy đơn hàng</Button>
                                </>
                            )}
                            {(status === "Hủy đơn hàng") && (
                                <>
                                    <Button variant="contained" color="secondary">Đánh giá</Button>
                                </>
                            )}
                                 
                        </Box>
                    </Box>
                </Grid>
                
            </Container>
            <Dialog disableBackdropClick disableEscapeKeyDown open={openComment} onClose={handleCloseComment} aria-labelledby="form-dialog-title">
                <IconButton onClick={handleCloseComment} className={classes.closeButton}>
                    <Close />
                </IconButton>
                <DialogContent>
                    <FormComment closeDialog={handleCloseComment} />
                </DialogContent>
            </Dialog>
        </Box>
       
    
    );
}

export default Orders;