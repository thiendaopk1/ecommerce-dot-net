import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';
import AddToCartForm from './AddToCartForm';
import { Box } from '@material-ui/core';
import { addToCart } from '../../ShoppingCart/cartSlice';
import { useDispatch } from 'react-redux';

ProductContentCenter.propTypes = {
    product: PropTypes.object,
};

function ProductContentCenter({product = {}}) {
    const [selected, setSelected] = useState(0);
    const dispatch = useDispatch();
    const handleAddToCartSubmit = ({quantity }) => {
        // console.log('Form values:', formValues, selected);
        const action = addToCart({
            id: product.id,
            product,
            quantity,
        });
        console.log(action);
        dispatch(action);

    }
    return (
        <Box>
        <ProductInfo product={product} selected={selected} setSelected={setSelected}/>
        <AddToCartForm onSubmit={handleAddToCartSubmit}/>
        </Box>
        
    );
}

export default ProductContentCenter;