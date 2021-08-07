import React from 'react'
import './AppHeaderAcount.scss'
import Acount from '../../assets/images/avt.jpg'

export default function AppHeaderAcount() {
    return (
        <div>
            <div className="headerAcount">
                <div className="headerAcount__cover">
                    <div className="headerAcount__cover-header">
                        <div className="headerAcount__cover-header-img">
                            <img src={Acount}></img>
                        </div>
                        <div className="headerAcount__cover-header-name">
                            <p><b>Sang Can</b></p>
                            <p>Quan ly tai khoan</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="headerAcount__cover-header-body">
                        <p>Kênh của bạn</p>
                        <p>Giao dịch mua và gói hội viên</p>
                        <p>Youtube Studio</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
