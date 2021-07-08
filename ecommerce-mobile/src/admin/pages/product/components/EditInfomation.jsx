import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../components/textField/InputField';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@material-ui/core';
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import '../../../pages/productList/productList.css';
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import productApi from '../../../../api/productApi';
import { useSnackbar } from 'notistack';

EditInfomation.propTypes = {
    arrInfos: PropTypes.array,
    product: PropTypes.object,
    onSubmitDelete: PropTypes.func,
};

function EditInfomation({arrInfos,product={},onSubmitDelete=null}) {
    const {id} = product;
    const match = useRouteMatch();
    const location = useLocation();

    const handleDelete = async (infomationId) => {
      if(onSubmitDelete){
        await onSubmitDelete(id,infomationId)
      }
  }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90},
        { field: 'name', headerName: 'Name', width: 164 },
        { field: 'content', headerName: 'Content',editable: true, width: 649 },
        {
            field: "action",
            headerName: "Action",
            width: 118,
            renderCell: (params) => {
              return (
                <>
                  <Link to={`/Admin/product/${id}/` + params.row.id}>
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
    ]

    return (
        <div style={{height:'500px', width: '100%',  }} >
            <DataGrid rows={arrInfos} columns={columns} pageSize={7} />
        </div>
    );
}

export default EditInfomation;