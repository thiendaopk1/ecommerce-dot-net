import { Box, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
    

    const handleCategoryChange = (newCategoryId) => {
        if(!onChange) return;

        const newFilters = {
            ...filters,
            "category.id": newCategoryId,
        };
        onChange(newFilters);
    };

    const handlePriceChange = (values) => {
        if(onChange){
            onChange(values);
        }
    };

    return (
        <Box>
            <Paper  elevation={0} >
                <FilterByCategory onChange={handleCategoryChange}/>
            </Paper>
            <Paper  elevation={0} >
                <FilterByPrice onChange={handlePriceChange}/>
            </Paper>
            
        </Box>
    );
}

export default ProductFilters;