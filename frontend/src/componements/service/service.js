import React from 'react';
import User from '../user/user';
import { FaChalkboardTeacher, FaHome, FaStopwatch, FaUmbrella } from 'react-icons/fa';
import'./style.css';

const Sevice =()=>{
    return(
        <div className='chemin2'>
           
           <User></User>
           
            <div className='centre3'>
              <h2 className='centre4'>CARACTERE</h2>
              <div className='centre5'>
            
                
                    <div className='fa22'>
                        <FaHome className='fa1'/>
                        <h5>100% safe Delibery</h5>
                        <p>Nous vous assurons une livraison en toute securité et sans casse</p>
                    </div>
                        
                    <div  className='fa22'>
                        <FaUmbrella className='fa1'/>
                        <h5>Weather Insuarance</h5>
                        <p>Nous vous rassurons une dans un bref delais </p>
                   </div>
                  
                    <div  className='fa22'>
                       <FaChalkboardTeacher className='fa1'/>
                       <h5>Support For You Vehicles</h5>
                       <p>Nous assurons aussi la protection de vos marchandise du depart à l'arriver</p>
                   </div>
                     
                    

                     <div  className='fa22'>
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