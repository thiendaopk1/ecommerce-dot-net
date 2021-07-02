import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import  statusOrdersApi from '../../../../../api/statusOrdersApi';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
StatusFilter.propTypes = {
    onChange: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({

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
                <Typography className={classes.title} variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
                <ul className={classes.menu}>
                    <li onClick={handleClickAll}>Tất cả</li>
                    {statusList.map(status => (
                    <li 
                    key={status.id}
                    onClick={() => handleSatusClick(status)}
                    >
                        {status.statusString}
                    </li>
                    ))}
                </ul>
            </Box>
    );
}

export default StatusFilter;