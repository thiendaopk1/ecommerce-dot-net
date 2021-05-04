import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

function ProductSort({currentSort, onChange}) {
    const handleSortChange = (event, newValue) => {
        if (onChange) onChange(newValue);
    };

    return (
        <Tabs
            value={currentSort}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={handleSortChange}
            aria-labelledby="disabled tabs example"
        >
            {/* <Tab label="Tất cả" value="salePrice"></Tab> */}
            <Tab label="Giá thấp tới cao" value="salePrice:asc"></Tab>
            <Tab label="Giá cao xuống thấp" value="salePrice:desc"></Tab>
        </Tabs>
    );
}

export default ProductSort;