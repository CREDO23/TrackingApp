import React from 'react';
import Foot from '../footer2/footer';
import Navbar from '../navbar/Navbar';
import './style.css';


const About2 = () =>{
    return(
        <div >
          <div className='aboutnav'>
            <Navbar></Navbar>
          </div>
          <div  className='about11'>
           <h2 className='about2title'>A PROPOS</h2>
           </div>
           
               <div className='propos'>
                 <p><img src='images/photo1.jpg' alt='' className='ph3' /></p>
                <div className='mypara1'>
                   
                    <div className='two'>
                        <h3>first</h3>
                        <p>Nous somme la solution à tous vos problemes lier au transport de fret
                            par tous le voie.
                        </p>
                    </div>
                    <div  className='two'>
                        <h3>second</h3>
                        <p>Nous assurons la sécurité de vos bien du depart jusqu'à l'arriver.
                        </p>
                    </div>
                    <div  className='two'>
                        <h3>third</h3>
                        <p>Avec nous vous étes rassurer d'un bon service.
                        </p>
                    </div>
                    </div>
                    <div className='about2foot'>
                       <Foot></Foot>
                    </div>
            </div>
            
        </div>
       
    
    )
}

export default About2;