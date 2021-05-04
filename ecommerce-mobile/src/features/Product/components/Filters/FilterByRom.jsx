import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import romsApi from '../../../../api/romsApi';
import FilterStyles from './FilterStyles';

FilterByRom.propTypes = {
    onChange: PropTypes.func,

};

function FilterByRom({onChange}) {
    const classes = FilterStyles();
    const [romList, setRomList] = useState([]);

    useEffect(() =>{
        (async () =>{
            try {
                const list = await romsApi.getAll();
                setRomList(list.map((x) => ({
                    id: x.id,
                    rom: x.rom
                    
                }))
                );
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const handleCategoryClick = (rom) => {
        if(onChange){
            onChange(rom.id)
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
                {romList.map(rom => (
                <li 
                key={rom.id}
                onClick={() => handleCategoryClick(rom)}
                >
                    {rom.rom}
                </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByRom;