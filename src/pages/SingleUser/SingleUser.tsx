import "./SingleUser.scss"
import SinglePage from "../../components/singlePage/SinglePage"
import {singleUser} from "../../data"


const SingleUser =()=>{
    // const params = useParams
    // axios.get("/api/vi/products/${params.id}")
    // fetchdata and send or pass as a prop to single component
    return(
        <div className="singleUser">
            <SinglePage  {...singleUser}/>
        </div>
    )
    
}


export default SingleUser