import "./AddUser.scss"
import {  GridColDef, } from '@mui/x-data-grid';
import { useMutation, QueryClient, } from "@tanstack/react-query";

type Props ={
    link:string,
    columns:GridColDef[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
} 

const AddUser =(props:Props)=>{
   
  const queryClient = new QueryClient()


  const mutation =useMutation({
    mutationFn: ()=>{
      return fetch(`http://localhost:4000/api/${props.link}}`, {
        method:"post",
        // headers:{
        //     Accept:"application/json",
        //     "Content-Type":"application/json"
        // },

        // body: JSON.stringify[{
        //     id:111,
        //     img:"",

        // }],
        // we pass our body that we want to send
      });
    },
    onSuccess:()=>{
      queryClient.invalidateQueries([`all${props.link}`])
      // allusers from the queryKey 
      // this is to refresh the page on success
    }
  })

  const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    mutation.mutate();
    props.setOpen(false)
    // axios.post(/api/${link}, [data])

}


    return(
        <div className="addUser">
            <div className="model">
                <span className="close" onClick={()=>props.setOpen(false)}>x</span>
                <h1>Add New {props.link}</h1>
                <form onSubmit={handleSubmit}>
                    {props.columns.filter(item=>item.field !== "id" && item.field !== "img").
                                        map((column)=>(
                        <div className="item">
                            <label className="label">{column.headerName}</label>
                            <input  type={column.type} placeholder={column.field} />
                        </div>
                    ))}
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser