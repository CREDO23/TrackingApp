import React from 'react';
import'./style.css';
import Navbar from '../navbar/Navbar';
import Foot from '../footer2/footer';

const Contact =()=>{
    return(
        <div>

            <div id='contact1'>
            <Navbar></Navbar>
            </div>
           <div  className='input31'>
           <h2 className='contacttitle'>NOUS CONTACTEZ</h2>
           </div>
            
          <div className='input3'>
            <input type='text' name='text' className='in1' placeholder=' Nom'/>
            <input type='text' name='text' className='in2' placeholder=' Postnom'/>
            <br></br>
            <input type='mail' name='text' className='input2' placeholder=' mail'/><br></br>
            <textarea type='text' className='texta' placeholder='Votre message'></textarea>
          </div>
           <button className='contactbutton'>ENVOYER</button>

           <div className='contactfoot'>
            <Foot></Foot>
           </div>
        </div>
    )
}

export default Contact;