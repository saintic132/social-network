import React from "react";
import s from './Users.module.css'
import {UsersType} from "../../../../redux/users-reducer";
import axios from "axios";
import imgPhoto from '../../../../assets/img/no-avatar.png'

type UsersPropsType = {
    users: UsersType[]
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: UsersType[]) => void
}

function Users(props: UsersPropsType) {

    const getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }


    return (
        <div>
            <div>
                <button onClick={getUsers}>Get users</button>
            </div>
            <div className={s.users}>

                {
                    props.users.map(el => {

                        return (
                            <div
                                key={el.id}
                                className={s.users__body}>
                                <div className={s.users__location}>
                                    <div className={s.users__country}>
                                        <div className={s.users__country_title}>
                                            Country:
                                        </div>
                                        <div className={s.users__country_name}>
                                            {'el.location.country'}
                                        </div>
                                    </div>
                                    <div className={s.users__city}>
                                        <div className={s.users__city_title}>
                                            City:
                                        </div>
                                        <div className={s.users__city_name}>
                                            {'el.location.city'}
                                        </div>
                                    </div>
                                </div>
                                <div className={s.users__profile}>
                                    <div className={s.users__avatar}>
                                        <img src={el.photos.small ? el.photos.small : imgPhoto} alt="avatar"/>
                                    </div>
                                    <div className={s.users__info}>
                                        <div className={s.users__name}>
                                            <div className={s.users__name_title}>
                                                Name:
                                            </div>
                                            <div className={s.users__name_name}>
                                                {el.name}
                                            </div>
                                        </div>
                                        <div className={s.users__status}>
                                            <div className={s.users__status_title}>
                                                Status:
                                            </div>
                                            <div className={s.users__status_name}>
                                                {el.status}
                                            </div>
                                        </div>
                                        <div className={s.users__button}>
                                            {el.followed
                                                ? <button onClick={() => props.unfollow(el.id)}>Unfollow</button>
                                                : <button onClick={() => props.follow(el.id)}>Follow</button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}

export default Users