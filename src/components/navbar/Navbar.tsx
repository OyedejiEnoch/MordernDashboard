import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarContainer">
            <div className="navbarLogo">
                <img src="/logo.svg" alt="img" />
                <span>RunOrder.</span>
            </div>
            <div className="navbarMenu">
                <div className="navbarIcons">
                    <img src="/search.svg" alt="" className="icon"/>
                    <img src="/app.svg" alt="" className="icon"/>
                    <img src="/expand.svg" alt="" className="icon"/>
                </div>

                <div className="notification">
                <img src="/notifications.svg" alt=""/>
                <span>1</span>    
                </div>                

                <div className="navbarProfile">
                <img src="https://images.unsplash.com/photo-1690177501021-03802727f36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                <span>Enoch</span>
                </div>
                <img src="/settings.svg" alt="" className="icon"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
