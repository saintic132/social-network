import React, {useEffect} from 'react';
import s from "./Profile.module.css";
import avatar from '../../../../assets/img/no-avatar.png'
import facebookLogo from '../../../../assets/img/social/facebook.png'
import websiteLogo from '../../../../assets/img/social/web.png'
import vkLogo from '../../../../assets/img/social/vk.png'
import twitterLogo from '../../../../assets/img/social/twitter.png'
import instagramLogo from '../../../../assets/img/social/instagram.png'
import youtubeLogo from '../../../../assets/img/social/youtube.png'
import githubLogo from '../../../../assets/img/social/gh.png'
import mailLink from '../../../../assets/img/social/mail.png'
import {useDispatch, useSelector} from "react-redux";
import {ReduxStateType} from "../../../../redux/redux-store";
import {initialProfileStateType, setProfileThunk} from "../../../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import Preloader from "../../../../common/Preloader/Preloader";


function Profile() {

    let {userId} = useParams<'userId'>()
    let profileState = useSelector<ReduxStateType, initialProfileStateType>(state => state.profilePage)
    let dispatch = useDispatch()

    useEffect(() => {
        if (userId)
            dispatch(setProfileThunk(userId))
    }, [userId])

    return (
        !profileState.profile
            ? <Preloader/>
            :
            <div className={s.profile}>
                <div className={s.profile__profile}>
                    <div className={s.profile__avatar}>
                        {profileState.profile?.photos.small
                            ? <img src={profileState.profile.photos.small} alt="Avatar"/>
                            : <img src={avatar} alt="No avatar"/>}
                    </div>
                    <div className={s.profile__aboutprofile}>
                        <div className={s.profile__name}>
                            <div className={s.profile__name_title}>
                                Name:
                            </div>
                            <div className={s.profile__name_name}>
                                {profileState.profile?.fullName}
                            </div>
                        </div>
                        <div className={s.profile__about}>
                            <div className={s.profile__about_title}>
                                About:
                            </div>
                            <div className={s.profile__about_name}>
                                {profileState.profile?.aboutMe}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.profile__jobStatus_body}>
                    <div className={s.profile__jobStatus}>
                        <div className={s.profile__title}>
                            Job status:
                        </div>
                        <div className={s.profile__status}>
                            {
                                profileState.profile?.lookingForAJob
                                    ? <div className={s.profile__jobstatus_true}>
                                        Looking for a gob !
                                    </div>
                                    : <div className={s.profile__jobstatus_false}>
                                        Not now !
                                    </div>
                            }
                        </div>
                    </div>
                    {
                        profileState.profile?.lookingForAJob &&
                        <div className={s.profile__jobstatus_descr}>
                            <div>
                                Description:
                            </div>
                            <div>
                                {profileState.profile?.lookingForAJobDescription}
                            </div>
                        </div>
                    }
                </div>
                <div className={s.profile__contacts}>
                    <div className={s.profile__contacts_title}>
                        Contacts:
                    </div>
                    <div className={s.profile__contacts_img}>
                        {
                            profileState.profile?.contacts.facebook &&
                            <a
                                href={profileState.profile.contacts.facebook}
                                target='_blank'
                                rel="noreferrer"
                                title='Facebook'
                            >
                                <img src={facebookLogo} alt="facebookLogo"/>
                            </a>
                        }
                        {
                            profileState.profile?.contacts.website &&
                            <a
                                href={profileState.profile.contacts.website}
                                target='_blank'
                                rel="noreferrer"
                                title='Website'
                            >
                                <img src={websiteLogo} alt="websiteLogo"/>
                            </a>
                        }
                        {
                            profileState.profile?.contacts.vk &&
                            <a
                                href={profileState.profile.contacts.vk}
                                target='_blank'
                                rel="noreferrer"
                                title='Vk'>
                                <img src={vkLogo} alt="vkLogo"/>
                            </a>
                        }
                        {
                            profileState.profile?.contacts.twitter &&
                            <a
                                href={profileState.profile.contacts.twitter}
                                target='_blank'
                                rel="noreferrer"
                                title='Twitter'>
                                <img src={twitterLogo} alt="twitterLogo"/>
                            </a>
                        }
                        {
                            profileState.profile?.contacts.instagram &&
                            <a
                                href={profileState.profile.contacts.instagram}
                                target='_blank'
                                rel="noreferrer"
                                title='Instagram'>
                                <img src={instagramLogo} alt="instagramLogo"/>
                            </a>
                        }
                        {
                            profileState.profile?.contacts.youtube &&
                            <a
                                href={profileState.profile.contacts.youtube}
                                target='_blank'
                                rel="noreferrer"
                                title='Youtube'>
                                <img src={youtubeLogo} alt="youtubeLogo"/>
                            </a>
                        }
                        {
                            profileState.profile?.contacts.github &&
                            <a
                                href={profileState.profile.contacts.github}
                                target='_blank'
                                rel="noreferrer"
                                title='Github'>
                                <img src={githubLogo} alt="githubLogo"/>
                            </a>
                        }
                        {
                            profileState.profile?.contacts.mainLink &&
                            <a
                                href={profileState.profile.contacts.mainLink}
                                target='_blank'
                                rel="noreferrer"
                                title='Mail'>
                                <img src={mailLink} alt="mailLink"/>
                            </a>
                        }
                    </div>
                </div>
            </div>
    )
}

export default Profile;