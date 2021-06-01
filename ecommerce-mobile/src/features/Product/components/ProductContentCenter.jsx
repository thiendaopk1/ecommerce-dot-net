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
    const comments = product.commentResponse;
    console.log('comments1',comments);
    const handleAddToCartSubmit = ({quantity }) => {
        // console.log('Form values:', formValues, selected);
        const action = addToCart({
            id: product.id,
            product,
            quantity,
            selected
        });
        console.log(action);
        
        dispatch(action);
            // console.log(product);
            // const abc = {
            //     product,quantity
            // }
           
    }

    return (
        <Box>
        <ProductInfo comments={comments} product={product} selected={selected} setSelected={setSelected}/>
        <AddToCartForm onSubmit={handleAddToCartSubmit}/>
        </Box>
        
    );
}

export default ProductContentCenter;