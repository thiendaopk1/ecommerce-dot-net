import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import brandsApi from '../../../../api/brandsApi';
import FilterStyles from './FilterStyles';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,

};

function FilterByCategory({onChange}) {
    const classes = FilterStyles();
    const [brandList, setBrandList] = useState([]);

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

    const handleCategoryClick = (brand) => {
        if(onChange){
            onChange(brand.id)
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
                {brandList.map(brand => (
                <li 
                key={brand.id}
                onClick={() => handleCategoryClick(brand)}
                >
                    {brand.name}
                </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;