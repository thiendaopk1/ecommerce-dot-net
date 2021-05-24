import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, makeStyles } from '@material-ui/core';
import brandsApi from '../../../api/brandsApi';

FilterViewer.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        
        margin: theme.spacing(2, 0),
        listStyleType: 'none',

        '& > li': {
            margin: 0,
            padding: theme.spacing(1),
        }
    },
}));

const FILTER_LIST =[
    {
        id: 1,
        getLabel: (filters,brandList) => `${brandList[filters.brand_id-1].name}`,
        isActive: () => true,
        isVisible: (filters) => 
        Object.keys(filters).includes('brand_id'),
        isRemoveable: true,
        onRemove: (filters) => {
            const newFilters = {...filters};
            delete newFilters.brand_id;
            return newFilters;
        },
        onToggle: () => {},
    },
    {
        id: 2,
        getLabel: (filters) => 'rom',
        isActive: () => true,
        isVisible: (filters) => 
        Object.keys(filters).includes('rom_id'),
        isRemoveable: true,
        onRemove: (filters) => {
            const newFilters = {...filters};
            delete newFilters.rom_id;
            return newFilters;
        },
        onToggle: () => {},
    },
    {
        id: 3,
        getLabel: (filters) => 'ram',
        isActive: () => true,
        isVisible: (filters) => 
        Object.keys(filters).includes('ram_id'),
        isRemoveable: true,
        onRemove: (filters) => {
            const newFilters = {...filters};
            delete newFilters.ram_id;
            return newFilters;
        },
        onToggle: () => {},
    },
    {
        id: 4,
        getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
        isActive: () => true,
        isVisible: (filters) => 
            Object.keys(filters).includes('salePrice_lte') && Object.keys(filters).includes('salePrice_gte'),
        isRemoveable: true,
        onRemove: (filters) => {
            const newFilters = {...filters};
            delete newFilters.salePrice_lte;
            delete newFilters.salePrice_gte;
            return newFilters;
        },
        onToggle: () => {},
    },
    
];

function FilterViewer({filters = {}, onChange = null}) {
    const classes = useStyles();
    const [brandList,setBrandList] = useState();
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
    console.log('asd',filters);
    console.log("brandList",brandList);
    console.log("FILTER_LIST",FILTER_LIST);
    return (
       <Box component="ul" className={classes.root}>
           {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => (
               <li key={x.id}>
                   <Chip
                    label={brandList&&x.getLabel(filters,brandList)}
                    color={x.isActive(filters) ? 'primary' : 'default'}
                    clickable={!x.isRemoveable}
                    onClick={
                        x.isRemoveable
                        ? null
                        : () => {
                            if(!onChange) return;
                            const newFilters = x.onToggle(filters);
                            onChange(newFilters);
                        }
                    }
                    onDelete={x.isRemoveable ? () => {
                        if (!onChange) return;

                        const newFilters = x.onRemove(filters);
                        onChange(newFilters);
                    } : null}
                    />
               </li>
           ))}
       </Box>
    );
}

export default FilterViewer;