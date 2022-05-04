import React, {useEffect, useState} from "react";
import s from './Users.module.css'
import imgPhoto from '../../../../assets/img/no-avatar.png'
import {NavLink} from "react-router-dom";
import {
    followUserThunk,
    InitialUserStateType,
    setUsersThunk,
    unFollowUserThunk,
} from "../../../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {ReduxStateType} from "../../../../redux/redux-store";
import Preloader from "../../../../common/Preloader/Preloader";


function Users() {

    let usersState = useSelector<ReduxStateType, InitialUserStateType>(state => state.usersPage)
    let dispatch = useDispatch()

    let [idFollowUser, setIdFollowUser] = useState<number>();
    let [idUnFollowUser, setUnIdFollowUser] = useState<number>();
    let [currentPage, setCurrentPage] = useState<number>(1);

    const pagesRender = Math.ceil(usersState.allUsers / usersState.usersCountOnPage)
    let count = []
    for (let i = 1; i <= pagesRender; i++) {
        count.push(i)
    }

    useEffect(() => {
        if (currentPage)
            dispatch(setUsersThunk(currentPage))
    }, [dispatch, currentPage])

    useEffect(() => {
        if (idFollowUser)
            dispatch(followUserThunk(idFollowUser))
    }, [dispatch, idFollowUser])

    useEffect(() => {
        if (idUnFollowUser)
            dispatch(unFollowUserThunk(idUnFollowUser))
    }, [dispatch, idUnFollowUser])


    return (
        usersState.isFetching
            ? <Preloader/>
            :
            <div className={s.users}>
                <div className={s.users__container}>

                    {
                        usersState.users.map(el => {

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
                                                        disabled={usersState.disableFollowButton.some(userId => userId === el.id)}
                                                        onClick={() => setUnIdFollowUser(el.id)}>Unfollow</button>
                                                    : <button
                                                        disabled={usersState.disableFollowButton.some(userId => userId === el.id)}
                                                        onClick={() => setIdFollowUser(el.id)}>Follow</button>}
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
                                        className={usersState.currentPageNumber === el ? s.users__page_bold : ''}
                                        onClick={() => setCurrentPage(el)}
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