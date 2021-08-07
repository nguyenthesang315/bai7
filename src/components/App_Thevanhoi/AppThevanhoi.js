import React from 'react'
import thevanhoiicon from '../../assets/images/icon.png';
import './AppThevanhoi.scss';
export default function AppThevanhoi(props) {
    return (
        <div>
            <div className="thevanhoi">
                <div className="thevanhoi__body">
                    <img src={props.item.img}></img>
                    <p><b>{props.item.tittle}</b></p>
                    <p>{props.item.chanel}</p>
                </div>
            </div>
        </div>
    )
}
