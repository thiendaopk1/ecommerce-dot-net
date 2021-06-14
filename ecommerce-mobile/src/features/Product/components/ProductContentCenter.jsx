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
        console.log(selected);
        const productSpecific = product.specifics;
        const productSpecifics = productSpecific.filter(productSpecific => productSpecific === selected);
        product.specifics = productSpecifics;
        console.log('productSpecificId',productSpecifics);
        const action = addToCart({
            id: product.id,
            product,
            // productSpecificId,
            quantity,
        });
        
        
        dispatch(action);
        console.log('action', action);
        
           
    };
    const handleSetSelected = async (value,index)=>{
        console.log(value);
        setSelected(value);
    };

    return (
        <Box>
        <ProductInfo comments={comments} product={product} selected={selected} setSelected={handleSetSelected}/>
        <AddToCartForm onSubmit={handleAddToCartSubmit}/>
        </Box>
        
    );
}

export default ProductContentCenter;