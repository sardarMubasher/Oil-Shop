import React from 'react'
import './Foot.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter }  from 'react-icons/fa';
const Footer = () => {
  return (
   <>
   <div id='Contact' className="footer">

    <div className="f-fir">

        <span>Al-Shakir</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi modi ad distinctio commodi cupiditate repellendus aliquid consequuntur, quidem eos.</span>
        <div className="ft-icons">
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            <FaLinkedin/>

        </div>

    </div>
    <div className="f-sec">

      <div className="f-list">
        <span>Features</span>
        <span>Pricing</span>
        <span>Login</span>
        <span>Signup</span>
      </div>

      <div className="f-list">
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
        <span>Legal Notice</span>
     
      </div>
      <div className="f-list">
        <span>Feedback</span>
        <span>Privacy Policy</span>
        <span>Legal Notice</span>
     
      </div>

    </div>
    <div className="f-box">

      <div className="s-head">
              <span>Subscribe Newsletter</span>
              <span>financial transaction remotely using a mobile</span>
      </div>
      <div className="f-em">
        <input placeholder='Enter your email' type="text" />
        <button >
          Get Start
        </button>
        
      </div>

    </div>
   </div>

   </>
  )
}

export default Footer