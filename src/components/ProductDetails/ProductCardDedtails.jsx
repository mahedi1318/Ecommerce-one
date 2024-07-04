
const ProductCardDedtails = ({onClose, selectedProductCard, }) => {

  return (
    <>
      <div className='dark:bg-gray-900 dark:text-white'>
      <div
      className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm"
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto"
      >
        <div
          className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden"
        >
          <img
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
            src={selectedProductCard.imageLink}
            alt=""
          />
          <div className="p-5 lg:p-11">
            <div className="">
              <h2 className="text-3xl reddit_sans lg:text-[40px] mb-2 font-semibold">{selectedProductCard.title}</h2>
              <span
                className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">{selectedProductCard.product_meta}</span>
              <div></div>
            </div>
            <p className="text-sm lg:text-base mb-8 lg:mb-16 reddit_sans">
              When Branch’s brother, Floyd, is kidnapped for his musical talents
              by a pair of nefarious pop-star villains, Branch and Poppy embark
              on a harrowing and emotional journey to reunite the other brothers
              and rescue Floyd from a fate even worse than pop-culture
              obscurity.
            </p>
            <div className="grid lg:grid-cols-2 gap-2">
              <button
                className="bg-green-600 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                
              >
                <img src="./assets/tag.svg" alt="" />
                <span>{selectedProductCard.price} | Add to Cart</span>
              </button>
              <button
                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
               onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </>
  )
}

export default ProductCardDedtails
