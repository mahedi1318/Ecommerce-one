import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "../layout/root/Root"
import Home from "../pages/Home"
import About from "../components/About/About"
import Shop from "../components/Shop/Shop"
import Product from "../components/Priduct__part/Product"
import Contact from "../components/Contact__part/Contact"
import Block from "../components/Block__part/Block"


    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route index element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/block" element={<Block/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
        </Route>
    ))


const Routes = () => {
  return (
    <>
    <RouterProvider router={router}/>      
    </>
  )
}

export default Routes
