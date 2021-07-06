import { Avatar } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import commentsApi from "../../../api/commentsApi";
import "../../pages/commentList/commentList.css";

function CommentList() {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
        try {
            const rp = await commentsApi.getAll();
            setData(rp.data.map((x) => ({
              id: x.id,
              content: x.content,
              fullName: x.userComment.fullName,
              avatar: x.userComment.avatar,
              createDate:x.createdDate,
              active:x.active,
          })));
        } catch (error) {
            console.log(error)
        }
    })();
},[]);
  const handleBlock=async(id)=>{
          try {
              const rp = await commentsApi.update(id);
              setData(rp.data.map((x) => ({
                id: x.id,
                content: x.content,
                fullName: x.userComment.fullName,
                avatar: x.userComment.avatar,
                createDate:x.createdDate,
                active:x.active,
  
            })));
              enqueueSnackbar('success!', {variant: 'success'});     
          } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error'});
          }
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "content", headerName: "content", width: 240 },
    {
      field: "userComment",
      headerName: "User",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {/* <Avatar alt="Remy Sharp" src={params.rows.avatar} /> */}
            {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
            {params.row.fullName}
          </div>
        );
      },
    },
    { field: "createDate", headerName: "createDate", width: 160 },
   
    {
      field: "active",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <>
          {params.row.active==1&&(
              <div style={{color:'green'}}>display</div>
            )}
             {params.row.active==0&&(
              <div style={{color:'red'}}>hide</div>
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
          {params.row.active==1&&(
              <button className="userListEdit" onClick={()=>handleBlock(params.row.id)}>hide</button>
            )}
             {params.row.active==0&&(
              <button className="userListBlock" onClick={()=>handleBlock(params.row.id)}>display</button>
            )}
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
export default CommentList;