import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {

    const settings={
        dots: true,
        infinity: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinity:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis deleniti cum at 
            reprehenderit iure suscipit repellat reiciendis similique et, recusandae modi minima incidunt? 
            Repudiandae commodi architecto, assumenda iure quos nobis!</p>

            <div className="d-flex align-item-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' />
                <div>
                    <h5 className="mb-0 mt-3">John Cna</h5>
                    <p>Customer</p>
                </div>

            </div>
        </div>
        <div className="testimonial py-4 px-3">
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis deleniti cum at 
            reprehenderit iure suscipit repellat reiciendis similique et, recusandae modi minima incidunt? 
            Repudiandae commodi architecto, assumenda iure quos nobis!</p>

            <div className="d-flex align-item-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' />
                <div>
                    <h5 className="mb-0 mt-3">Liya ven</h5>
                    <p>Customer</p>
                </div>

            </div>
        </div>
        <div className="testimonial py-4 px-3">
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis deleniti cum at 
            reprehenderit iure suscipit repellat reiciendis similique et, recusandae modi minima incidunt? 
            Repudiandae commodi architecto, assumenda iure quos nobis!</p>

            <div className="d-flex align-item-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' />
                <div>
                    <h5 className="mb-0 mt-3">Rey Gin</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis deleniti cum at 
            reprehenderit iure suscipit repellat reiciendis similique et, recusandae modi minima incidunt? 
            Repudiandae commodi architecto, assumenda iure quos nobis!</p>

            <div className="d-flex align-item-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' />
                <div>
                    <h5 className="mb-0 mt-3">Liya ven</h5>
                    <p>Customer</p>
                </div>

            </div>
        </div>
    </Slider>
  )
}

export default Testimonial