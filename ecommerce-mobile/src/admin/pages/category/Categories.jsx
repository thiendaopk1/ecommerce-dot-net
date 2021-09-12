import React, { useEffect, useState } from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import Brands from './Brands';
import Rams from './Rams';
import Roms from './Roms';

const useStyles = makeStyles((theme) => ({
    root:{
        width: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        height: '800px',
        marginTop:'15px',
    },
    brand:{
        width: '50%',
    },
    ramRom:{
        width: '45%',
        display: 'flex',
        flexFlow: 'column',
        marginLeft: '30px',
        height: '800px'
    },
    
}))
function Categories(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Brands className={classes.brand}/>
            <Box className={classes.ramRom}> 
                <Roms />
                <Rams />
            </Box>
        </Box>
    );
}

export default Categories;