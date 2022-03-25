import React from 'react';
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
import {ProfilePropsType} from "./ProfileContainer";


function Profile(props: ProfilePropsType) {

    return (
        <div className={s.profile}>
            <div className={s.profile__profile}>
                <div className={s.profile__avatar}>
                    {props.profile?.photos.small
                        ? <img src={props.profile.photos.small} alt="Avatar"/>
                        : <img src={avatar} alt="No avatar"/>}
                </div>
                <div className={s.profile__aboutprofile}>
                    <div className={s.profile__name}>
                        <div className={s.profile__name_title}>
                            Name:
                        </div>
                        <div className={s.profile__name_name}>
                            {props.profile?.fullName}
                        </div>
                    </div>
                    <div className={s.profile__about}>
                        <div className={s.profile__about_title}>
                            About:
                        </div>
                        <div className={s.profile__about_name}>
                            {props.profile?.aboutMe}
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
                            props.profile?.lookingForAJob
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
                    props.profile?.lookingForAJob &&
                    <div className={s.profile__jobstatus_descr}>
                        <div>
                            Description:
                        </div>
                        <div>
                            {props.profile?.lookingForAJobDescription}
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
                        props.profile?.contacts.facebook &&
                        <a
                            href={props.profile.contacts.facebook}
                            target='_blank'
                            rel="noreferrer"
                            title='Facebook'
                        >
                            <img src={facebookLogo} alt="facebookLogo"/>
                        </a>
                    }
                    {
                        props.profile?.contacts.website &&
                        <a
                            href={props.profile.contacts.website}
                            target='_blank'
                            rel="noreferrer"
                            title='Website'
                        >
                            <img src={websiteLogo} alt="websiteLogo"/>
                        </a>
                    }
                    {
                        props.profile?.contacts.vk &&
                        <a
                            href={props.profile.contacts.vk}
                            target='_blank'
                            rel="noreferrer"
                            title='Vk'>
                            <img src={vkLogo} alt="vkLogo"/>
                        </a>
                    }
                    {
                        props.profile?.contacts.twitter &&
                        <a
                            href={props.profile.contacts.twitter}
                            target='_blank'
                            rel="noreferrer"
                            title='Twitter'>
                            <img src={twitterLogo} alt="twitterLogo"/>
                        </a>
                    }
                    {
                        props.profile?.contacts.instagram &&
                        <a
                            href={props.profile.contacts.instagram}
                            target='_blank'
                            rel="noreferrer"
                            title='Instagram'>
                            <img src={instagramLogo} alt="instagramLogo"/>
                        </a>
                    }
                    {
                        props.profile?.contacts.youtube &&
                        <a
                            href={props.profile.contacts.youtube}
                            target='_blank'
                            rel="noreferrer"
                            title='Youtube'>
                            <img src={youtubeLogo} alt="youtubeLogo"/>
                        </a>
                    }
                    {
                        props.profile?.contacts.github &&
                        <a
                            href={props.profile.contacts.github}
                            target='_blank'
                            rel="noreferrer"
                            title='Github'>
                            <img src={githubLogo} alt="githubLogo"/>
                        </a>
                    }
                    {
                        props.profile?.contacts.mainLink &&
                        <a
                            href={props.profile.contacts.mainLink}
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