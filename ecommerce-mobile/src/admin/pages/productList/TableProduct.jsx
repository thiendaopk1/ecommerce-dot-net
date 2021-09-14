import '../../pages/productList/productList.css';
import { DataGrid } from '@material-ui/data-grid';
import PropTypes from 'prop-types';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { Box, Button } from '@material-ui/core';

TableProduct.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
};
TableProduct.defaultProps = {
  data: [],
};
function TableProduct({ data, onDelete = null }) {
  const history = useHistory();
  useLocation();
  useRouteMatch();
  const handleDelete = async (id) => {
    if (onDelete) {
      await onDelete(id);
    }
  };
  const handleNewProduct = () => {
    history.push('/Admin/newproduct');
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.images[0]?.image} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'originalPrice', headerName: 'Original Price', width: 164 },
    { field: 'promotionPercents', headerName: 'Promotion Percents', width: 204 },
    { field: 'salePrice', headerName: 'Sale Price', width: 145 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/Admin/product/' + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: 500, width: '100%' }}>
      <Box
        style={{
          height: 50,
          width: '100%',
          margin: '10px 10px',
          marginTop: '35px',
        }}
      >
        <Button onClick={handleNewProduct} variant="contained" color="primary">
          Thêm
        </Button>
      </Box>
      <DataGrid rows={data} columns={columns} pageSize={7} checkboxSelection />
    </div>
  );
}

export default TableProduct;
