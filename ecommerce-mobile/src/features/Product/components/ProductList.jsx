import { Box, Grid, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

ProductList.propTypes = {
    data: PropTypes.array,
};
ProductList.defaultProps = {
    data: [],
}
const useStyle = makeStyles(theme => ({
    root: {
        marginLeft: '10px'
    }
}))
function ProductList({data}) {
    // const match = useRouteMatch();
    const  classes = useStyle();
//   Link
    return (
        <Box>
            <Grid container>
                {data.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Link to={`products/${product.id}`} style={{textDecoration: 'none',color: 'black'}}>
                            <Product product={product} className={classes.root}/>
                        </Link>
                        
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;