import React from 'react';
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

const Loading = () => {
    return (
        <div className='loading'>
             <FontAwesomeIcon className='load' icon={faSpinner} spin size="5x"/>
        </div>
    );
};

export default Loading;