import React from 'react';
import s from './App.module.css';

function App() {
    return (
        <div className={s.app}>
            <div className={s.header}>
                <img
                    className={s.headerImgLogo}
                    src="https://static.vecteezy.com/system/resources/previews/001/188/239/non_2x/heart-logo-png.png"
                    alt="logo"/>
                <div className={s.nameLogo}>
                    Social-Network
                </div>
            </div>
            <div className={s.main}>
                <div className={s.nav}>
                    <div>Profile</div>
                    <div>Messages</div>
                    <div>News</div>
                    <div>Music</div>
                    <div>Settings</div>
                </div>

                <div className={s.content}>
                    <div>
                        <img
                            className={s.mainImgLogo}
                            src="https://ak.picdn.net/shutterstock/videos/1947427/thumb/1.jpg"
                            alt="mainImgLogo"/>
                    </div>
                    <div className={s.myPage}>
                        <img
                            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
                            alt="avatarLogo"/>
                        <div className={s.nameMyPage}>
                            <div>Akhremchyk I.</div>
                            <div>Date of Birth: 17 December</div>
                            <div>City: Minsk</div>
                            <div>Web Site: https://saintic132.github.io/social-network/</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={s.footer}>
                FOOTER
            </div>
        </div>
    );
}

export default App;
