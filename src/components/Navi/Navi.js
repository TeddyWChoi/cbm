import './Navi.css';
import LanguageSwitcher from '../Translation/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Mobile, Pc } from '../Responsive/Responsive';
import React, { useState } from 'react';
export default function Navi() {
    const { t } = useTranslation();
    const [isOpen, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정

    const toggleMenu = () => {
        setMenu((isOpen) => !isOpen); // on,off 개념 boolean
        console.log(isOpen);
    };
    return (
        <div className="Navi">
            <Mobile>
                <div id="navi-mobile" className={isOpen ? 'show-menu' : 'hide-menu'}>
                    {/* 삼항연산자 true 일 때 클래스명 show-menu, false일때 hide-menu */}
                    <div class="frame-group">
                        <div class="game-wrapper">
                            <b class="game">GAME</b>
                        </div>

                        <ul class="frame-container">
                            <li class="mobile_menu">
                                <a href="/ts2">
                                    <img alt="" src={require('../../assets/images/nav_ico1.png')} />
                                    Twelve Sky 2
                                </a>
                            </li>
                            <li class="mobile_menu">
                                <a href="/aika">
                                    <img alt="" src={require('../../assets/images/nav_ico2.png')} />
                                    Aika Online Global
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="navbar-home">
                    <button onClick={() => toggleMenu()} class="div">
                        <img class="vector-icon" alt="" src={require('../../assets/images/ico_menu.svg').default} />
                    </button>
                    <div class="logo">
                        <a href="./">
                            <img alt="" class="img" src={require('../../assets/images/logo_cbm.svg').default} />
                        </a>
                    </div>
                    <div class="container">
                        <div class="link-margin-2">
                            <nav id="primary_nav_wrap">
                                <ul class="language">
                                    <li>
                                        <img
                                            alt=""
                                            class="global"
                                            src={require('../../assets/images/ico_global.png')}
                                        />
                                        <a href="#!">{t('language')}</a>
                                        <img alt="" class="" src={require('../../assets/images/arrow2.svg').default} />

                                        <LanguageSwitcher />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </Mobile>
            <Pc>
                <div class="navbar-home">
                    <div class="div">
                        <div class="logo">
                            <a href="./">
                                <img alt="" class="img" src={require('../../assets/images/logo_cbm.svg').default} />
                            </a>
                        </div>
                        <div class="link-margin">
                            <div class="link">
                                <nav id="primary_nav_wrap">
                                    <ul>
                                        <li class="">
                                            <a class="nav_arrow" href="#!">
                                                {t('games')}
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="/ts2">
                                                        <img alt="" src={require('../../assets/images/nav_ico1.png')} />
                                                        Twelve Sky 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/aika">
                                                        <img alt="" src={require('../../assets/images/nav_ico2.png')} />
                                                        Aika Online Global
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="link-margin-2">
                            <nav id="primary_nav_wrap">
                                <ul class="language">
                                    <li>
                                        <img
                                            alt=""
                                            class="global"
                                            src={require('../../assets/images/ico_global.png')}
                                        />
                                        <a href="#!">{t('language')}</a>
                                        <img alt="" class="" src={require('../../assets/images/arrow2.svg').default} />

                                        <LanguageSwitcher />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </Pc>
        </div>
    );
}
