import React from 'react';
import { FiMonitor } from 'react-icons/fi';
import styles from '../styles/content.module.css';
import fonts from '../styles/fontstyle.module.css';

const DarklistItem = (props) => {
    return(
        
        <div className="pl-3">
            <div className={fonts.ralewaybold_16_ccc}>
                {props.title}
            </div>
            <div className={fonts.lato_888}>
                {props.content}
            </div>
        </div>
     
    )
}

export default DarklistItem;