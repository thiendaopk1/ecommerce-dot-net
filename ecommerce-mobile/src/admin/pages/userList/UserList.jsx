import { DataGrid } from "@material-ui/data-grid";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import userApi from "../../../api/userApi";
import "../../pages/userList/userList.css";

function UserList() {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
        try {
            const rp = await userApi.getAll();
            setData(rp.map((x) => ({
                id: x.id,
                username: x.fullname,
                email: x.email,
                address: x.address,
                phone: x.phone,
                status: x.active==1?'active':'block',
                blocked:x.active,

            })));
        } catch (error) {
            console.log(error)
        }
    })();
},[]);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const handleBlock=async(id)=>{
          try {
              const rp = await userApi.blockUser(id);
                        setData(rp.map((x) => ({
                            id: x.id,
                            username: x.fullname,
                            email: x.email,
                            address: x.address,
                            phone: x.phone,
                            status: x.active==1?'active':'block',
                            blocked:x.active,
                        })));
              enqueueSnackbar('Blocked success!', {variant: 'success'});
              console.log(data);
                 
          } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error'});
          }
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 160 },
   
    {
      field: "address",
      headerName: "Address",
      width: 160,
    },
    {
      field: "phone",
      headerName: "Phone number",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <>
          {params.row.blocked==1&&(
              <div style={{color:'green'}}>active</div>
            )}
             {params.row.blocked==0&&(
              <div style={{color:'red'}}>lock</div>
            )}
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
          {params.row.blocked==1&&(
              <button className="userListEdit" onClick={()=>handleBlock(params.row.id)}>lock</button>
            )}
             {params.row.blocked==0&&(
              <button className="userListBlock" onClick={()=>handleBlock(params.row.id)}>unlock</button>
            )}
            {/* <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}
export default UserList;