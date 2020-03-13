import React from 'react';
import '../styles/fonts.scss';
import '../styles/home/ipadcontent.scss';

const IpadContent = (props) => {
    return(
        <div>
            <div className="ralewaybold_30 pb-3">
                {props.title}
            </div>
            <div className="raleway_22">
                {props.subTitle}
            </div>
            <div className="divider" />
            <p className="lato pt-5">
                {props.contentFirst}
            </p>
            <p className="lato pt-3">
                {props.contentSecond}
            </p>
            <div className="button_ipad ralewaybold_16 mt-5">
                {props.btnName}
            </div>
        </div>
    )
}

export default IpadContent;