import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import statusOrdersApi from '../../../../api/statusOrdersApi';
StatusFilter.propTypes = {
    onChange: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
    root:{
        padding: '15px 15px',
        borderBottom: '4px solid #f8f9fa'
    },
    menu:{
        fontSize: '20px',
        display: 'flex',
        flexFlow: 'row nowrap',
        padding:1,
        margin: "1px 8px",
        listStyleType: "none",

        '& > li': {
            marginTop: "8px",
            transform: 'all .25s',

            '&:hover': {
                color: "#fa7272",
                cursor: "pointer",
            },
        },
    },
    li1: {
        textAlign: 'center',
        width: '20%'
    },
    li: {
        textAlign: 'center',
        width: '20%'
    },
}))
function StatusFilter({onChange}) {
    const classes = useStyles();
    const [statusList, setStatusList] = useState([]);
    console.log('statusList',statusList);
    useEffect(() =>{
        (async () =>{
            try {
                const list = await statusOrdersApi.getAll();
                setStatusList(list.map((x) => ({
                    id: x.id,
                    statusString: x.statusString
                }))
                );
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const handleSatusClick = (status) => {
        console.log('status', status.id);
        if(onChange){
            onChange(status.id)
        }
    };
    const handleClickAll = () => {
        if(onChange){
            onChange()
        }
    }
    return (
       
            <Box className={classes.root}>
                <ul className={classes.menu}>
                    <li onClick={handleClickAll} className={classes.li1}>Tất cả</li>
                    {statusList.map(status => (
                    <li 
                    key={status.id}
                    onClick={() => handleSatusClick(status)}
                    className={classes.li}
                    >
                        {status.statusString}
                    </li>
                    ))}
                </ul>
            </Box>
    );
}

export default StatusFilter;