import React from 'react';
import styled from 'styled-components';
import fonts from './styles/fontstyle.module.css';

const BtnDiv = styled.div`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: #444;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
        cursor: pointer;
    }
`

const GrayButton = (props) => {
    return(
        <BtnDiv width={props.width} height={props.height}>
            <div className={fonts.lato_white}>
                {props.txt}
            </div>
        </BtnDiv>
    )
}

export default GrayButton;