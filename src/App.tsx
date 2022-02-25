import React from 'react';
import s from './App.module.css';

function App() {
    return (
        <div className={s.app}>
            <div className={s.header}>
                <img
                    className={s.imgLogo}
                    src="https://static.vecteezy.com/system/resources/previews/001/188/239/non_2x/heart-logo-png.png"
                    alt="logo"/>
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

                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
