import React from 'react';
import './style.css';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Foot = () => {
    return (
      <div className='fc'>
        <div className='fcont'>
             <div className='foot2'>
                <h2></h2>
                <p>DRC Goma Quartier Himbi Avenue Goma, 121 </p>
                <p >+243975544082 /+243975544082 </p>
                <p>bagandagloire22@gmail.com</p>
             </div>
             <div className='foot2'>
                <h2></h2>
                <p>lutte contre la corruption </p>
                <p >entrepreuneriat </p>
                <p>logistique</p>
             </div>
             <div className='foot2'>
                <h2></h2>
                <p>assurance automobile </p>
                <p >expedition des lettres </p>
                <p>commissionnaire</p>
             </div>
        </div>
        <div className='mid2'>
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

export default Foot;