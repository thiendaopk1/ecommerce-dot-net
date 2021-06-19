import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, makeStyles } from '@material-ui/core';
import { NavLink, useRouteMatch } from 'react-router-dom';

PurchaseMenu.propTypes = {
    
};
const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',

        padding: '0',
        listStyleType: 'none',

        '& > li': {
            padding: theme.spacing(2,4),
        },

        '& > li > a': {
            color: theme.palette.grey[700]
        },

        '& > li > a.active': {
            color: theme.palette.primary.main
        }

    },



    }))
function PurchaseMenu(props) {
    const classes = useStyles();
    const {url} = useRouteMatch();
    return (
        <Box component="ul" className={classes.root}>
            <li>
                <Link component={NavLink} to={url} exact >Tất cả</Link>
            </li>
            <li>
                <Link component={NavLink} to={`${url}?type=1`} exact >Đang tiếp nhận</Link>
            </li>
            <li>
                <Link component={NavLink} to={`${url}?type=2`} exact >Đang vận chuyển</Link>
            </li>
            <li>
                <Link component={NavLink} to={`${url}?type=3`} exact >Đã giao hàng</Link>
            </li>
            <li>
                <Link component={NavLink} to={`${url}?type=4`} exact >Hủy đơn hàng</Link>
            </li>
        </Box>
    );
}

export default PurchaseMenu;