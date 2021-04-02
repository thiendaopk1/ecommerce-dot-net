import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';


const useStyles = makeStyles(theme => ({
    root: {},

    left: {
        width: '250px',
        border: "0.5px"
    },

    right: {
        flex: '1 1 0'
    },
    pagination: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',

        marginTop: '20px',
        paddingBottom: '20px',
    }
}))

function ListPage(props) {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 10,
        page: 1,
    });
    const [loading, setLoading] = useState([true]);
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 12,
        _sort: 'salePrice:ASC'
    });

    useEffect(() => {
        (async () => {
            try{
                const {data, pagination} = await productApi.getAll(filters);
                
                setProductList(data);
                console.log(data, pagination);
                setPagination(pagination);
            }
            catch(error){
                console.log('failed');
            }
            setLoading(false);
        })();
    }, [filters]);
//handle pagination
const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
        ...prevFilters,
        _page: page,
    }));
    
};
//handle sort
const handleSortChange = (newSortValue) => {
    setFilters((prevFilters) => ({
        ...prevFilters,
        _sort: newSortValue,
    }));
    
};
//handle filter 
const handelFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
        ...prevFilters,
        ...newFilters,
    }));
    
};

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        
                        <ProductFilters filters={filters} onChange={handelFiltersChange}/>
        
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort currentSort={filters._sort} onChange={handleSortChange}/>
                            {loading ? <ProductSkeletonList length={12}/> : <ProductList data={productList}/>}
                            <Box className={classes.pagination}>
                                <Pagination 
                                color="secondary" 
                                count={Math.ceil(pagination.total / pagination.limit)} 
                                page={pagination.page}
                                onChange={handlePageChange}
                                >
                                </Pagination>
                            </Box>
                            
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;