import React from 'react';
import fonts from '../styles/fontstyle.module.css';
import styles from '../styles/content.module.css';
import GrayButton from '../GrayButton';

const CardItem = (props) => {
    return(
        <div className={styles.card_item}>
            <div className="h-50">
                <img src={props.img} width="100%" height="100%" className={styles.card_img}/>
            </div>
            <div className={`h-50 py-4 px-3 d-flex flex-column align-items-center`}>
                <p className={`${fonts.raleway_18} text-center`}>
                    {props.title}
                </p>
                <p className={`${fonts.lato} text-center`}>
                    {props.content}
                </p>
                <GrayButton height="30px" width="100px" txt="Zjistit vice"/>
            </div>
        </div>
    );
}

export default CardItem;