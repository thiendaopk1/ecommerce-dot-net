import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles } from '@material-ui/core';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import brandsApi from '../../../api/brandsApi';
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
    const [brandList, setBrandList] = useState([]);
    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch();
    const handleClick = () => {
        history.push(`/products?brand_id=${hang.id}`);
    }
    useEffect(() =>{
        (async () =>{
            try {
                const list = await brandsApi.getAll();
                setBrandList(list.map((x) => ({
                    id: x.id,
                    name: x.name
                }))
                );
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return (
        // <Link to={`products?brand_id=${hang.id}`}>
            <Button className={classes.button} onClick={handleClick}><img src={hang.img}></img></Button>
        // </Link>
            
    );
}

export default Hang;