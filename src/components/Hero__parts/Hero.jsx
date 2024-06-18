import Slider from "react-slick";

import { HeroData } from "../../ALL_DATA/Data";

const Hero = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,    
        slidesToScroll: 1,
        // autoPlay true
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }

  return (
    <>
    <div className='w-full h-[500px] bg-[#d4d3d3] dark:bg-gray-900'>
        <div className="container">

            {/* hero slider */}
            <Slider {...settings}>
              {HeroData.map((item)=>(
                <div key={item.id}>
                    <div className="grid grid-cols-1">                        
                        <div className="w-full relative">
                            <img className="w-full h-[500px] object-cover" src={item.imageLink} alt="" />
                            <div className="w-full h-full bg-[#333300]/50 top-0 absolute left-0">
                                <div className=" text-center text-white xl:mt-20 mb:mt-[130px]">
                                    <h1 className="xl:text-8xl font-semibold reddit_sans mb:text-[35px]">{item.subTitle}</h1>
                                    <h1 className="uppercase text-4xl font-medium mt-3">{item.title1}</h1>
                                    <button className="px-6 py-3 bg-slate-700 rounded-xl mt-8">Shop Now</button>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
              ))}
            </Slider>
        </div>
    </div> 
    </>
  )
}

export default Hero
