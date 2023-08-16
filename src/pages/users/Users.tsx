import {useState} from "react"
import "./Users.scss"
import DataTable from "../../components/dataTable/DataTable"
import {  GridColDef, GridValueGetterParams, } from '@mui/x-data-grid';
import {userRows} from "../../data"
import {useQuery,} from '@tanstack/react-query'
import AddUser from "../../components/adduser/AddUser"

const Users = () => {

  // const { isLoading, data } = useQuery({
  //   queryKey: ['allusers'],
  //   queryFn: () =>
  //     fetch('http://localhost:4000/api/users').then(
  //       (res) => res.json(),
  //     ),
  // })
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field:"img", headerName:"Avatar", width:100,
        renderCell:(params)=>{
            return <img className="cellImg" src={params.row.img || "noavatar.png"} alt="img"/>
        }
    },
  
    {
      field: 'firstName',
      headerName: 'First name',
      width: 120,
      editable: true,
      type:"string"
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 120,
      editable: true,
      type:"string"
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 50,
      editable: true,
    },
    // {
    //   field: 'phone',
    //   headerName: 'Phone',
    //   type: 'number',
    //   width: 100,
    //   editable: true,
    // },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    // {
    //     field: 'checked', headerName: 'checked', width: 100, type:"boolean"
    // to use we just write checked:true and that would be all
     // },
    {
        field:"payment", headerName:"Status" ,width: 120, renderCell:(params)=>{
            return(
                <div className={`status  ${params.row.payment}`}>
                    <span>{params.row.payment}</span>
                </div>
            )
        }
    },
  ];
  
  const [open , setOpen] = useState(false)

  return (
    <div className="users">
      <div className="topInfo">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      {/* {isLoading ? "Loading..." : } */}
      <DataTable link="users" columns={columns} rows={userRows} />
      {open && <AddUser link="users" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users
