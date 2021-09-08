import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import brandsApi from '../../../../api/brandsApi';
import FilterStyles from './FilterStyles';
import classNames from 'classnames';
import './styleHover.scss';
import { makeStyles } from '@material-ui/styles';
FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};
const useStyle = makeStyles((theme) => ({}));
function FilterByCategory({ onChange }) {
  const classes = FilterStyles();
  const [brandList, setBrandList] = useState([]);
  console.log('brandList', brandList);
  const [view, setView] = useState(true);
  const handleSetViewOpen = () => {
    setView(false);
  };
  const handleSetViewClose = () => {
    setView(true);
  };
  useEffect(() => {
    (async () => {
      try {
        const list = await brandsApi.getAll();
        console.log('list', 1);
        setBrandList(list);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleCategoryClick = (brand) => {
    if (onChange) {
      onChange(brand.id);
    }
  };
  const handleClickAll = () => {
    if (onChange) {
      onChange();
    }
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="subtitle2">
        DANH MỤC SẢN PHẨM
      </Typography>
      {brandList.length > 0 && (
        <div>
          {view === true && (
            <div>
              <ul className={classNames('list')}>
                <li onClick={handleClickAll} className={classNames('item')}>
                  Tất cả
                </li>

                <li
                  key={brandList[0].id}
                  onClick={() => handleCategoryClick(brandList[0])}
                  className={classNames('item')}
                >
                  {brandList[0].name}
                </li>
                <li
                  key={brandList[1].id}
                  onClick={() => handleCategoryClick(brandList[1])}
                  className={classNames('item')}
                >
                  {brandList[1].name}
                </li>
                <li
                  key={brandList[2].id}
                  onClick={() => handleCategoryClick(brandList[2])}
                  className={classNames('item')}
                >
                  {brandList[2].name}
                </li>
                <li
                  key={brandList[3].id}
                  onClick={() => handleCategoryClick(brandList[3])}
                  className={classNames('item')}
                >
                  {brandList[3].name}
                </li>
                <li
                  key={brandList[4].id}
                  onClick={() => handleCategoryClick(brandList[4])}
                  className={classNames('item')}
                >
                  {brandList[4].name}
                </li>
                <li
                  key={brandList[5].id}
                  onClick={() => handleCategoryClick(brandList[5])}
                  className={classNames('item')}
                >
                  {brandList[5].name}
                </li>
                <li
                  key={brandList[6].id}
                  onClick={() => handleCategoryClick(brandList[6])}
                  className={classNames('item')}
                >
                  {brandList[6].name}
                </li>
                <li
                  key={brandList[7].id}
                  onClick={() => handleCategoryClick(brandList[7])}
                  className={classNames('item')}
                >
                  {brandList[7].name}
                </li>
                <li
                  key={brandList[8].id}
                  onClick={() => handleCategoryClick(brandList[8])}
                  className={classNames('item')}
                >
                  {brandList[8].name}
                </li>
              </ul>

              <Typography className={classes.moreCompact} onClick={handleSetViewOpen}>
                Xem thêm
              </Typography>
            </div>
          )}
          {view === false && (
            <div>
              <ul className={classNames('list')}>
                <li onClick={handleClickAll} className={classNames('item')}>
                  Tất cả
                </li>

                {brandList.map((brand) => (
                  <li
                    key={brand.id}
                    onClick={() => handleCategoryClick(brand)}
                    className={classNames('item')}
                  >
                    {brand.name}
                  </li>
                ))}
              </ul>
              <Typography className={classes.moreCompact} onClick={handleSetViewClose}>
                Rút gọn
              </Typography>
            </div>
          )}
        </div>
      )}
    </Box>
  );
}

export default FilterByCategory;
