import {useState} from "react"
import {  GridColDef, GridValueGetterParams, } from '@mui/x-data-grid';
import {products} from "../../data"
import DataTable from "../../components/dataTable/DataTable"
import AddUser from "../../components/adduser/AddUser"
import "./Products.scss"

const Products = () => {
  const [open , setOpen] = useState(false)

  const columns :GridColDef[]=[
    {field:"id ", headerName:"ID", width: 90},
    {
      field:"img", headerName:"Avatar", width:100,
      renderCell:(params)=>{
          return <img className="cellImg" src={params.row.img || "noavatar.png"} alt="img"/>
      }
  },
    {
      field: 'title',
      headerName: 'Title',
      width: 120,
      type:"string"
    },
    {
      field: 'color',
      headerName: 'Color',
      width: 120,
      type:"string"
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'string',
      width: 100,
    },
    {
      field: 'producer',
      headerName: 'Producer',
      type: 'string',
      width: 100,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      type: 'string',
      width: 100,
    },
    {
      field: 'inStock',
      headerName: 'In Stock',
      type: 'boolean',
      width: 100,
    },
  ]



  return (
    <div className="products">
    <div className="topInfo">
      <h1>Products</h1>
      <button onClick={()=>setOpen(true)}>Add New User</button>
    </div>
    <DataTable link="products" columns={columns} rows={products} />
    {open && <AddUser link="products" columns={columns} setOpen={setOpen} />}
  </div>
  )
}

export default Products
