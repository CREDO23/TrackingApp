import React from 'react';
import Foot from '../footer2/footer';
import Navbar from '../navbar/Navbar';
import './style.css';

const Service2 =()=>{
    return(
        <div>
            <div className='servicenav'>
                <Navbar></Navbar>
            </div>
            <div className='servicetitre1'>
            <h2 className='servicetitre'>NOS SERVICE</h2>
            </div>
           
             <div className='service11'>
				<div className='service12'>
					<img src='images/voitur1.jpg' alt='' className='pic1'/>
					<h3>fret routier</h3>
					<p>vous etes le bienvenue chex nous</p>
                    <button className='send'>SEND</button>
				</div>
				<div className='service12'>
				<img src='images/navire2.jpg' alt='' className='pic1'/>
					<h3>fret maritime</h3>
					<p>vous etes le bienvenue chex nous</p>
                    <button  className='send'>SEND</button>
				</div>
				<div className='service12'>
				<img src='images/avion2.jpg' alt='' className='pic1'/>
					<h3>fret aerien</h3>
					<p>vous etes le bienvenue chex nous</p>
                    <button  className='send'>SEND</button>
				</div>
				<div className='service12'>
				<img src='images/train1.jpg' alt='' className='pic1'/>
					<h3>fret feroviere</h3>
					<p>vous etes le bienvenue chex nous</p>
                    <button  className='send'>SEND</button>
				</div>
			</div>
			<div className='servicefooter'>
                <Foot></Foot>
            </div>
        </div>
    )
}

export default Service2;