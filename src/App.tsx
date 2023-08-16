import Home from "./pages/home/Home";
import "./styles/global.scss"
import Products from "./pages/products/Products";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import SingleUser from "./pages/SingleUser/SingleUser";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
function App() {

  // since our Navbar, footer and sidebar would be consisitent throughout all pages(i.e Home, Users, Products)
  // we make them a layout so as to have them in one place to appear in all pages rather than 
  // having them in each page
  const queryClient = new QueryClient()
  const Layout=()=>{
    return(
      <div className="Main">
        <Navbar />

        <div className="containerContent">
          <div className="menuContainer">
            <Sidebar />
          </div>
          <div className="contentContainer">
          <QueryClientProvider client={queryClient}>
          <Outlet />
          </QueryClientProvider>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/users",
          element:<Users />
        },
        {
          path:"/users/:id",
          element:<SingleUser />
        },
        {
          path:"/products",
          element:<Products />
        },
        {
          path:"/products/:id",
          element:<SingleProduct />
        },
      ]
    },
    {
      path:"/login",
      element:<Login />
    }
  ])


  return (
    <RouterProvider router={router}/>
  )
}

export default App
