import React from 'react';
import './style.css';


const Team = function(){
    return(
        <div id='centrale'>
          
      <div >
            <h2 id='first2'>NOTRE EQUIPE</h2>
        
        <div id='image'>
     <div className='team1'>
        <img src='images/roge.jpg' alt='' className='ph1'></img>
            <h2  className='h22'>Roger<br></br><span>asssocié</span></h2>
        </div>
        <div>
        <img src='images/adolph.jpg' alt='' className='ph1'></img>
            <h2  className='h22'>Adolph<br></br><span>associé</span></h2>
        </div>
        <div>
        <img src='images/ghislain.jpg' alt='' className='ph1'></img>
            <h2  className='h22'>Ghislain<br></br><span>actionnaire</span></h2>
        </div>
        <div>
        <img src='images/thiery.jpg' alt='' className='ph1'></img>
            <h2 className='h22'>Thiery<br></br><span>actionnaire</span></h2>
        </div>
            
           </div>
           </div>
          
        </div>
    );
}

export default Team;