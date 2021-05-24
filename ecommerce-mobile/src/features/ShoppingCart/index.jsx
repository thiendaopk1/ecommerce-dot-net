import React from 'react';
import PropTypes from 'prop-types';
import { cartTotalCountSelectors } from './selectors';
import { useSelector } from 'react-redux';
import { Box, Button, Container, Grid, makeStyles, Paper } from '@material-ui/core';
// import ProductItem from './components/ProductItem';
import ProductItem from './components/ProductItem';


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

}));
function ShoppingCartFeature(props) {
    const sp = localStorage.getItem('cart');
    const spi = JSON.parse(sp);
    console.log('sp',sp);
    console.log('spi', spi);
    const cartTotal = useSelector(cartTotalCountSelectors);
    const classes = useStyles();
    return (
        <Box>
            <Container>
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
                        <ProductItem spi={spi}/>
                    </Paper>
                    
                </Grid>
                <Grid item className={classes.bottom}> 
                    <Paper elevation={0}>
                        <Box>
                            <Box>
                                Xóa tất cả
                            </Box>
                            <Box>
                                {cartTotal}
                            </Box>
                            <Button>
                                Checkout
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Container>
        </Box>
    );
}

export default ShoppingCartFeature;