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
                                    <h3>Руки Вверх – 18 Мне Уже</h3>
                                    <audio controls>
                                        <source
                                            src="https://cdn6.sefon.pro/prev/I_GKJMarR3GjyAR1tCJCQA/1646024235/7/%D0%A0%D1%83%D0%BA%D0%B8%20%D0%92%D0%B2%D0%B5%D1%80%D1%85%20-%2018%20%D0%9C%D0%BD%D0%B5%20%D0%A3%D0%B6%D0%B5%20%28192kbps%29.mp3"
                                            type="audio/mpeg"/>
                                    </audio>
                                </li>
                                <li>
                                    <h3>Юрий Шатунов – Седая ночь</h3>
                                    <audio controls>
                                        <source
                                            src="https://cdn7.sefon.pro/prev/4HF3GuSJs70eVo0tZh16KQ/1646024235/11/%D0%AE%D1%80%D0%B8%D0%B9%20%D0%A8%D0%B0%D1%82%D1%83%D0%BD%D0%BE%D0%B2%20-%20%D0%A1%D0%B5%D0%B4%D0%B0%D1%8F%20%D0%9D%D0%BE%D1%87%D1%8C%20%28192kbps%29.mp3"
                                            type="audio/mpeg"/>
                                    </audio>
                                </li>
                                <li>
                                    <h3>Slava Marlow – Снова Я Напиваюсь</h3>
                                    <audio controls>
                                        <source
                                            src="https://cdn6.sefon.pro/prev/N_79t8GE_zhEYRQVQolKiw/1646024235/196/Slava%20Marlow%20-%20%D0%A1%D0%BD%D0%BE%D0%B2%D0%B0%20%D0%AF%20%D0%9D%D0%B0%D0%BF%D0%B8%D0%B2%D0%B0%D1%8E%D1%81%D1%8C%20%28192kbps%29.mp3"
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