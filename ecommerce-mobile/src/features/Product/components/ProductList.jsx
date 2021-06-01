import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Product from './Product';

ProductList.propTypes = {
    data: PropTypes.array,
};
ProductList.defaultProps = {
    data: [],
}

function ProductList({data}) {
    const match = useRouteMatch();
//   Link
    return (
        <Box>
            <Grid container>
                {data.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Link to={`products/${product.id}`} style={{textDecoration: 'none',color: 'black'}}>
                            <Product product={product} comments={product.commentResponse}/>
                        </Link>
                        
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;