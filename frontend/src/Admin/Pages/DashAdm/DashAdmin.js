import React from 'react';

import NavAdmin from '../../Composants/NavBar/NavAdmin';
import MenuAdmin from '../../Composants/Menu/MenuAdmin';
import './DashBoard.css'


const DashAdmin = () => {
    return (
        <div className='Admin_Container'>
            <MenuAdmin />

            <div className='Admin'>
                <NavAdmin />
                <div className="containerAdmin">
                </div>
            </div>
        </div>
    );
};

export default DashAdmin;