import React from 'react'
import './Test.css'

import {motion} from 'framer-motion'
import {Pagination} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'

const Test = () => {

  const list = [
    {
    img:'https://media.istockphoto.com/id/643902794/photo/modern-man-in-winter-coat.jpg?b=1&s=170667a&w=0&k=20&c=w7W2DJi-MwAVRfnCPPC2PRPhbzdMjnK_Wbio4dkjqL4=',
    name:'James Corey'
  },
  {
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/640px-Outdoors-man-portrait_%28cropped%29.jpg',
    name:'Ramesh Sharma'
  },
  {
    img:'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
    name:'Hannah Jackson'
  },
  {
    img:'https://i.guim.co.uk/img/media/d1a8023b09fb6f46fafed7566e742e4eb5fc0c43/0_1889_3648_2189/master/3648.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9f94239a31f81093d07216f42caf900e',
    name:'Bob Howard'
  },
  {
    img:'https://st3.depositphotos.com/4487369/13149/i/600/depositphotos_131491354-stock-photo-portrait-of-beautiful-girl-on.jpg',
    name:'Sofi Anna'
  }]
  return (
    <motion.div transition={{duration:.5}} initial={{y:'35%'}}
    whileInView={{y:'0%'}}>
    <div className="t-hdd">
      <span>Testimonials</span>
      <span>What our Happy Customers have to say about us</span>
    </div>
    <div className="t-wrapper">

      <Swiper modules={[Pagination]} pagination={{clickable:true}} className='t-swiper'>
        {
          list.map((i,a)=> {
            return(
              <SwiperSlide className='t-card'  id={a}>

                <img src={i.img} />
                <span>{i.name}</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed reiciendis in omnis. Nulla voluptatum fuga impedit odio molestiae nemo voluptate ullam et, mollitia dicta provident numquam corporis architecto illum quae!</span>

              </SwiperSlide>
            )
          })
        }
      </Swiper>
      
    </div>
    </motion.div>
  )
}

export default Test