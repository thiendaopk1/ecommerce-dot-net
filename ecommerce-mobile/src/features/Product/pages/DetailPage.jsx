import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';
import ProductContentCenter from '../components/ProductContentCenter';
import ProductMenu from '../components/ProductMenu';
import ProductDescription from '../components/ProductMenu/ProductDescription';
import ProductInfomation from '../components/ProductMenu/ProductInfomation';
import ProductReview from '../components/ProductMenu/ProductReview';
import ProductThumbnail from '../components/ProductThumbnail';
import RightContentDetail from '../components/RightContentDetail';

DetailPage.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },

  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    // borderRight: `1px solid ${theme.palette.grey[300]}`
  },

  center: {
    flex: '1 1 1',
    width: '500px',
    padding: theme.spacing(1.5),
    // borderRight: `1px solid ${theme.palette.grey[300]}`
  },
  right: {
    flex: '1 1 1',
    padding: theme.spacing(1.5),
    width: '300px',
  },
}));
function DetailPage() {
  const classes = useStyles();
  const {
    params: { productId },
    url,
  } = useRouteMatch();
  const { product, loading } = useProductDetail(productId);
  console.log('product', product);
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(product);
  }, [product]);
  console.log('product', product);
  const [comment, setComment] = useState();

  //
  // set value product
  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container className={classes.root}>
            <Grid item className={classes.left}>
              {product.id && <ProductThumbnail product={product} />}
            </Grid>
            <Grid item className={classes.center}>
              {product.id && <ProductContentCenter product={product} />}
            </Grid>
            <Grid item className={classes.right}>
              <RightContentDetail product={product} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />
        <Switch>
          <Paper elevation={0} style={{ padding: '20px' }}>
            <Grid item>
              <Route exact path={url}>
                <ProductDescription product={product} />
              </Route>
            </Grid>

            <Grid item>
              <Route exact path={`${url}/infomation`}>
                <ProductInfomation product={product} />
              </Route>
            </Grid>

            <Grid item>
              <Route exact path={`${url}/review`}>
                {product.id && <ProductReview product={product} commented={comment} />}
              </Route>
            </Grid>
          </Paper>

          {/* <Route exact path={`${url}/infomation`} component={ProductInfomation}/> */}
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
