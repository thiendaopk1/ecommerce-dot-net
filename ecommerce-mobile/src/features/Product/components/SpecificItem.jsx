import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import ProductDetailStyles from './ProductDetailStyles';
import { formatPrice } from '../../../utils';
import classNames from 'classnames';

SpecificItem.propTypes = {
    specific: PropTypes.object,
    onClic: PropTypes.func,
    selected: PropTypes.bool,
    index: PropTypes.number,
};

function SpecificItem({specific = {}, onClick, selected,index}) {
    const classes = ProductDetailStyles();
    const handleClick = (e) => {
        // e.target.closest('li').classList.toggle('selected');
        if(onClick) {
            onClick(specific,index);
        } 
        // console.log(e);
    }
    return (
        <Box key={specific.id} component="li" className={classNames(classes.box2, selected && 'selected')} onClick={handleClick} >
            <Typography component="span" className={classes.colorProduct}>{specific.color}</Typography>
            <Typography component="span" className={classes.ram}>{specific.ram.ram}-{specific.rom.rom}</Typography>
            <Box component="span" className={classes.colorPrice}>{formatPrice(specific.price)}</Box>
        </Box>
    );
}

export default SpecificItem;