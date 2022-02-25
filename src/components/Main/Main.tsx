import React from 'react';
import s from "../../App.module.css";

function Main() {
    return (
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-QTVBjIG24mzUfgfzW7DGlqKrYsBb209fA&usqp=CAU"
                        alt="mainImgLogo"/>
                </div>
                <div className={s.myPage}>
                    <img
                        src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
                        alt="avatarLogo"/>
                    <div className={s.myProfile}>
                        <div>Akhremchyk I.</div>
                        <div>Date of Birth: 17 December</div>
                        <div>City: Minsk</div>
                        <div>Web Site: https://saintic132.github.io/social-network/</div>
                    </div>
                </div>
                <div className={s.posts}>
                    <div className={s.nameMyPosts}>
                        My posts
                    </div>
                    <div
                        className={s.writePosts}>
                        <input
                            className={s.inputForNewPost}
                            type="text"
                            placeholder='Enter the text'/>
                        <button
                            className={s.submitInputButtonForPost}
                        >Submit</button>
                    </div>

                    <div
                        className={s.myPosts}>
                        Posts here
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main;