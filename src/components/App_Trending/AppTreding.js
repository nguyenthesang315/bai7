import React from 'react'
import './AppTrending.scss'

export default function AppTrending(props) {
    return (
        <div>
            <div className="Apptrending">
                <div className="Apptrending__img">
                    <img src={props.item.img}></img>
                </div>
                <div className="Apptrendingh__body">
                    <div className="Apptrending__body-tittle">
                        <h3> {props.item.tittle} </h3>
                    </div>
                    <div className="Apptrending__body-infor">
                        <p>{props.item.chanel} </p>
                        <p> {props.item.view} </p>
                        <p> {props.item.time} </p>
                    </div>
                    <div className="Apptrending__body-subscribe">
                        <p>{props.item.sub}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
