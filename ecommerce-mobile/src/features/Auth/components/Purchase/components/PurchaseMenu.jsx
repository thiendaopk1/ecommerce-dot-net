import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, makeStyles } from '@material-ui/core';
import { NavLink, useRouteMatch } from 'react-router-dom';
import StatusFilter from './StatusFilter';
import { Paper } from '@material-ui/core';
PurchaseMenu.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({

    }))
function PurchaseMenu({ filters, onChange }) {
    const classes = useStyles();
    const handleStatusChange = (newStatusID) => {
        console.log('newStatusID',newStatusID);
        if(!onChange) return;

        if(!newStatusID) return onChange({
            ...filters,
            //tra ve undefined la bo cai key category.id
            "_status": undefined,
        })


        const newFilters = {
            ...filters,
            "_status": newStatusID ,
        };

        onChange(newFilters);
    };
    return (
        <Box className={classes.root}>
                <StatusFilter onChange={handleStatusChange}/>
        </Box>
    );
}

export default PurchaseMenu;