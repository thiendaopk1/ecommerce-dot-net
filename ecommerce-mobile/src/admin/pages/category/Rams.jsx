import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import ramsApi from '../../../api/ramsApi';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Button } from '@material-ui/core';
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
        <div style={{ height: 320, marginTop: '30px' }}>
            <Button style={{marginTop: '30px', marginBottom: '10px'}}>Them</Button>
            <DataGrid rows={data} columns={columns} pageSize={4}  checkboxSelection />
        </div>
    );
}

export default Rams;