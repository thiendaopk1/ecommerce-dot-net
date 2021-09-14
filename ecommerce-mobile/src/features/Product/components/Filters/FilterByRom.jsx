import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import romsApi from '../../../../api/romsApi';
import FilterStyles from './FilterStyles';
import classNames from 'classnames';
import './styleHover.scss';
FilterByRom.propTypes = {
  onChange: PropTypes.func,
};

function FilterByRom({ onChange }) {
  const classes = FilterStyles();
  const [romList, setRomList] = useState([]);
  const [selected, setSelected] = useState(undefined);
  useEffect(() => {
    (async () => {
      try {
        const list = await romsApi.getAll();
        setRomList(
          list.map((x) => ({
            id: x.id,
            rom: x.rom,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleCategoryClick = (rom) => {
    setSelected(rom.id);
    if (onChange) {
      onChange(rom.id);
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
        DANH MỤC ROM
      </Typography>
      <ul className={classNames('list')}>
        <li
          onClick={handleClickAll}
          className={classNames('item', { 'item--active': selected === undefined })}
        >
          Tất cả
        </li>
        {romList.map((rom) => (
          <li
            key={rom.id}
            onClick={() => handleCategoryClick(rom)}
            className={classNames('item', { 'item--active': selected === rom.id })}
          >
            {rom.rom}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByRom;
