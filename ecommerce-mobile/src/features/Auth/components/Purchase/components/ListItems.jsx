import { Box, Grid, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Items from './Items';

ListItems.propTypes = {
    listItems: PropTypes.array,
};
ListItems.defaultProps = {
    listItems: [],
}
const useStyles = makeStyles((theme) => ({
    root:{
        borderBottom: '1px dotted rgba(0,0,0,.09)',
        padding: '20px 20px'
    }
}))
function ListItems({listItems}) {
    const classes = useStyles();

    return (
        <Box>
            <Grid container>
                {listItems.map((items) => (
                    <Grid item key={items.idp} xs={12} className={classes.root}>
                        <Items items={items}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
        
    );
}

export default ListItems;