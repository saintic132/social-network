import React, {memo, useEffect} from 'react';
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
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../../redux/redux-store";
import {getProfileStatusUserThunk, setProfileThunk} from "../../../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import Preloader from "../../../../common/Preloader/Preloader";
import {CheckHttpOrHttps} from "../../../../common/Helpers/CheckHttpOrHttps";


export const Profile = memo(() => {

    const {userId} = useParams<'userId'>()
    const profileState = useAppSelector(state => state.profilePage)
    const dispatch = useDispatch()


    const facebookCheckHttpOrHttps = CheckHttpOrHttps(profileState.profile?.contacts.facebook)
    const websiteCheckHttpOrHttps = CheckHttpOrHttps(profileState.profile?.contacts.website)
    const vkCheckHttpOrHttps = CheckHttpOrHttps(profileState.profile?.contacts.vk)
    const twitterCheckHttpOrHttps = CheckHttpOrHttps(profileState.profile?.contacts.twitter)
    const instagramCheckHttpOrHttps = CheckHttpOrHttps(profileState.profile?.contacts.instagram)
    const youtubeCheckHttpOrHttps = CheckHttpOrHttps(profileState.profile?.contacts.youtube)
    const githubCheckHttpOrHttps = CheckHttpOrHttps(profileState.profile?.contacts.github)
    const mainLinkCheckHttpOrHttps = CheckHttpOrHttps(profileState.profile?.contacts.mainLink)

    useEffect(() => {
        if (userId) {
            dispatch(setProfileThunk(userId))
            dispatch(getProfileStatusUserThunk(+userId))
        }
    }, [dispatch, userId])


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
                        <div className={s.profile__status}>
                            <div className={s.profile__status_title}>
                                Status:
                            </div>
                            <div className={s.profile__status_name}>
                                {profileState.status}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.profile__jobStatus_body}>
                    <div className={s.profile__jobStatus}>
                        <div className={s.profile__title}>
                            Job status:
                        </div>
                        <div className={s.profile__jobStatus}>
                            {
                                profileState.profile?.lookingForAJob
                                    ? <div className={s.profile__jobStatus_true}>
                                        Looking for a gob !
                                    </div>
                                    : <div className={s.profile__jobStatus_false}>
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
                                href={facebookCheckHttpOrHttps}
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
                                href={websiteCheckHttpOrHttps}
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
                                href={vkCheckHttpOrHttps}
                                target='_blank'
                                rel="noreferrer"
                                title='Vk'>
                                <img src={vkLogo} alt="vkLogo"/>
                            </a>
                        }
                        {
                            profileState.profile?.contacts.twitter &&
                            <a
                                href={twitterCheckHttpOrHttps}
                                target='_blank'
                                rel="noreferrer"
                                title='Twitter'>
                                <img src={twitterLogo} alt="twitterLogo"/>
                            </a>
                        }
                        {
                            profileState.profile?.contacts.instagram &&
                            <a
                                href={instagramCheckHttpOrHttps}
                                target='_blank'
                                rel="noreferrer"
                                title='Instagram'>
                                <img src={instagramLogo} alt="instagramLogo"/>
                            </a>
                        }
                        {
                            profileState.profile?.contacts.youtube &&
                            <a
                                href={youtubeCheckHttpOrHttps}
                                target='_blank'
                                rel="noreferrer"
                                title='Youtube'>
                                <img src={youtubeLogo} alt="youtubeLogo"/>
                            </a>
                        }
                        {
                            profileState.profile?.contacts.github &&
                            <a
                                href={githubCheckHttpOrHttps}
                                target='_blank'
                                rel="noreferrer"
                                title='Github'>
                                <img src={githubLogo} alt="githubLogo"/>
                            </a>
                        }
                        {
                            profileState.profile?.contacts.mainLink &&
                            <a
                                href={mainLinkCheckHttpOrHttps}
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
})

