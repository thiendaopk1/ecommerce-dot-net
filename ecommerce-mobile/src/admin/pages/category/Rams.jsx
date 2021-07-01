import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import ramsApi from '../../../api/ramsApi';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Button, Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
Rams.propTypes = {
    
};

function Rams(props) {
    const { enqueueSnackbar } = useSnackbar();
    const [data, setData] = useState([]);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
      useEffect(() =>{
        (async () =>{
            try {
                const list = await ramsApi.getAll();
                setData(list.map((x) => ({
                    id: x.id,
                    ram: x.ram
                    
                }))
                );
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    
    const columns =[
        { field: "id", headerName: "ID", width: 90 },
        { field: "ram", headerName: "RAM", width: 150 },
        // {
        //     field: "action",
        //     headerName: "Action",
        //     width: 150,
        //     renderCell: (params) => {
        //       return (
        //         <>
        //           <NavLink to={"/Admin/categories/edit-ram/" + params.row.id}>
        //             <Button className="productListEdit">Edit</Button>
        //           </NavLink>
        //           <DeleteOutline
        //             className="productListDelete"
        //             onClick={() => handleDelete(params.row.id)}
        //           />
        //         </>
        //       );
        //     },
        //   },
    ]
    return (
        <div style={{ height: 320, marginTop: '30px' }}>
          <NavLink style={{textDecoration:'none'}} to={"/Admin/categories/new-ram"} >
            <Button style={{marginTop: '30px', marginBottom: '10px',color:'#fff',background:'red'}}>Thêm mới</Button>
          </NavLink>
            <DataGrid rows={data} columns={columns} pageSize={4}  checkboxSelection />
        </div>
    );
}

export default Rams;