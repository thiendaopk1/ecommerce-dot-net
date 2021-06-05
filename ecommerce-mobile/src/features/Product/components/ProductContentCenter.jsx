import React, { useState } from 'react';
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
    const [selected, setSelected] = useState(0);
    const dispatch = useDispatch();
    const comments = product.commentResponse;
    const handleAddToCartSubmit = ({quantity }) => {
        // console.log('Form values:', formValues, selected);
        console.log(selected);
        const action = addToCart({
            id: product.id,
            product,
            quantity,
            selected
        });
        console.log('action1',action);
        
        dispatch(action);
           
    };
    const handleSetSelected = async (value,index)=>{
      
        setSelected(value);
// console.log(value,index);
    }
    // console.log(selected);
    return (
        <Box>
        <ProductInfo comments={comments} product={product} selected={selected} setSelected={handleSetSelected}/>
        <AddToCartForm onSubmit={handleAddToCartSubmit}/>
        </Box>
        
    );
}

export default ProductContentCenter;