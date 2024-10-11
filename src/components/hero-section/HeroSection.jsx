import React, { useEffect, useState } from 'react'
import './heroSection.css'

function HeroSection() {

    const slider = [
        {
            url: "/images/hero1.jpg"
        },
        {
            url: "/images/hero2.jpg"
        },
        {
            url: "/images/hero3.jpg"
        },
        {
            url: "/images/hero4.jpg"
        },
        {
            url: "/images/hero5.jpg"
        },
    ]

    const [slide, setSlide] = useState(0)

    const moveLeft = () => {
        setSlide((prevImage) => {
            const newImage = prevImage === 0 ? slide.length - 1 : prevImage - 1 ;
            return newImage;
        })
    }

    const moveRight = () => {
        setSlide((prevImage) => {
            const newImage = prevImage === slider.length - 1 ? 0 : prevImage + 1 ;
            return newImage;
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            moveRight();
        }, 22000);
        return () => clearInterval(interval)
    }, [])

                            // TOP SECTION
                
    const [tops, setTops] = useState(0);

    const topRightMove = () => {
        setTops((prevTops) => {
            const newTops = prevTops + 50;
            if (newTops >= 0) {
                return 0; // Limit it to 330rem
            }
            return newTops;
        });
    };
    const topLeftMove = () => {
        setTops((prevTops) => {
            const newTops = prevTops - 50;
            if (newTops <= -330) {
                return -330; // Limit it to 0rem (don't move beyond 0)
            }
            return newTops;
        });
    };

                        // PRO SECTION
    const [pro, setPro] = useState(0)
    
    const proRightMove = () => {
        setPro((prevPro) => {
            const newPro = prevPro + 50;
            if (newPro >= 0) {
                return 0;
            }
            return newPro;
        })
    }
    const proLeftMove = () => {
        setPro((prevPro) => {
            const newPro = prevPro - 50;
            if (newPro <= -120) {
                return -120;
            }
            return newPro;
        })
    }

  return (
    <>
    <div className='bg-container'
    style={{backgroundImage: `url(${slider[slide].url})`}}  
    >
        <div className='hero-change'>
        <i onClick={moveLeft} className="fa-sharp fa-solid fa-chevron-left"></i>
        <i onClick={moveRight} className="fa-sharp fa-solid fa-chevron-right"></i>
        </div>

        <div className='items'>

            {/* ****************** */}
            <div className='single-item'>
                <h2>Gaming accessories</h2>
                <div className='single-item-images'>
                    <div>
                        <img src="./images/gaming 1.jpg" alt="" />
                        <p>Headsets</p>
                    </div>
                    <div>
                        <img src="./images/gaming 2.jpg" alt="" />
                        <p>Computer mice</p>
                    </div>
                    <div>
                        <img src="./images/gaming 3.jpg" alt="" />
                        <p>Keyboards</p>
                    </div>
                    <div>
                        <img src="./images/gaming 4.jpg" alt="" />
                        <p>Chairs</p>
                    </div>
                </div>
                <a href="#">See more</a>
            </div>

                        {/* ****************** */}

            <div className='single-item'>
                <h2>Shop for your home essentials</h2>
                <div className='single-item-images'>
                    <div>
                        <img src="./images/home1.jpg" alt="" />
                        <p>Cleaning Tools</p>
                    </div>
                    <div>
                        <img src="./images/home2.jpg" alt="" />
                        <p>Home Storage</p>
                    </div>
                    <div>
                        <img src="./images/home3.jpg" alt="" />
                        <p>Home Decor</p>
                    </div>
                    <div>
                        <img src="./images/home4.jpg" alt="" />
                        <p>Bedding</p>
                    </div>
                </div>
                <a href="#">Discover more in Home</a>
            </div>

                            {/* ****************** */}

            <div className='single-item'>
                <h2>New Home arraivals under $50</h2>
                <div className='single-item-images'>
                    <div>
                        <img src="./images/arivals 1.jpg" alt="" />
                        <p>Kitchen & dinning</p>
                    </div>
                    <div>
                        <img src="./images/arivals 2.jpg" alt="" />
                        <p>Home improvement</p>
                    </div>
                    <div>
                        <img src="./images/arivals 3.jpg" alt="" />
                        <p>Decor</p>
                    </div>
                    <div>
                        <img src="./images/arivals 4.jpg" alt="" />
                        <p>Bedding & bath</p>
                    </div>
                </div>
                <a href="#">Shop the latest from Home</a>
            </div>

                {/* ****************** */}

            <div className='single-item'>
                <h2>Shop deals in Fashion</h2>
                <div className='single-item-images'>
                    <div>
                        <img src="./images/fashion 1.jpg" alt="" />
                        <p>Jeans under $50</p>
                    </div>
                    <div>
                        <img src="./images/fashion 2.jpg" alt="" />
                        <p>Shoes under $50</p>
                    </div>
                    <div>
                        <img src="./images/fashion 3.jpg" alt="" />
                        <p>Dresses under $30</p>
                    </div>
                    <div>
                        <img src="./images/fashion 4.jpg" alt="" />
                        <p>Tops under $25</p>
                    </div>
                </div>
                <a href="#">See more</a>
            </div>

                                {/* ****************** */}

            <div className='single-item'>
                <h2>Top categories in Kitchen appliances</h2>
                <div className='single-item-images single-2'>
                    <div>
                        <img src="./images/kitchen 1.jpg" alt="" />
                        <p>Cooker</p>
                    </div>
                    <div className='single-three'>
                    <div>
                        <img src="./images/kitchen 2.jpg" alt="" />
                        <p>Coffee</p>
                    </div>
                    <div>
                        <img src="./images/kitchen 3.jpg" alt="" />
                        <p>Pots and Pans</p>
                    </div>
                    <div>
                        <img src="./images/kitchen 4.jpg" alt="" />
                        <p>Kettles</p>
                    </div>
                    </div>
                </div>
                <a href="#">Explore all products in Kitchen</a>
            </div>

            {/* ****************** */}

            <div className='single-item'>
                <h2>Refresh your space</h2>
                <div className='single-item-images'>
                    <div>
                        <img src="./images/space1.jpg" alt="" />
                        <p>Dining</p>
                    </div>
                    <div>
                        <img src="./images/space2.jpg" alt="" />
                        <p>Home</p>
                    </div>
                    <div>
                        <img src="./images/space3.jpg" alt="" />
                        <p>Kitchen</p>
                    </div>
                    <div>
                        <img src="./images/space4.jpg" alt="" />
                        <p>Health and Beauty</p>
                    </div>
                </div>
                <a href="#">See more</a>
            </div>

                         {/* ****************** */}

            <div className='single-item'>
                <h2>Gaming accessories</h2>
                <div className='single-item-images single-image'>
                <img src="./images/game.jpg" alt="" />
                </div>
                <a href="#">Shop gaming</a>
            </div>

                         {/* ****************** */}

             <div className='single-item'>
                <h2>Toys under $25</h2>
                <div className='single-item-images single-image'>
                <img src="./images/toys.jpg" alt="" />
                </div>
                <a href="#">Shop now</a>
            </div>
        </div>

        {/* ***********************TOP******************** */}
        
        <div className='tops'>
            <h2>Top picks for Pakistan</h2>

            <div  className='top-all'
            style={{transform: `translateX(${tops}rem)`}}
            >
                <img src="./images/top1.jpg" alt="" />
                <img src="./images/top2.jpg" alt="" />
                <img src="./images/top3.jpg" alt="" />
                <img src="./images/top4.jpg" alt="" />
                <img src="./images/top5.jpg" alt="" />
                <img src="./images/top6.jpg" alt="" />
                <img src="./images/top7.jpg" alt="" />
                <img src="./images/top8.jpg" alt="" />
                <img src="./images/top9.jpg" alt="" />
                <img src="./images/top10.jpg" alt="" />
                <img src="./images/top11.jpg" alt="" />
                <img src="./images/top12.jpg" alt="" />
                <img src="./images/top13.jpg" alt="" />
                <img src="./images/top14.jpg" alt="" />
                <img src="./images/top15.jpg" alt="" />
                <img src="./images/top16.jpg" alt="" />
                <img src="./images/top17.jpg" alt="" />
                <img src="./images/top18.jpg" alt="" />
                <img src="./images/top19.jpg" alt="" />
                <img src="./images/top20.jpg" alt="" />
                <img src="./images/top21.jpg" alt="" />
                <img src="./images/top22.jpg" alt="" />
                <img src="./images/top23.jpg" alt="" />
                <img src="./images/top24.jpg" alt="" />
                <img src="./images/top25.jpg" alt="" />
                <img src="./images/top26.jpg" alt="" />
                <img src="./images/top27.jpg" alt="" />
                <img src="./images/top28.jpg" alt="" />
                <img src="./images/top29.jpg" alt="" />
                <img src="./images/top30.jpg" alt="" />
                <img src="./images/top31.jpg" alt="" />
                <img src="./images/top32.jpg" alt="" />
            </div>
            <div className='tops-change'>
        <i onClick={topRightMove} className="fa-sharp fa-solid fa-chevron-left"></i>
        <i onClick={topLeftMove} className="fa-sharp fa-solid fa-chevron-right"></i>
        </div>
        </div>

        {/* **************PRO*************** */}

        <div className='tops'>
            <h2>Products and beauty for man</h2>

            <div  className='top-all'
            style={{transform: `translateX(${pro}rem)`}}
            >
                <img src="./images/pro1.jpg" alt="" />
                <img src="./images/pro2.jpg" alt="" />
                <img src="./images/pro3.jpg" alt="" />
                <img src="./images/pro4.jpg" alt="" />
                <img src="./images/pro5.jpg" alt="" />
                <img src="./images/pro6.jpg" alt="" />
                <img src="./images/pro7.jpg" alt="" />
                <img src="./images/pro8.jpg" alt="" />
                <img src="./images/pro9.jpg" alt="" />
                <img src="./images/pro10.jpg" alt="" />
                <img src="./images/pro11.jpg" alt="" />
                <img src="./images/pro12.jpg" alt="" />
                <img src="./images/pro13.jpg" alt="" />
                <img src="./images/pro14.jpg" alt="" />
                <img src="./images/pro15.jpg" alt="" />
                <img src="./images/pro16.jpg" alt="" />
                <img src="./images/pro17.jpg" alt="" />
                <img src="./images/pro18.jpg" alt="" />
                <img src="./images/pro19.jpg" alt="" />
                <img src="./images/pro20.jpg" alt="" />
            </div>
            <div className='tops-change'>
        <i onClick={proRightMove} className="fa-sharp fa-solid fa-chevron-left"></i>
        <i onClick={proLeftMove} className="fa-sharp fa-solid fa-chevron-right"></i>
        </div>
        </div>

        {/* ******************** */}

        <div className='items'>

            {/* ****************** */}
            <div className='single-item'>
                <h2>Gaming accessories</h2>
                <div className='single-item-images'>
                    <div>
                        <img src="./images/gaming 1.jpg" alt="" />
                        <p>Headsets</p>
                    </div>
                    <div>
                        <img src="./images/gaming 2.jpg" alt="" />
                        <p>Computer mice</p>
                    </div>
                    <div>
                        <img src="./images/gaming 3.jpg" alt="" />
                        <p>Keyboards</p>
                    </div>
                    <div>
                        <img src="./images/gaming 4.jpg" alt="" />
                        <p>Chairs</p>
                    </div>
                </div>
                <a href="#">See more</a>
            </div>

                        {/* ****************** */}

            <div className='single-item'>
                <h2>Shop for your home essentials</h2>
                <div className='single-item-images'>
                    <div>
                        <img src="./images/home1.jpg" alt="" />
                        <p>Cleaning Tools</p>
                    </div>
                    <div>
                        <img src="./images/home2.jpg" alt="" />
                        <p>Home Storage</p>
                    </div>
                    <div>
                        <img src="./images/home3.jpg" alt="" />
                        <p>Home Decor</p>
                    </div>
                    <div>
                        <img src="./images/home4.jpg" alt="" />
                        <p>Bedding</p>
                    </div>
                </div>
                <a href="#">Discover more in Home</a>
            </div>

                            {/* ****************** */}

            <div className='single-item'>
                <h2>New Home arraivals under $50</h2>
                <div className='single-item-images'>
                    <div>
                        <img src="./images/arivals 1.jpg" alt="" />
                        <p>Kitchen & dinning</p>
                    </div>
                    <div>
                        <img src="./images/arivals 2.jpg" alt="" />
                        <p>Home improvement</p>
                    </div>
                    <div>
                        <img src="./images/arivals 3.jpg" alt="" />
                        <p>Decor</p>
                    </div>
                    <div>
                        <img src="./images/arivals 4.jpg" alt="" />
                        <p>Bedding & bath</p>
                    </div>
                </div>
                <a href="#">Shop the latest from Home</a>
            </div>

                {/* ****************** */}

            <div className='single-item'>
                <h2>Shop deals in Fashion</h2>
                <div className='single-item-images'>
                    <div>
                        <img src="./images/fashion 1.jpg" alt="" />
                        <p>Jeans under $50</p>
                    </div>
                    <div>
                        <img src="./images/fashion 2.jpg" alt="" />
                        <p>Shoes under $50</p>
                    </div>
                    <div>
                        <img src="./images/fashion 3.jpg" alt="" />
                        <p>Dresses under $30</p>
                    </div>
                    <div>
                        <img src="./images/fashion 4.jpg" alt="" />
                        <p>Tops under $25</p>
                    </div>
                </div>
                <a href="#">See more</a>
            </div>

                                {/* ****************** */}

            <div className='single-item'>
                <h2>Top categories in Kitchen appliances</h2>
                <div className='single-item-images single-2'>
                    <div>
                        <img src="./images/kitchen 1.jpg" alt="" />
                        <p>Cooker</p>
                    </div>
                    <div className='single-three'>
                    <div>
                        <img src="./images/kitchen 2.jpg" alt="" />
                        <p>Coffee</p>
                    </div>
                    <div>
                        <img src="./images/kitchen 3.jpg" alt="" />
                        <p>Pots and Pans</p>
                    </div>
                    <div>
                        <img src="./images/kitchen 4.jpg" alt="" />
                        <p>Kettles</p>
                    </div>
                    </div>
                </div>
                <a href="#">Explore all products in Kitchen</a>
            </div>

            {/* ****************** */}

            <div className='single-item'>
                <h2>Refresh your space</h2>
                <div className='single-item-images'>
                    <div>
                        <img src="./images/space1.jpg" alt="" />
                        <p>Dining</p>
                    </div>
                    <div>
                        <img src="./images/space2.jpg" alt="" />
                        <p>Home</p>
                    </div>
                    <div>
                        <img src="./images/space3.jpg" alt="" />
                        <p>Kitchen</p>
                    </div>
                    <div>
                        <img src="./images/space4.jpg" alt="" />
                        <p>Health and Beauty</p>
                    </div>
                </div>
                <a href="#">See more</a>
            </div>

                         {/* ****************** */}

            <div className='single-item'>
                <h2>Gaming accessories</h2>
                <div className='single-item-images single-image'>
                <img src="./images/game.jpg" alt="" />
                </div>
                <a href="#">Shop gaming</a>
            </div>

                         {/* ****************** */}

             <div className='single-item'>
                <h2>Toys under $25</h2>
                <div className='single-item-images single-image'>
                <img src="./images/toys.jpg" alt="" />
                </div>
                <a href="#">Shop now</a>
            </div>
        </div>

    </div>
    </>
  )
}

export default HeroSection