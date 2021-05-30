import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, makeStyles } from '@material-ui/core';
import brandsApi from '../../../api/brandsApi';
import ramsApi from '../../../api/ramsApi';
import romsApi from '../../../api/romsApi';

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
        getLabel: (filters,romList) => `${romList[filters.rom_id-1].rom}`,
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
        getLabel: (filters,ramList) => `${ramList[filters.ram_id-1].ram}`,
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
    // const [filterList, setFilterList] = useState();
    const [brandList,setBrandList] = useState();
    const [ramList, setRamList] = useState();
    const [romList, setRomList] = useState();
    // const [brandList,ramList,romList] = filterList;
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
    useEffect(() =>{
        (async () =>{
            try {
                const list = await ramsApi.getAll();
                setRamList(list.map((x) => ({
                    id: x.id,
                    ram: x.ram
                    
                }))
                );
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
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
    return (
       <Box component="ul" className={classes.root}>
           {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => (
               <li key={x.id}>
                   <Chip
                  
                    label={brandList&&x.getLabel(filters,brandList)
                        // ?romList&&x.getLabel(filters,romList)
                        // :ramList&&x.getLabel(filters,ramList)
                    }
                    // label={ramList&&x.getLabel(filters,ramList)}
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