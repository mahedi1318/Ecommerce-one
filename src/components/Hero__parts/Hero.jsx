import Slider from "react-slick";

import { HeroData } from "../../ALL_DATA/Data";

const Hero = () => {

    const settings = {
        dots: true,
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
    <div className='w-full h-[500px] bg-[#333300]/40 dark:bg-gray-900'>
        <div className="container">

            {/* hero slider */}
            <Slider {...settings}>
              {HeroData.map((item)=>(
                <div key={item.id}>
                    <div className="grid grid-cols-1">                        
                        <div className="w-full relative">
                            <img className="w-full h-[500px] object-cover" src={item.imageLink} alt="" />
                            <div className="w-full h-full bg-[#333300]/50 top-0 absolute left-0">
                                <div className=" text-center text-white">
                                    <h1>{item.subTitle}</h1>
                                    <h1>{item.title1}</h1>
                                    <button>Shop Now</button>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
              ))}
            </Slider>
        </div>
    </div>
      Hero
    </>
  )
}

export default Hero
