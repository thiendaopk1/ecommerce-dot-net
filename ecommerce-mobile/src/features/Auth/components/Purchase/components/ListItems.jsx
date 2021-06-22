import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import Items from './Items';

ListItems.propTypes = {
    listItems: PropTypes.array,
};
ListItems.defaultProps = {
    listItems: [],
}
function ListItems({listItems}) {
    // const {priceAll, pricePerOne, productImg, productName, quantity } = orders;
    // console.log('listItems', listItems);
    return (
        <Box>
            <Grid container>
                {listItems.map((items) => (
                    <Grid item key={items.productID} xs={12}>
                        <Items items={items}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
        
    );
}

export default ListItems;