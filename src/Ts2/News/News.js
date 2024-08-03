import './News.css';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function News() {
    /* 서브메뉴 내부링크 관련 */
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div id="news" className="News">
            <div>
                <div class="container-9">
                    <div class="filter-wrapper">
                        <div class="frame-3">
                            <div class="div-2">
                                <div class="text-wrapper-9">UPDATES</div>
                            </div>
                            <img alt="" class="dropdown" src={require('../../assets/images/dropdown.svg').default} />
                        </div>
                        <ul class="filter_box">
                            <li>
                                <a href="#!">UPDATES</a>
                            </li>
                            <li>
                                <a href="#!">EVENTS</a>
                            </li>
                            <li>
                                <a href="#!">NOTICES</a>
                            </li>
                        </ul>
                    </div>

                    <div class="div-3">
                        <a href="./view" class="news">
                            <div class="grand-launch-events-wrapper">
                                <img
                                    alt=""
                                    class="grand-launch-events"
                                    src={require('../../assets/images/grand-launch-events-20-1-jpg-9.png')}
                                />
                            </div>
                            <div class="div-4">
                                <div class="div-5">
                                    <div class="text-wrapper-10">UPDATES</div>
                                </div>
                                <div class="facebook-login-reply-wrapper">
                                    <p class="facebook-login-reply">
                                        Facebook Login &amp; Reply Event #15
                                        <br />
                                        dsdssdfsdfsdfsdf
                                    </p>
                                </div>
                                <div class="div-6">
                                    <p class="text-wrapper-11">Feb 6 2024 12:15PM (EDT)</p>
                                </div>
                            </div>
                        </a>
                        <a href="./view" class="news">
                            <div class="grand-launch-events-wrapper">
                                <img
                                    alt=""
                                    class="grand-launch-events"
                                    src={require('../../assets/images/grand-launch-events-20-1-jpg-9.png')}
                                />
                            </div>
                            <div class="div-4">
                                <div class="div-5">
                                    <div class="text-wrapper-10">UPDATES</div>
                                </div>
                                <div class="facebook-login-reply-wrapper">
                                    <p class="facebook-login-reply">
                                        Facebook Login &amp; Reply Event #15
                                        <br />
                                        dsdssdfsdfsdfsdf
                                    </p>
                                </div>
                                <div class="div-6">
                                    <p class="text-wrapper-11">Feb 6 2024 12:15PM (EDT)</p>
                                </div>
                            </div>
                        </a>
                        <a href="./view" class="news">
                            <div class="grand-launch-events-wrapper">
                                <img
                                    alt=""
                                    class="grand-launch-events"
                                    src={require('../../assets/images/grand-launch-events-20-1-jpg-9.png')}
                                />
                            </div>
                            <div class="div-4">
                                <div class="div-5">
                                    <div class="text-wrapper-10">UPDATES</div>
                                </div>
                                <div class="facebook-login-reply-wrapper">
                                    <p class="facebook-login-reply">
                                        Facebook Login &amp; Reply Event #15
                                        <br />
                                        dsdssdfsdfsdfsdf
                                    </p>
                                </div>
                                <div class="div-6">
                                    <p class="text-wrapper-11">Feb 6 2024 12:15PM (EDT)</p>
                                </div>
                            </div>
                        </a>
                        <a href="./view" class="news">
                            <div class="grand-launch-events-wrapper">
                                <img
                                    alt=""
                                    class="grand-launch-events"
                                    src={require('../../assets/images/grand-launch-events-20-1-jpg-9.png')}
                                />
                            </div>
                            <div class="div-4">
                                <div class="div-5">
                                    <div class="text-wrapper-10">UPDATES</div>
                                </div>
                                <div class="facebook-login-reply-wrapper">
                                    <p class="facebook-login-reply">
                                        Facebook Login &amp; Reply Event #15
                                        <br />
                                        dsdssdfsdfsdfsdf
                                    </p>
                                </div>
                                <div class="div-6">
                                    <p class="text-wrapper-11">Feb 6 2024 12:15PM (EDT)</p>
                                </div>
                            </div>
                        </a>
                        <a href="./view" class="news">
                            <div class="grand-launch-events-wrapper">
                                <img
                                    alt=""
                                    class="grand-launch-events"
                                    src={require('../../assets/images/grand-launch-events-20-1-jpg-9.png')}
                                />
                            </div>
                            <div class="div-4">
                                <div class="div-5">
                                    <div class="text-wrapper-10">UPDATES</div>
                                </div>
                                <div class="facebook-login-reply-wrapper">
                                    <p class="facebook-login-reply">
                                        Facebook Login &amp; Reply Event #15
                                        <br />
                                        dsdssdfsdfsdfsdf
                                    </p>
                                </div>
                                <div class="div-6">
                                    <p class="text-wrapper-11">Feb 6 2024 12:15PM (EDT)</p>
                                </div>
                            </div>
                        </a>
                        <a href="./view" class="news">
                            <div class="grand-launch-events-wrapper">
                                <img
                                    alt=""
                                    class="grand-launch-events"
                                    src={require('../../assets/images/grand-launch-events-20-1-jpg-9.png')}
                                />
                            </div>
                            <div class="div-4">
                                <div class="div-5">
                                    <div class="text-wrapper-10">UPDATES</div>
                                </div>
                                <div class="facebook-login-reply-wrapper">
                                    <p class="facebook-login-reply">
                                        Facebook Login &amp; Reply Event #15
                                        <br />
                                        dsdssdfsdfsdfsdf
                                    </p>
                                </div>
                                <div class="div-6">
                                    <p class="text-wrapper-11">Feb 6 2024 12:15PM (EDT)</p>
                                </div>
                            </div>
                        </a>
                        <a href="./view" class="news">
                            <div class="grand-launch-events-wrapper">
                                <img
                                    alt=""
                                    class="grand-launch-events"
                                    src={require('../../assets/images/grand-launch-events-20-1-jpg-9.png')}
                                />
                            </div>
                            <div class="div-4">
                                <div class="div-5">
                                    <div class="text-wrapper-10">UPDATES</div>
                                </div>
                                <div class="facebook-login-reply-wrapper">
                                    <p class="facebook-login-reply">
                                        Facebook Login &amp; Reply Event #15
                                        <br />
                                        dsdssdfsdfsdfsdf
                                    </p>
                                </div>
                                <div class="div-6">
                                    <p class="text-wrapper-11">Feb 6 2024 12:15PM (EDT)</p>
                                </div>
                            </div>
                        </a>
                        <a href="./view" class="news">
                            <div class="grand-launch-events-wrapper">
                                <img
                                    alt=""
                                    class="grand-launch-events"
                                    src={require('../../assets/images/grand-launch-events-20-1-jpg-9.png')}
                                />
                            </div>
                            <div class="div-4">
                                <div class="div-5">
                                    <div class="text-wrapper-10">UPDATES</div>
                                </div>
                                <div class="facebook-login-reply-wrapper">
                                    <p class="facebook-login-reply">
                                        Facebook Login &amp; Reply Event #15
                                        <br />
                                        dsdssdfsdfsdfsdf
                                    </p>
                                </div>
                                <div class="div-6">
                                    <p class="text-wrapper-11">Feb 6 2024 12:15PM (EDT)</p>
                                </div>
                            </div>
                        </a>
                        <a href="./view" class="news">
                            <div class="grand-launch-events-wrapper">
                                <img
                                    alt=""
                                    class="grand-launch-events"
                                    src={require('../../assets/images/grand-launch-events-20-1-jpg-9.png')}
                                />
                            </div>
                            <div class="div-4">
                                <div class="div-5">
                                    <div class="text-wrapper-10">UPDATES</div>
                                </div>
                                <div class="facebook-login-reply-wrapper">
                                    <p class="facebook-login-reply">
                                        Facebook Login &amp; Reply Event #15
                                        <br />
                                        dsdssdfsdfsdfsdf
                                    </p>
                                </div>
                                <div class="div-6">
                                    <p class="text-wrapper-11">Feb 6 2024 12:15PM (EDT)</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="frame-4">
                        <a href="#!" class="button-2">
                            <div class="text">See More</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
