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
 
    const [selected, setSelected] = useState({});
    const dispatch = useDispatch();
    const comments = product.commentResponse;
    
    const productSpecificId=selected.id;
    
    useEffect(() => {
        if( product.specifics){
            setSelected(product.specifics[0]);
        }
        
    },[product]);
    const productSpecific = product.specifics;
    
    
    const handleAddToCartSubmit = ({quantity }) => {
       
        const action = addToCart({
            id: product.id,
            product,
            
            quantity,
        });
        
        
        dispatch(action);
        console.log('action', action);
        
           
    };
   

    return (
        <Box>
        <ProductInfo comments={comments} product={product} />
        <AddToCartForm onSubmit={handleAddToCartSubmit}/>
        </Box>
        
    );
}

export default ProductContentCenter;