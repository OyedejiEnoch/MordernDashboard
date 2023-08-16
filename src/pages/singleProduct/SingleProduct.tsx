import "./SingleProduct.scss"
import SinglePage from "../../components/singlePage/SinglePage"
import {singleProduct} from "../../data"

const SingleProduct =()=>{
    // const params = useParams
    // axios.get("/api/vi/products/${params.id}")
    // fetchdata and send or pass as a prop to single component
    return(
        <div className="singleProduct">
            <SinglePage {...singleProduct} />
        </div>
    )
    
}


export default SingleProduct