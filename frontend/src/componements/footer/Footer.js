import React from 'react';
import './style.css'
import { FaWhatsapp, FaFacebook, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
    return (
      <div className='footcent'>
        <div className='fcontenair'>
             <div className='foot'>
                <h2 className='one'></h2>
                <p>DRC Goma Quartier Himbi Avenue Goma, 121 </p>
                <p >+243975544082 /+243975544082 </p>
                <p>bagandagloire22@gmail.com</p>
             </div>
             <div className='foot'>
                <h2  className='one'></h2>
                <p>lutte contre la corruption </p>
                <p >entrepreuneriat </p>
                <p>logistique</p>
             </div>
             <div className='foot'>
                <h2  className='one'></h2>
                <p>assurance automobile </p>
                <p >expedition des lettres </p>
                <p>commissionnaire</p>
             </div>
        </div>
        <div className='footcontact'>
        <div className='inputf'>
         <h2 className='foottitre'>NOUS CONTACTEZ</h2>
            <input type='text' name='text' className='in' placeholder='nom'/>
            <input type='text' name='text' className='in' placeholder='postnom'/>
            <input type='mail' name='text' className='in' placeholder='mail'/><br></br>
            <textarea type='text' className='textarea1' placeholder='Votre message'></textarea>
          </div>
           <button className='fbutton'>ENVOYER</button>
           </div>

           <div className='mid1'>
            <p>copyright 2022</p>
           <ul id='mid'>
				<li>
					<a className='f' href='watsp.com'><FaWhatsapp/></a>
				</li>
				<li>
					<a className='f' href='ffacebook.com'><FaFacebook/></a>
				</li>
				<li>
					<a className='f' href='mail.com'><FaMailBulk/></a>
				</li>
				<li>
					<a className='f' href='linked.com'><FaLinkedin/></a>
				</li>
				
			</ul>
           </div>
        </div>
    );
};

export default Footer;