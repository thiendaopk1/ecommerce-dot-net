import React from 'react';
import PropTypes from 'prop-types';

import { Box, Container, Grid, Paper } from '@material-ui/core';
import PurchaseMenu from './components/PurchaseMenu';
import { Route, Switch } from 'react-router-dom';

Purchase.propTypes = {
    
};

function Purchase(props) {
    return (
        <Box>
            <Container>
                <Grid item>
                    <Paper elevation={0}>
                        <PurchaseMenu />
                    </Paper>
                </Grid>
                <Grid item>
                        <Switch>
                            <Paper elevation={0}>
                                <Route>

                                </Route>
                            </Paper>
                        </Switch>
                </Grid>
            </Container>
        </Box>
    );
}

export default Purchase;