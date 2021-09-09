import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ramsApi from '../../../../api/ramsApi';
import FilterStyles from './FilterStyles';
import classNames from 'classnames';
import './styleHover.scss';
FilterByRam.propTypes = {
  onChange: PropTypes.func,
};

function FilterByRam({ onChange }) {
  const classes = FilterStyles();
  const [ramList, setRamList] = useState([]);
  const [selected, setSelected] = useState(undefined);
  useEffect(() => {
    (async () => {
      try {
        const list = await ramsApi.getAll();
        setRamList(
          list.map((x) => ({
            id: x.id,
            ram: x.ram,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleCategoryClick = (ram) => {
    setSelected(ram.id);
    if (onChange) {
      onChange(ram.id);
    }
  };
  const handleClickAll = () => {
    setSelected(undefined);
    if (onChange) {
      onChange();
    }
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="subtitle2">
        DANH MỤC SẢN PHẨM
      </Typography>
      <ul className={classNames('list')}>
        <li
          onClick={handleClickAll}
          className={classNames('item', { 'item--active': selected === undefined })}
        >
          Tất cả
        </li>
        {ramList.map((ram) => (
          <li
            key={ram.id}
            onClick={() => handleCategoryClick(ram)}
            className={classNames('item', { 'item--active': selected === ram.id })}
          >
            {ram.ram}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByRam;
