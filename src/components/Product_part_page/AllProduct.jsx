import React from 'react'
import { ProductAllData } from '../../ALL_DATA/Data'

import ProductCardDedtails from "../ProductDetails/ProductCardDedtails";
import { useContext, useState } from "react";
import { ProductCardContext } from "../../context";

const AllProduct = (productCard) => {

  const [productDetailsCardShow, setProductDetailsCardShow] = useState(false)
  const [selectedProductCard, setSelectedProductCard] = useState(null)

  const {state, dispatch} = useContext(ProductCardContext)
  

  const handleProductCardShow =(singleProduct)=>{
    setProductDetailsCardShow(!productDetailsCardShow)
    setSelectedProductCard(singleProduct)
  }

  const handleAddTOCard = (e, catchProduct) => {
    e.stopPropagation()
    
    const checkOut = state.cardData.find(
      (item) => item.id === catchProduct.id
    )

    if(!checkOut){
      dispatch({type: "add_to_card", payload: {
        ...catchProduct
      }} )
    }
  }

  return (
    <>
    {productDetailsCardShow && <ProductCardDedtails selectedProductCard={selectedProductCard} onClose={()=> setProductDetailsCardShow(!productDetailsCardShow)} />}
      <div className='pt-[60px] pb-[60px] dark:bg-gray-900 bg-[#d4d3d3]'>
        <div className="container">
        <div className='grid xl:grid-cols-5 mb:grid-cols-1 gap-6'>   
          {ProductAllData?.map((productCard)=>(
            <a href="#" onClick={(e)=> handleProductCardShow(productCard)}>
                  <div className='h-[370px] bg-[#fff] rounded-xl relative p-6'>                    
                    <img className="rounded-xl w-[130px] h-[130px] m-auto mt-2" src={productCard.imageLink} alt="" />                                
                      <div className="mt-4">
                        <h6 className="reddit_sans text-1xl font-bold text-[#555454]">{productCard.title}</h6>
                        <h5 className="reddit_sans text-[15px] font-medium mt-1 text-[#b9ad3b]">{productCard.product_meta}</h5>
                        <div className="mt-2">
                          <span className="reddit_sans text-[13px] font-normal">{productCard.price}</span>
                          <span className="reddit_sans text-[16px] font-bold ml-2">{productCard.deletePrice}</span>
                        </div>
                      </div>
                      <button onClick={(e)=> handleAddTOCard(e, productCard)} className=" w-full flex py-2  bg-yellow-500 rounded-full mt-12 justify-center">
                          <span>Add to card</span>     
                      </button>
                  </div>
                  </a>  
          ))}                          
          </div>
        </div>
      </div>
    </>
  )
}

export default AllProduct
