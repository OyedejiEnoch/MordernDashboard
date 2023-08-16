import "./Sidebar.scss"
import {Link} from "react-router-dom"
import { menu } from "../../data"

const Sidebar = () => {
  return (
    <div className="sidebar">

    {menu.map((item)=>{
      return(
        <div key={item.id} className="sidebarItem">
        <span className="title">{item.title}</span>

       {item.listItem.map((list)=>(
        <>
         <Link key={list.id} to={list.url} className="listItem">
          <img src={list.icon} alt="" />
          <span className="ListItemTitle"> {list.title}</span>
        </Link>
        </>
       ))}
        
      </div>
      )
    })}

    </div>
  )
}

export default Sidebar
