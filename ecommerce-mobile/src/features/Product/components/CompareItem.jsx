import React from 'react';
import PropTypes from 'prop-types';
import './compare.scss';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Button } from '@material-ui/core';
import { addToCart } from '../../ShoppingCart/cartSlice';
import { removeFromCompare } from './compareSlice';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
CompareItem.propTypes = {
  item: PropTypes.object,
};

function CompareItem({ item = {} }) {
  const { enqueueSnackbar } = useSnackbar();
  const { idp, listInfo, product } = item;
  const dispatch = useDispatch();

  const handleDelteCompare = () => {
    const action = removeFromCompare({
      idp: idp,
    });
    dispatch(action);
    enqueueSnackbar('bạn đã xóa sản phẩm khỏi so sánh', {
      variant: 'success',
    });
  };

  const handleAddToCArt = () => {
    if (1 > product.amount) {
      enqueueSnackbar(`Số lượng sản phẩm còn lại chỉ còn ${product.amount} sản phẩm`, {
        variant: 'error',
      });
    } else if (1 < product.amount) {
      const action = addToCart({
        idp: product.id,
        product,
        quantity: 1,
      });
      dispatch(action);
      enqueueSnackbar('Bạn đã thêm 1 sản phẩm vào giỏ hàng', { variant: 'success' });
    }
  };

  return (
    <div className="item__compare">
      <div className="item__compare-feature">
        <div className="item__compare-header">
          <div className="item__compare-header-item">
            <HighlightOffIcon onClick={handleDelteCompare} style={{ cursor: 'pointer' }} />
          </div>
          <div className="item__compare-header-infomation">
            <div className="item__compare-header-img">
              <img src={product.images[0].image} alt="" className="item__compare-header-img1" />
            </div>
            <div className="item__compare-header-name">{product.name}</div>
            <div className="item__compare-header-originalPrice">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                product.originalPrice
              )}
            </div>
            <div className="item__compare-header-salePrice">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                product.salePrice
              )}
            </div>
          </div>
        </div>
        <div className="item__compare-ram-label">RAM</div>
        <div className="item__compare-ram">
          <ul className="item__compare-ram-list">
            <li className="item__compare-ram-item">{product.ram.ram}</li>
          </ul>
        </div>
        <div className="item__compare-ram-label">ROM</div>
        <div className="item__compare-rom">
          <ul className="item__compare-rom-list">
            <li className="item__compare-rom-item">{product.rom.rom}</li>
          </ul>
        </div>
        <div className="item__compare-ram-label">INFOMATION</div>
        <div className="item__compare-infomation">
          <ul className="item__compare-info-list">
            {listInfo.map((info) => (
              <div className="item__compare-info-item">
                <li className="item__compare-info-item-name">{info.name}</li>
                <li className="item__compare-info-item-content">{info.content}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="item__compare-footer">
        <Button onClick={handleAddToCArt} variant="contained" color="primary" size="large">
          Mua ngay
        </Button>
      </div>
    </div>
  );
}

export default CompareItem;
