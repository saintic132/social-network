import React from "react";
import {NavLink} from "react-router-dom";
import s from './DialogsName.module.css'

type DialogsNameType = {
    id: number
    name: string
}

function DialogsName(props: DialogsNameType) {

    const path = '/dialogs/' + props.id

    return (
        <div className={s.names}>
            <div className={s.names__columns}>
                    <NavLink to={path}>
                        <div className={s.names__text}>
                            {props.name}
                        </div>
                    </NavLink>
            </div>
        </div>
    )
}

export default DialogsName;