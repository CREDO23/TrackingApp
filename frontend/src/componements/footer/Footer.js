import React from 'react';
import './style.css'

const Footer = () => {
    return (
      <div>
        <div className='fcontenair'>
             <div className='foot'>
                <h2 className='one'>HEAD DEVICE</h2>
                <p>DRC Goma Quartier Himbi Avenue Goma, 121 </p>
                <p >+243975544082 /+243975544082 </p>
                <p>bagandagloire22@gmail.com</p>
             </div>
             <div className='foot'>
                <h2  className='one'>HEAD DEVICE</h2>
                <p>DRC Goma Quartier Himbi Avenue Goma, 121 </p>
                <p >+243975544082 /+243975544082 </p>
                <p>bagandagloire22@gmail.com</p>
             </div>
             <div className='foot'>
                <h2  className='one'>HEAD DEVICE</h2>
                <p>DRC Goma Quartier Himbi Avenue Goma, 121 </p>
                <p >+243975544082 /+243975544082 </p>
                <p>bagandagloire22@gmail.com</p>
             </div>
        </div>
        <div className='footcontact'>
        <div className='input3'>
         <h2 className='foottitre'>NOUS CONTACTEZ</h2>
            <input type='text' name='text' className='in1' placeholder='nom'/>
            <input type='text' name='text' className='in2' placeholder='postnom'/>
            <br></br>
            <input type='mail' name='text' className='input2' placeholder='mail'/><br></br>
            <textarea type='text' placeholder='Votre message'></textarea>
          </div>
           <button className='contactbutton'>ENVOYER</button>
           </div>
        </div>
    );
};

export default Footer;