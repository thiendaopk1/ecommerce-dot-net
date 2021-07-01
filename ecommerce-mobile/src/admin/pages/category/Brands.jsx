import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import brandsApi from '../../../api/brandsApi';
Brands.propTypes = {
    
};

function Brands(props) {
    const [data, setData] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    const handleDelete = async (id) => {
      try{
      await brandsApi.remove(id);
      setData(data.filter((item) => item.id !== id));
      enqueueSnackbar('delete brand success!', {variant: 'success'});
    }catch(error){
      enqueueSnackbar(error.message, {variant: 'error'});
    }
       
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
                  <NavLink style={{textDecoration:'none'}} to={"/Admin/categories/edit-brand/"+ params.row.id}>
                    <button className="productListEdit">Edit</button>
                  </NavLink>
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
          <NavLink style={{textDecoration:'none'}} to={"/Admin/categories/new-brand"} >
            <Button style={{margin: '10px 10px',color:'#fff',background:'red'}}>Thêm mới</Button>
          </NavLink>
            <DataGrid rows={data} columns={columns} pageSize={10}  checkboxSelection />
        </div>
    );
}

export default Brands;