import React from 'react';
import styles from '../styles/figure.module.css';
import fonts from '../styles/fontstyle.module.css';


const Figure = (props) => {
    return(
        <div className={styles.figure_container}>
            <img src={props.img} />
            <div className={`${fonts.raleway_18} pb-4`}>
                <p>{props.title}</p>
            </div>
            <div className={fonts.lato}>
                <p className="text-center">{props.txt}</p>
            </div>
        </div>
    )
}

export default Figure;