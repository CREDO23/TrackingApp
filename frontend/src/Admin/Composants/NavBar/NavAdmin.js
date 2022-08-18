import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavAdmin.css'


const NavAdmin = () => {
    return (
        <div className='NavBarAdmin'>
            <div className='ContainerNav'>
                <NavLink className='naviAdmin' exact='true' to="/Admin/Dash"><i className='icone icofont-ui-home'></i></NavLink>
                <NavLink className='naviAdmin' exact='true' to="/Admin/Dash"><i className='icone icofont-speech-comments'></i></NavLink>
                <NavLink className='naviAdmin' exact='true' to="/Admin/Dash"><i className='icone icofont-notification'></i></NavLink>
                <NavLink className='naviAdmin' exact='true' to="/Admin/Dash"><i className='icone icofont-settings-alt'></i></NavLink>
                <NavLink className='naviAdmin' exact='true' to="/Admin/Dash"><i className='icone icofont-database'></i></NavLink>
            </div>
        </div>
    );
};

export default NavAdmin;