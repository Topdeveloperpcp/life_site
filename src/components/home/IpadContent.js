import React from 'react';
import fonts from '../styles/fontstyle.module.css';
import styles from '../styles/ipadcontent.module.css';

const IpadContent = (props) => {
    return(
        <div>
            <div className={`${fonts.ralewaybold_30} pb-3`}>
                {props.title}
            </div>
            <div className={fonts.raleway_22}>
                {props.subTitle}
            </div>
            <div className={styles.divider} />
            <p className={`${fonts.lato} pt-5`}>
                {props.contentFirst}
            </p>
            <p className={`${fonts.lato} pt-3`}>
                {props.contentSecond}
            </p>
            <div className={`${styles.button_ipad} ${fonts.ralewaybold_16} mt-5`}>
                {props.btnName}
            </div>
        </div>
    )
}

export default IpadContent;