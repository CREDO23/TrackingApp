import React from 'react';
import './style.css';

const Tracker = () =>{
    return(
        <div>
        <div className='trc'>
           
          
            {/* <h1 id='text3'> Tracer votre colis</h1> */}
            <div className='champs'>
               
				<input type='text' nom='text' id='text' className='bon' placeholder=' numero colis'></input>
				<br></br>
				<input type='mail' nom='email' id='email' className='bon' placeholder=' votre email'></input>
				<br></br>
                <input type='submit' nom='submit' id='btn1'className='bon' value='TRACKER'></input>
			</div>
        
       
        
        </div>
        </div>
    )
}

export default Tracker;