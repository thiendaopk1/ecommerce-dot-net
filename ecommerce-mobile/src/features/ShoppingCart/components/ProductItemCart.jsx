import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import QuantityFormCart from './QuantityFormCart';
import { setQuantity, removeFromCart} from '../cartSlice';
import { useDispatch } from 'react-redux';


ProductItemCart.propTypes = {
    items: PropTypes.object,
};
const useStyle = makeStyles(theme =>({
        root: {
            display: 'flex',
            flexFlow: 'row nowrap',
        },


        image: {
            width: '70px',
            height: '70px'
        },

        sp: {
            padding: '16px 0px',
            width: '40.27949%',
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

    }))
function ProductItemCart({items}) {
    const classes = useStyle();
    const product = items.product;
    const quantityItem = items.quantity;
    const dispatch = useDispatch();
    const handleOnSubmit = ({quantity}) => {

        const action = setQuantity({
            id: product.id,
            quantity,
            product
        });
        dispatch(action)
    }
    // const handleOnClick = ()
    return (
        <Box padding={1} className={classes.root}>
                <Box className={classes.image}>
                        <img src={product.images[0].image} alt={product.name} width="100%" height="100%" />
                </Box>
               
                    <Box className={classes.sp}>
                        <Typography>{product.name}</Typography>
                    </Box>
                
                <Box className={classes.dg}>
                    <Typography>{product.salePrice}</Typography>
                </Box>
                <Box className={classes.sl}>
                    <QuantityFormCart quantityItem={quantityItem} onChange/>
                </Box>
                <Box className={classes.st}>
                    so tien
                </Box>
                <Box className={classes.tt} >
                    xoa
                </Box>
            
        </Box>
    );
}

export default ProductItemCart;