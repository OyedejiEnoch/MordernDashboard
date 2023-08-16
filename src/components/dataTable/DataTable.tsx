import "./DataTable.scss"
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useMutation, QueryClient, } from "@tanstack/react-query";
import {Link} from "react-router-dom"


type Props ={
    columns: GridColDef[],
    rows:object[],
    link:string
}



const DataTable = (props:Props) => {

  const queryClient = new QueryClient()


  const mutation =useMutation({
    mutationFn: (id:number)=>{
      return fetch(`http://localhost:4000/api/${props.link}/${id}`, {
        method:"delete"
      });
    },
    onSuccess:()=>{
      queryClient.invalidateQueries([`all${props.link}`])
      // allusers from the queryKey 
      // this is to refresh the page on success
    }
  })

    const handleDelete =(id:number)=>{
        // await axios.delete(/api/delete/id)
        // console.log(id + "has being deleted")
        mutation.mutate(id)
    }

    const actionColumn : GridColDef ={field: 'action', headerName: 'Actions', width: 200, renderCell:(params)=>{
        return(
        
            <div className="action">
            <Link to={`/${props.link}/${params.row.id}`} style={{textDecoration:"none"}}>
                <img src="/view.svg" />
                </Link>
                <div className="delete" onClick={()=> handleDelete(params.row.id)} >
                    <img src="/delete.svg" />
                </div>
            </div>
            
        )
      } }

  return (
    <div className="dataTable">
       <DataGrid
       className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500}
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable
