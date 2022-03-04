import React from "react";
import s from "./Music.module.css";

function Music() {
    return (
        <div className={s.music}>
                <div className={s.music__title}>
                    <div className={s.music__text}>
                        <h2>Music</h2>
                    </div>
                </div>
                <div className={s.music__songs}>
                    <div className={s.music__columns}>
                        <div className={s.music__list}>
                            <ul>
                                <li>
                                    <h3>Руки Вверх – Крошка моя</h3>
                                    <audio controls>
                                        <source
                                            src="https://mp3uk.net/mp3/files/ruki-vverh-kroshka-moya-mp3.mp3"
                                            type="audio/mpeg"/>
                                    </audio>
                                </li>
                                <li>
                                    <h3>7Б – Молодые Ветра</h3>
                                    <audio controls>
                                        <source
                                            src="https://mp3uk.net/mp3/files/7b-molodye-vetra-mp3.mp3"
                                            type="audio/mpeg"/>
                                    </audio>
                                </li>
                                <li>
                                    <h3>Slava Marlow – Снова Я Напиваюсь</h3>
                                    <audio controls>
                                        <source
                                            src="https://mp3uk.net/mp3/files/slava-marlow-snova-ya-napivayus-mp3.mp3"
                                            type="audio/mpeg"/>
                                    </audio>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Music;