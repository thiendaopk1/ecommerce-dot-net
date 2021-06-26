import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import brandsApi from '../../../api/brandsApi';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Button, Link } from '@material-ui/core';
Brands.propTypes = {
    
};

function Brands(props) {
    const { enqueueSnackbar } = useSnackbar();
    const [data, setData] = useState([]);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
    useEffect(() => {
        (async () => {
            try {
                const rp = await brandsApi.getAll();
                setData(rp.map((x) => ({
                    id: x.id,
                    name: x.name,
                })));
            } catch (error) {
                console.log(error)
            }
            })();
    },[]);
    
    const columns =[
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: "NAME", width: 150 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
              return (
                <>
                  <Link to={"/Admin/brand/"+ params.row.id}>
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
        <div style={{ height: 692, width: '50%' }}>
            <Button style={{margin: '10px 10px',color:'#fff',background:'red'}}>Thêm mới</Button>
            <DataGrid rows={data} columns={columns} pageSize={10}  checkboxSelection />
        </div>
    );
}

export default Brands;