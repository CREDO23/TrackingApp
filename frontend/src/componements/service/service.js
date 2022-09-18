import React from 'react';
import User from '../user/user';
import { FaChalkboardTeacher, FaHome, FaStopwatch, FaUmbrella } from 'react-icons/fa';
import'./style.css';

const Sevice =()=>{
    return(
        <div className='chemin2'>
            {/* <div className='enfant1'>
                <div className='enfant4'>
                <h3>THE REAL<br></br><strong>KING</strong></h3>
                <p>or</p>
                <h4>LOGISTICS TEMPLATE</h4>
                <button className='but'>PURCHASE NOW</button>
                </div>
            </div>
            <div className='enfant2'>
                <div className='enfant3'>
                <h2 className='centre'>Custom Solutions That Fit</h2>
                <h4 className='centre1'>WE OFFRER LOGISTICS THAT JUST MAKE BUSINESS SENSE</h4>
                <p className='centre2'>have you few height suggestion that you may take on board. and below you will find a couple</p>
                </div>
            </div> */}
           <User></User>
           
            <div className='centre3'>
            <h2 className='centre4'>CARACTERE</h2>
              <div className='centre5'>
            
                <div>
                    <div>

                    </div>
                    <FaHome className='fa1'/>
                    <h5>100% safe Delibery</h5>
                    <p>Nous vous assurons une livraison en toute securité et sans casse</p>
                </div>
                <div>
                    <div>

                    </div>
                   <FaUmbrella className='fa1'/>
                    <h5>Weather Insuarance</h5>
                    <p>Nous vous rassurons une dans un bref delais </p>
                </div>
                <div>
                    <div>

                    </div>
                    <FaChalkboardTeacher className='fa1'/>
                    <h5>Support For You Vehicles</h5>
                    <p>Nous assurons aussi la protection de vos marchandise du depart à l'arriver</p>
                </div>
                <div>
                    <div>

                    </div>
                    <FaStopwatch className='fa1'/>
                    <h5>Fast & On Time</h5>
                    <p>Nous possedons l'agence le plus rapide et surtout celui qui vous livre vos colis à l'heure</p>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Sevice;