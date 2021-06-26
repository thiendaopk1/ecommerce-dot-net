import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import romsApi from '../../../api/romsApi';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Button } from '@material-ui/core';

Roms.propTypes = {
    
};

function Roms(props) {
    const { enqueueSnackbar } = useSnackbar();
    const [data, setData] = useState([]);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
      useEffect(() =>{
        (async () =>{
            try {
                const list = await romsApi.getAll();
                setData(list.map((x) => ({
                    id: x.id,
                    rom: x.rom
                    
                }))
                );
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    
    const columns =[
        { field: "id", headerName: "ID", width: 90 },
        { field: "rom", headerName: "ROM", width: 150 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
              return (
                <>
                  {/* <Link to={"/Admin/product/" + params.row.id}> */}
                    <button className="productListEdit">Edit</button>
                  {/* </Link> */}
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
        <div style={{ height: 320 }}>
            <Button style={{margin: '10px 10px',color:'#fff',background:'red'}}>Thêm mới</Button>
            <DataGrid rows={data} columns={columns} pageSize={4}  checkboxSelection />
        </div>
    );
}

export default Roms;