import React from 'react'
import './Hero.css'
import {TbMessages} from 'react-icons/tb'
import {motion} from 'framer-motion'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Hero = () => {
  return (
    <>
   <div id="#" className="hero">
   
   
    <div className="h-left">

        <div 
      
         className="heading">
            <motion.span initial={{x:'-9%'}}
            whileInView={{x:'0%'}} transition={{duration:.5}} >Cinnamon</motion.span>

            <motion.span 
            initial={{x:'9%'}}  whileInView={{x:'0%'}}
            >Essential Oil</motion.span>
        </div>

        <motion.div transition={{duration:.5}} initial={{y:'-25%'}}
            whileInView={{y:'0%'}} className="detail">
            <span>Cinnamon bark oil is extracted from the inner layer of the Cinnamomum vera stem. It has a sweet and spicy smell that can be used in many home remedies. in addition to having medicinal properties. </span>
        </motion.div>

        <div className="h-b-Con">
            <motion.button transition={{duration:.5}} initial={{x:'-25%'}}
            whileInView={{x:'0%'}}   className='h-button'>
                Explore Now
            </motion.button>
            <motion.button transition={{duration:.5}} initial={{x:'25%'}}
            whileInView={{x:'0%'}}  className='h-button'>

               How to Buy
            </motion.button>
        </div>

        <motion.div transition={{duration:.5}} initial={{y:'-15%'}}
            whileInView={{y:'0%'}} className="e-det">
           
            <span >Reduces feelings of depression and sadness, strengthens against fainting and exhaustion, stimulates libido, is an effective aphrodisiac.
            </span>
        </motion.div>
    </div>
  
    <div className="h-right">
     <img src="https://i.etsystatic.com/8246513/r/il/7b3cc5/2416773327/il_794xN.2416773327_cb63.jpg"/>

    </div>
   </div>

   <motion.div transition={{duration:.1}} initial={{y:'15%'}}
            whileInView={{y:'0%'}} className="banner">
    <span>
        What Does CINNAMON do to Your face?
    </span>
    <span>
    Each oil comes in 10ml ( 0.33 fl/oz ) amber brown bottles with a dropper. Ideal for diffusers. Place a few drops in your bath or your body. .100% money-back guaranteed.
    </span>

    <span>
        <AiOutlineArrowRight size={30} color='white'/>
    </span>
   </motion.div>
   </>
  )
}

export default Hero