import React, { useState } from 'react';
import './AppHeader.scss'
import img from '../../assets/images/avt.jpg'
import AppHeaderAcount from '../App_header-Acount/AppHeaderAcount';
export default function AppHeader(props) {
    // const sendData = () =>{
    //     props.callback(show)
    // }
    const [show, setShow] = useState(true);
    const callbackFuction=()=>{
        setShow(!show)
      };
    props.callback(show);
    // Input
    const [input, setInput] = useState('')
    // Acount
    const [acount, setAcount] = useState(true);
    const showAcount=() =>{
      setAcount(!acount)
    }
    const showacount = acount === true ?  'headerAcount headerAcount--hide' : 'headerAcount'
    return (
        <div>
            <div className="header">
                <div className="header__cover">
                    <div className="header__cover-search">
                        <input placeholder="Tìm kiếm ..." onChange={event => setInput(event.target.value)}></input>
                        <label>{input}</label>
                    </div>
                    <div className="header__cover-button">
                        <button onClick={callbackFuction}>Change BG color</button>
                        <div className={showacount}>
                                <AppHeaderAcount/>
                        </div> 
                        <img src={img} onClick={showAcount}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
