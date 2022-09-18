import React from 'react';
import './style.css';

const User=()=>{
    return(
        <div>
        <div className='user1'>
            <div className='user2'>
                <div  className='user6'>
                <h2>Are You A Sender?</h2>
                <p>verifier vos transfert en cliquant sur bouton</p>
                </div>
                <button className='user4'>CHECK NOW</button>
            </div>
            <div className='user3'>
                <div className='user6'>
                <h2>Are You A Shipper?</h2>
                <p>verifier vos transfert en cliquant sur bouton</p>
                </div>
                <button  className='user5'>CHECK NOW</button>
            </div>
        </div>
        </div>
    )
}

export default User;