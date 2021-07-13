import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
          status: x.active == 1 ? 'active' : 'block',
          blocked: x.active,
          role: x.userRoles[0].role.id,

        })));
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);
  const handleBlock = async (id) => {
    try {
      const rp = await userApi.blockUser(id);
      setData(rp.map((x) => ({
        id: x.id,
        username: x.fullname,
        email: x.email,
        address: x.address,
        phone: x.phone,
        status: x.active == 1 ? 'active' : 'block',
        blocked: x.active,
        role: x.userRoles[0].role.id,
      })));
      enqueueSnackbar('Blocked success!', { variant: 'success' });
      console.log(data);

    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  }
  const handleChangeRole = async (id) => {
    try {
      const value = { id: id, role: document.getElementById("role").value==1?2:1 }
      const rp = await userApi.changeRole(value);
      setData(rp.map((x) => ({
        id: x.id,
        username: x.fullname,
        email: x.email,
        address: x.address,
        phone: x.phone,
        status: x.active == 1 ? 'active' : 'block',
        blocked: x.active,
        role: x.userRoles[0].role.id,
      })));
      enqueueSnackbar('Blocked success!', { variant: 'success' });
      console.log(data);

    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
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
      width: 150,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 140,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      renderCell: (params) => {
        return (
          <>
            {params.row.blocked == 1 && (
              <div style={{ color: 'green' }}>active</div>
            )}
            {params.row.blocked == 0 && (
              <div style={{ color: 'red' }}>lock</div>
            )}
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {params.row.blocked == 1 && (
              <button className="userListEdit" onClick={() => handleBlock(params.row.id)}>lock</button>
            )}
            {params.row.blocked == 0 && (
              <button className="userListBlock" onClick={() => handleBlock(params.row.id)}>unlock</button>
            )}
            {params.row.role == 1 && (
              <select onChange={()=>handleChangeRole(params.row.id)} name="role" id="role">
                <option value="1">user</option>
                <option value="2">admin</option>
              </select>
            )}
            {params.row.role == 2 && (
              <select onChange={()=>handleChangeRole(params.row.id)} name="role" id="role">
                <option value="2">admin</option>
                <option value="1">user</option>
              </select>
            )}
          </>
        );
      },
    },
  ];

  return (
    <div className="userList" style={{width:'100%'}}>
      <NavLink style={{ textDecoration: 'none' }} to={"/Admin/newUser"} >
        <Button style={{ margin: '10px 10px', color: '#fff', background: 'red' }}>Thêm mới</Button>
      </NavLink>
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