import { Box, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByRam from './Filters/FilterByRam';
import FilterByRom from './Filters/FilterByRom';

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
    const handleCategoryChange = (newBrandId) => {
        if (!onChange) return;

        if (!newBrandId)
            return onChange({
                ...filters,
                //tra ve undefined la bo cai key category.id
                'brand_id': undefined,
            });

        const newFilters = {
            ...filters,
            'brand_id': newBrandId,
        };

        onChange(newFilters);
    };

    const handleRomChange = (newRomId) => {
        if (!onChange) return;

        if (!newRomId)
            return onChange({
                ...filters,
                //tra ve undefined la bo cai key category.id
                rom_id: undefined,
            });

        const newFilters = {
            ...filters,
            rom_id: newRomId,
        };

        onChange(newFilters);
    };
    const handleRamChange = (newRamId) => {
        if (!onChange) return;

        if (!newRamId)
            return onChange({
                ...filters,
                //tra ve undefined la bo cai key category.id
                ram_id: undefined,
            });

        const newFilters = {
            ...filters,
            ram_id: newRamId,
        };

        onChange(newFilters);
    };

    const handlePriceChange = (values) => {
        if (onChange) {
            onChange(values);
        }
    };

    return (
        <Box>
            <Paper elevation={0}>
                <FilterByCategory onChange={handleCategoryChange} />
            </Paper>
            <Paper elevation={0}>
                <FilterByRom onChange={handleRomChange} />
            </Paper>
            <Paper elevation={0}>
                <FilterByRam onChange={handleRamChange} />
            </Paper>
            <Paper elevation={0}>
                <FilterByPrice onChange={handlePriceChange} />
            </Paper>
        </Box>
    );
}

export default ProductFilters;
