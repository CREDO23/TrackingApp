import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuAdmin.css'

const MenuAdmin = () => {
    const DataMenuAdmin = [
        {
            link: "/Admin/Dash",
            icone: "icone icofont-chart-bar-graph",
            label: "DashBoard"
        },

        {
            link: "/Admin/AjoutAgent",
            icone: "icone icofont-support",
            label: "Ajout Agent"
        },

        {
            link: "/Admin/AjoutMobil",
            icone: "icone icofont-car-alt-4",
            label: "Ajout Mobil"
        },

        {
            link: "/Admin/AjoutPoste",
            icone: "icone icofont-institution",
            label: "Ajout Poste"
        },


        {
            link: "/Admin/Historique",
            icone: "icone icofont-history",
            label: "Historique"
        },

        {
            link: "/Admin/Tracking",
            icone: "icone icofont-location-pin",
            label: "Tracking"
        }
    ]

    const [Actived, setActived] = useState(0);
    return (
        <div className="MenuAdmin">
            <div className='Border_menuAdmin'>
                {DataMenuAdmin.map((data, index) => {
                    return (
                        <NavLink
                            exact='true'
                            onClick={() => setActived(index)}
                            className='container_menuAdmin'
                            to={data.link} >
                            <i className={data.icone}></i>
                            <span>{data.label}</span>
                        </NavLink>
                    )
                })
                }
            </div>
            <div className='Rs_icones'>
                <i className='icone icofont-twitter'></i>
                <i className='icone icofont-telegram'></i>
                <i className='icone icofont-facebook'></i>
                <i className='icone icofont-linkedin'></i>
            </div>
        </div >
    );
};

export default MenuAdmin;