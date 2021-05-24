import { Box, Container, Grid, Link, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import productApi from '../../../api/productApi';
import ProductList from '../../Product/components/ProductList';
import ProductSkeletonList from '../../Product/components/ProductSkeletonList';


const useStyles = makeStyles(theme => ({
    contai: {
        border: 'solid #eee 1px'
    },

    right: {
        marginTop: 5,
        flex: 1,
    },
    title: {
        marginTop:5,
        padding: '1% 0 0 1%',
        color: '#cd1817',
    },
}))

function HomeProductList(props) {
    const title =props.title;
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 4,
        _sort: 'salePrice:ASC'
    });

    useEffect(() => {
        (async () => {
            try{
                const {data, pagination} = await productApi.getAll(filters);
                
                setProductList(data);
                console.log(data, pagination);
            }
            catch(error){
                console.log('failed');
            }
            setLoading(false);
        })();
    }, [filters]);
const match = useRouteMatch();
    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.right}>
                        <Paper className={classes.contai} elevation={0}>
                            <h1 className={classes.title}>{title} </h1>
                            {/* <Link to={`/products`}> */}
                                {loading ? <ProductSkeletonList length={4}/> : <ProductList data={productList}/>}
                            {/* </Link> */}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default HomeProductList;