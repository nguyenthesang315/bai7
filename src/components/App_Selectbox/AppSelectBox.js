import React from 'react'
import './AppSelectBox.scss'
export default function AppSelectBox(props) {
    return (
        <div>
            <div className="selectbox">
                <div className="selecbox__elements">
                    <img src={props.item.img}></img>
                    <p><b>{props.item.name}</b></p>
                </div>
            </div>
        </div>
    )
}
