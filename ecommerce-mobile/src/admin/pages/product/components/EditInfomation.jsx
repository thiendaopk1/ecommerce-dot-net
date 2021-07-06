import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../components/textField/InputField';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@material-ui/core';
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import '../../../pages/productList/productList.css';
EditInfomation.propTypes = {
    arrInfos: PropTypes.array,
};

function EditInfomation({arrInfos}) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90},
        { field: 'name', headerName: 'Name', width: 164 },
        { field: 'content', headerName: 'Content', width: 649 },
        {
            field: "action",
            headerName: "Action",
            width: 118,
            renderCell: (params) => {
              return (
                <>
                  <DeleteOutline
                    className="productListDelete"
                    // onClick={() => handleDelete(params.row.id)}
                  />
                </>
              );
            },
          },
    ]

    return (
        <div style={{height:'500px', width: '100%',  }} >
            <DataGrid rows={arrInfos} columns={columns} pageSize={7} checkboxSelection />
            <Box style={{ height: 50, width: '100%',margin: '10px 10px'}}>
                <Button  type="submit" variant="contained" color="primary">Save</Button>
            </Box>
        </div>
    );
}

export default EditInfomation;