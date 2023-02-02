import React from 'react'
import './Products.css'
import {motion} from 'framer-motion'
const Products = () =>

{
    const List = [
        {
            img:'https://i.etsystatic.com/8246513/r/il/3cde37/2411668467/il_794xN.2411668467_ryn3.jpg',
            name:'ROSE',
            des:'ROSE essential oil is one of the most beneficial, apart from giving.'
        },
        {
            img:'https://i.etsystatic.com/8246513/r/il/e419c5/2364067100/il_794xN.2364067100_12wi.jpg',
            name:'CHAMOMILE',
            des:'The Chamomile essential oil has a myriad of uses it can be used'
        },
        {
            img:'https://i.etsystatic.com/8246513/r/il/3d39ad/2364089238/il_794xN.2364089238_9nys.jpg',
            name:'VOILET',
            des:'VIOLET In modern aromatherapy the essential oil of violet is used for its calming and.'
        },
        {
            img:'https://i.etsystatic.com/8246513/r/il/294e63/4395018699/il_794xN.4395018699_c0mr.jpg',
            name:'MYRRH',
            des:"Myrrh essential oil is used for a variety of purposes,it is often used in aromatherapy and healing."
        },
        {
            img:'https://i.etsystatic.com/8246513/r/il/4fd0a1/4355027040/il_794xN.4355027040_sqpf.jpg',
            name:'LEMON',
            des:'The citrus lemon essential oil has a myriad of uses. It can be used as an all-purpose cleaner'
        },
        {
            img:'https://i.etsystatic.com/8246513/r/il/523595/4395003735/il_794xN.4395003735_wyrn.jpg',
            name:'FRANKINCENSE',
            des:'Frankincense is an aromatic resin obtained from the sap of various trees. It has a sweet smell'
        },
        {
            img:' https://i.etsystatic.com/8246513/r/il/040e62/2364088976/il_794xN.2364088976_f9yw.jpg',
            name:'JASMINE',
            des:'JASMINE essential oil is a refreshing and romantic scent that helps body.'
        },
        {
            img:'https://i.etsystatic.com/8246513/r/il/ed1b3e/2411650655/il_794xN.2411650655_3rka.jpg',
            name:'LILAC',
            des:'LILAC essential oil, is an excellent healing oil thanks to its high energy vibration.'
        },
        {
            img:'https://i.etsystatic.com/8246513/r/il/5f7977/2364049244/il_794xN.2364049244_g9rc.jpg',
            name:'LAVENDER',
            des:'LAVENDER essential oil has calming and sedative properties, it is a necessity in its collection of oils.'
        }

       
    ]

  return (
   <div  id='Product' className="Products">

    <span>Our Products</span>

    <div className="P-Wrapper">

        {
            List.map((i,a)=>{

                return(
                    <motion.div id={i.name} transition={{duration:.5}} initial={{y:'15%'}}
                    whileInView={{y:'0%'}} className="card">
                        <img src={i.img} alt="" />
                        <span>{i.name}</span>
                        <span>{i.des.slice(0,55)}</span>
                        <span>$52.99</span>
                        <button className='p-button'>Buy Now</button>

                        
                    </motion.div>
                )
            })
        }

    </div>

   </div>
  )
}

export default Products