import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialogs() {
    return (
        <div>
            <div className={s.headerNameDialogs}>
                <h2>Dialogs</h2>
            </div>
            <div className={s.headerForNameAndMessages}>
                <div className={s.headerName}>
                    Name:
                    <div className={s.names}>
                        <div>
                            <NavLink to='/dialogs/1'>Masha</NavLink>
                        </div>

                        <div>
                            Pasha
                        </div>

                        <div>
                            Petya
                        </div>
                    </div>
                </div>
                <div>
                    Messages:
                    <div className={s.names}>
                        <div>
                            Hello, how are u ?
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs