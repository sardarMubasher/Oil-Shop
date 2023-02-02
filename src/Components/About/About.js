import React from 'react'
import './About.css'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <>
    <div id="About" className="About">

        <div className="pic">

            <img src="https://ugro.com/wp-content/uploads/2020/06/AdobeStock_243690485-scaled.jpeg" alt="" />

        </div>
        <motion.div transition={{duration:.5}} initial={{y:'25%'}}
            whileInView={{y:'0%'}} className="txt">

            <span>About Us</span>

            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis tempora debitis aliquam, eos quae iure in cumque minus ipsum, esse enim excepturi nulla mollitia quia velit fuga sint quibusdam, commodi culpa quos deserunt. Sapiente beatae eius unde magnam nulla sit vero dolorum. Alias laboriosam delectus veritatis. Eaque fugiat et illo.</span>

            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam provident officia rem animi corrupti, facilis expedita porro rerum molestias ratione eligendi unde dolorem nemo esse nihil quis dignissimos eum. excepturi nulla mollitia quia velit fuga sint quibusdam.</span>

            <button className='p-button btn'>
                Read More
            </button>

        </motion.div>
    </div>
  <motion.div transition={{duration:.1}} initial={{y:'35%'}}
            whileInView={{y:'0%'}} className="hdd">
  <span >Our Partners</span>
  </motion.div>
    <motion.div transition={{duration:.1}} initial={{y:'35%'}}
            whileInView={{y:'0%'}} className="Partners">

        <img src="https://www.profitwell.com/hs-fs/hubfs/ProfitWell/Images/ProfitWellLogo_Large.png?width=5204&height=1246&name=ProfitWellLogo_Large.png" alt="" />

        <img src="https://www.shipbob.com/wp-content/uploads/2020/09/ShipBob-logo-square.png" alt="" />

        <img src="https://searchvectorlogo.com/wp-content/uploads/2020/11/demio-logo-vector.png" alt="" />

        <img src="https://blog.fastwork.co/wp-content/uploads/2017/07/cropped-AW_Fastwork_Logo-01.png" alt="" />

        <img src="https://1000logos.net/wp-content/uploads/2022/02/AfterPay-Logo.png" alt="" />
    </motion.div>
    </>
  )
}

export default About