import React from "react";
import s from './Users.module.css'
import imgPhoto from '../../../../assets/img/no-avatar.png'
import {NavLink} from "react-router-dom";
import {UsersType} from "../../../../redux/users-reducer";

type UsersPropsType = {
    users: UsersType[]
    allUsers: number,
    usersCountOnPage: number,
    currentPageNumber: number
    isFetching: boolean
    disableFollowButton: number[]
    setCurrentPage: (page: number) => void
    setUserFollow: (id: number) => void
    setUserUnFollow: (id: number) => void
}

function Users(props: UsersPropsType) {

    const pagesRender = Math.ceil(props.allUsers / props.usersCountOnPage)
    let count = []
    for (let i = 1; i <= pagesRender; i++) {
        count.push(i)
    }

    return (
        <div className={s.users}>
            <div className={s.users__container}>

                {
                    props.users.map(el => {

                        return (
                            <div
                                key={el.id}
                                className={s.users__body}>
                                <div className={s.users__profile}>

                                        <div className={s.users__avatar}>
                                            <NavLink to={'/profile/' + el.id}>
                                            <img src={el.photos.small ? el.photos.small : imgPhoto} alt="avatar"/>
                                            </NavLink>
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
                                                ? <button
                                                    disabled={props.disableFollowButton.some(userId => userId === el.id)}
                                                    onClick={() => props.setUserUnFollow(el.id)}>Unfollow</button>
                                                : <button
                                                    disabled={props.disableFollowButton.some(userId => userId === el.id)}
                                                    onClick={() => props.setUserFollow(el.id)}>Follow</button>}
                                        </div>
                                    </div>
                                </div>
                                <div className={s.users__location}>
                                    <div className={s.users__country}>
                                        <div className={s.users__country_title}>
                                            Country:
                                        </div>
                                        <div className={s.users__country_name}>
                                            {'location.country'}
                                        </div>
                                    </div>
                                    <div className={s.users__city}>
                                        <div className={s.users__city_title}>
                                            City:
                                        </div>
                                        <div className={s.users__city_name}>
                                            {'location.city'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className={s.users__pages}>
                    <span className={s.users__count}>
                        {
                            count.map(el => {
                                return (
                                    <span
                                        key={el}
                                        className={props.currentPageNumber === el ? s.users__page_bold : ''}
                                        onClick={() => props.setCurrentPage(el)}
                                    >
                                        {el}
                                    </span>
                                )
                            })
                        }
                    </span>
            </div>
        </div>

    )
}

export default Users