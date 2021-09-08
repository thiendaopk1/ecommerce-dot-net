import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import Product from './Product';
ProductsSearch.propTypes = {
  data: PropTypes.array,
};
ProductsSearch.defaultProps = {
  data: [],
};
function ProductsSearch({ data }) {
  useRouteMatch();
  useLocation();
  return (
    <Box>
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.id} xs={12}>
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <Product product={product} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsSearch;
