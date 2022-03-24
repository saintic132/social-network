import React from "react";
import s from './Preloader.module.css'
import PreloaderGif from '../../assets/img/1486.gif'

function Preloader() {
    return (
        <div className={s.img}>
            <img src={PreloaderGif} alt="preloader"/>
        </div>
    )
}

export default Preloader