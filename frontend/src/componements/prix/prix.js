import React from 'react';
import './style.css';


const Prix = ()=>{
    return(
        <div className='service1'>
             <h3 className='servicetitle'>OBTENIR UNE COTATION</h3>
             <p className='best'>FOR BEST PRICE AND DEVICE</p>
        <div className='service2'>
            <div className='service3'>
                <input type='text' nom='text' className='vrai' placeholder=' nom'></input>
				<br></br>
				<input type='text' nom='email'  className='vrai' placeholder=' post nom'></input>
				<br></br>
                <input type='mail' nom='email' className='vrai' placeholder=' mail'></input>
            </div>
            <div className='service3'>
                <input type='text' nom='text' className='vrai' placeholder=' types de fret'></input>
				<br></br>
				<input type='text' nom='email' className='vrai' placeholder=' poids'></input>
				<br></br>
                <input type='text' nom='email'  className='vrai' placeholder=' destination'></input>
            </div>
        </div>
        <button id='btn11'>OBTENIR</button>

       
        </div>
    )
}

export default Prix;