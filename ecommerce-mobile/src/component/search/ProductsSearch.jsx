import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import Product from './Product';
ProductsSearch.propTypes = {
    data: PropTypes.array,
};
ProductsSearch.defaultProps = {
    data: [],
}
function ProductsSearch({data}) {
    return (
        <Box>
            <Grid container>
                {data.map((product) => (
                    <Grid item key={product.id} xs={12} >    
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductsSearch;