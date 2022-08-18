import React from 'react';
import MenuAdmin from '../../Composants/Menu/MenuAdmin';
import NavAdmin from '../../Composants/NavBar/NavAdmin';
import '../standardStyle.css'
import './NoticationAdm.css'

const Notification = () => {
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

export default Notification;