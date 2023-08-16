import "./Topbox.scss"
import { topDealUsers } from "../../data"

const Topbox = () => {
  return (
    <div className="topbox">
        <h1>Top Deals</h1>

        <div className="list">
            {topDealUsers.map((users)=>(
                <div key={users.id} className="listItem">
                    <div className="user">
                        <img src={users.img} alt="img"/>
                        <div className="userDetails">
                            <span className="username">{users.username}</span>
                            <span className="userEmail">{users.email}</span>
                        </div>
                       
                    </div>
                    <span className="amount">${users.amount}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Topbox
