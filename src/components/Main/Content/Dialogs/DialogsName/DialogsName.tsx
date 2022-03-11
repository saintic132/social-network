import React from "react";
import {NavLink} from "react-router-dom";
import s from './DialogsName.module.css'
import {DialogsNameType} from "../../../../../redux/dialog-reducer";

type NamesType = {
    dialogsName: DialogsNameType[]
}

function DialogsName(props: NamesType) {


    return (
        <div className={s.names}>

            {
                props.dialogsName.map(el => {

                    const path = '/dialogs/' + el.id

                    return (
                        <div className={s.names__columns}>
                            <NavLink to={path}>
                                <div className={s.names__text}>
                                    {el.name}
                                </div>
                            </NavLink>
                        </div>

                    )
                })
            }
        </div>

    )


}

export default DialogsName;