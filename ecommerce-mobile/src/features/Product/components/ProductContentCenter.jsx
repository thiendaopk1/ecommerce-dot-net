import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';
import AddToCartForm from './AddToCartForm';
import { Box } from '@material-ui/core';
import { addToCart } from '../../ShoppingCart/cartSlice';
import { useDispatch } from 'react-redux';
import cartApi from '../../../api/cartApi';

ProductContentCenter.propTypes = {
    product: PropTypes.object,
};

function ProductContentCenter({product = {}}) {
 
    const dispatch = useDispatch();
    const comments = product.commentResponse; 
 
    const handleAddToCartSubmit = ({quantity }) => {
       
        const action = addToCart({
            idp: product.id,
            product,
            quantity,
        });


        dispatch(action);
        
        
           
    };
   

    return (
        <Box>
            
            <ProductInfo comments={comments} product={product} />
           
        
            <AddToCartForm onSubmit={handleAddToCartSubmit}/>
        </Box>
        
    );
}

export default ProductContentCenter;