import React from 'react';
import s from "./MainLogo.module.css";

function MainLogo() {
    return (
                    <div className={s.content__img}>
                        <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-QTVBjIG24mzUfgfzW7DGlqKrYsBb209fA&usqp=CAU"
                        alt="mainImgLogo"/>
                    </div>
    )
}

export default MainLogo;