import React from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles } from '@material-ui/core';

Hang.propTypes = {
    hang: PropTypes.object,
};
const useStyles = makeStyles((theme) => ({
    button:{
        color: '#fff',
        marginLeft:'1%',
        width: '11%',
        height: '8%',
    },
}));
function Hang({ hang }) {
    const classes = useStyles();
    return (
            <Button className={classes.button}><img src={hang.img}></img></Button>
    );
}

export default Hang;