import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import categoryApi from '../../../../api/categoryApi';
import FilterStyles from './FilterStyles';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,

};

function FilterByCategory({onChange}) {
    const classes = FilterStyles();
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() =>{
        (async () =>{
            try {
                const list = await categoryApi.getAll();
                setCategoryList(list.map((x) => ({
                    id: x.id,
                    name: x.name
                }))
                );
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const handleCategoryClick = (category) => {
        if(onChange){
            onChange(category.id)
        }
    };

    return (
        <Box className={classes.root}>
            <Typography className={classes.title} variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
            <ul className={classes.menu}>
                {categoryList.map(category => (
                <li 
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                >
                    {category.name}
                </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;