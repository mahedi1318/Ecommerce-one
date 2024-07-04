import { ProductData } from "../../ALL_DATA/Data"
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCardDedtails from "../ProductDetails/ProductCardDedtails";
import { useContext, useState } from "react";
import { ProductCardContext } from "../../context";

const Product = (item) => {

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
    
    <div className='w-full pb-[70px] bg-[#d4d3d3] dark:bg-gray-900'>
      <div className="container">
        <div className="mb-5 flex justify-between items-center">
          <h2 className='reddit_sans xl:text-3xl mb:text-[17px] font-bold dark:text-white'>BEST PRODUCTS</h2>
          <a className=" xl:px-8 mb:px-6 mb:py-2 xl:py-2 border border-[#9b9bb4] text-[#9b9bb4] rounded-full reddit_sans text-[13px] font-semibold
           dark:text-white dark:border-[#444] flex items-center gap-2" href="/product">View All <FaArrowRightLong /></a>
        </div>
        <div className='grid xl:grid-cols-5 mb:grid-cols-1 gap-6'>
          {ProductData?.map((item)=>(
          <a key={item.id} href="#" onClick={(e)=> handleProductCardShow(item)}>
          <div className='h-[370px] bg-[#fff] rounded-xl relative p-6'>
            
            <img className="rounded-xl w-[130px] h-[130px] m-auto mt-2" src={item.imageLink} alt="" />
                         
              <div className="mt-4">
                <h6 className="reddit_sans text-1xl font-bold text-[#555454]">{item.title}</h6>
                <h5 className="reddit_sans text-[15px] font-medium mt-1 text-[#b9ad3b]">{item.product_meta}</h5>
                <div className="mt-2">
                  <span className="reddit_sans text-[13px] font-normal">{item.price}</span>
                  <span className="reddit_sans text-[16px] font-bold ml-2">{item.deletePrice}</span>
                </div>
              </div>
              <button onClick={(e)=> handleAddTOCard(e, item)} className=" w-full flex py-2  bg-yellow-500 rounded-full mt-12 justify-center">
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

export default Product
