import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "../layout/root/Root"
import Home from "../pages/Home"
import About from "../pages/AboutPage"
import Shop from "../pages/ShopPage"
import Product from "../pages/ProductPage"
import Contact from "../pages/ContactPage"
import Block from "../pages/BlockPage"


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
