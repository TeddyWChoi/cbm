import './SubNavi.css';
import LanguageSwitcher from '../../components/Translation/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Mobile, Pc } from '../../components/Responsive/Responsive';
export default function SubNavi(props) {
    const { t } = useTranslation();
    const [isOpen, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정

    const toggleMenu = () => {
        setMenu((isOpen) => !isOpen); // on,off 개념 boolean
        console.log(isOpen);
    };
    if (props.is_login) {
        return (
            <div className="SubNavi">
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
                        <div class="div">
                            <button onClick={() => toggleMenu()} class="div">
                                <img
                                    class="vector-icon"
                                    alt=""
                                    src={require('../../assets/images/ico_menu.svg').default}
                                />
                            </button>
                            <div class="logo">
                                <a href="/ts2">
                                    <img alt="" src={require('../../assets/images/logo_ts2.png')} />
                                </a>
                            </div>
                            <div class="link-margin">
                                <div class="link">
                                    <nav id="primary_nav_wrap">
                                        <ul class="nav">
                                            <li class="">
                                                <a class="nav_arrow" href="#!">
                                                    SUPPORT
                                                </a>

                                                <ul>
                                                    <li>
                                                        <a
                                                            href="https://goe.freshdesk.com/en/support/solutions"
                                                            target="_blank"
                                                        >
                                                            FAQ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://goe.freshdesk.com/en/support/discussions/forums/80000410833"
                                                            target="_blank"
                                                        >
                                                            Guides
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://goe.freshdesk.com/en/support/home"
                                                            target="_blank"
                                                        >
                                                            Contact us
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="">
                                                <a href="#!">GAME POLICY</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="link-margin-2">
                                <nav id="primary_nav_wrap">
                                    <ul class="nav language">
                                        <li>
                                            <a href="./coinshop" class="coin">
                                                COIN SHOP
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/ts2">SIGN OUT</a>
                                        </li>
                                        <li>
                                            <a href="./accountinformation">MY PAGE</a>
                                        </li>
                                        <li>
                                            <img
                                                alt=""
                                                class="global"
                                                src={require('../../assets/images/ico_global.png')}
                                            />
                                            <a href="#!">{t('language')}</a>
                                            <img
                                                alt=""
                                                class=""
                                                src={require('../../assets/images/arrow2.svg').default}
                                            />
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
                                <a href="/ts2">
                                    <img alt="" src={require('../../assets/images/logo_ts2.png')} />
                                </a>
                            </div>
                            <div class="link-margin">
                                <div class="link">
                                    <nav id="primary_nav_wrap">
                                        <ul class="nav">
                                            <li class="">
                                                <a class="nav_arrow" href="#!">
                                                    SUPPORT
                                                </a>

                                                <ul>
                                                    <li>
                                                        <a
                                                            href="https://goe.freshdesk.com/en/support/solutions"
                                                            target="_blank"
                                                        >
                                                            FAQ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://goe.freshdesk.com/en/support/discussions/forums/80000410833"
                                                            target="_blank"
                                                        >
                                                            Guides
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://goe.freshdesk.com/en/support/home"
                                                            target="_blank"
                                                        >
                                                            Contact us
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="">
                                                <a href="#!">GAME POLICY</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="link-margin-2">
                                <nav id="primary_nav_wrap">
                                    <ul class="nav language">
                                        <li>
                                            <a href="./coinshop" class="coin">
                                                COIN SHOP
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/ts2">SIGN OUT</a>
                                        </li>
                                        <li>
                                            <a href="./accountinformation">MY PAGE</a>
                                        </li>
                                        <li>
                                            <img
                                                alt=""
                                                class="global"
                                                src={require('../../assets/images/ico_global.png')}
                                            />
                                            <a href="#!">{t('language')}</a>
                                            <img
                                                alt=""
                                                class=""
                                                src={require('../../assets/images/arrow2.svg').default}
                                            />
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
    } else {
        return (
            <div className="SubNavi">
                <Mobile>
                    <div id="navi-mobile" className={isOpen ? 'show-menu' : 'hide-menu'}>
                        {/* 삼항연산자 true 일 때 클래스명 show-menu, false일때 hide-menu */}
                        <div class="frame-group">
                            <div class="game-wrapper">
                                <b class="game">SUPPORT</b>
                            </div>

                            <ul class="frame-container">
                                <li class="mobile_menu">
                                    <a href="https://goe.freshdesk.com/en/support/solutions" target="_blank">
                                        FAQ
                                    </a>
                                </li>
                                <li class="mobile_menu">
                                    <a
                                        href="https://goe.freshdesk.com/en/support/discussions/forums/80000410833"
                                        target="_blank"
                                    >
                                        Guides
                                    </a>
                                </li>
                                <li class="mobile_menu">
                                    <a href="https://goe.freshdesk.com/en/support/home" target="_blank">
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="frame-group">
                            <div class="game-wrapper">
                                <b class="game"></b>
                            </div>

                            <ul class="frame-container">
                                <li class="mobile_menu">
                                    <a href="#!">Game Policy</a>
                                </li>
                                <li class="mobile_menu">
                                    <a class="coinshop_m" href="./coinshop">
                                        Coin Shop
                                    </a>
                                </li>
                                <li class="mobile_menu">
                                    <a href="./signin">Sign In</a>
                                </li>
                                <li class="mobile_menu">
                                    <a href="./signup">Create Account</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="navbar-home">
                        <div class="div">
                            <button onClick={() => toggleMenu()} class="div">
                                <img
                                    class="vector-icon"
                                    alt=""
                                    src={require('../../assets/images/ico_menu.svg').default}
                                />
                            </button>
                        </div>
                        <div class="logo">
                            <a href="/ts2">
                                <img alt="" src={require('../../assets/images/logo_ts2.png')} />
                            </a>
                        </div>
                        <div class="container">
                            <div class="link-margin-2">
                                <nav id="primary_nav_wrap">
                                    <ul class="nav language">
                                        {/* <li>
                                            <a href="./coinshop" class="coin">
                                                COIN SHOP
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/ts2">SIGN OUT</a>
                                        </li>
                                        <li>
                                            <a href="./accountinformation">MY PAGE</a>
                                        </li> */}
                                        <li>
                                            <img
                                                alt=""
                                                class="global"
                                                src={require('../../assets/images/ico_global.png')}
                                            />
                                            <a href="#!">{t('language')}</a>
                                            <img
                                                alt=""
                                                class=""
                                                src={require('../../assets/images/arrow2.svg').default}
                                            />
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
                                <a href="/ts2">
                                    <img alt="" src={require('../../assets/images/logo_ts2.png')} />
                                </a>
                            </div>
                            <div class="link-margin">
                                <div class="link">
                                    <nav id="primary_nav_wrap">
                                        <ul class="nav">
                                            <li class="">
                                                <a class="nav_arrow" href="#!">
                                                    SUPPORT
                                                </a>

                                                <ul>
                                                    <li>
                                                        <a
                                                            href="https://goe.freshdesk.com/en/support/solutions"
                                                            target="_blank"
                                                        >
                                                            FAQ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://goe.freshdesk.com/en/support/discussions/forums/80000410833"
                                                            target="_blank"
                                                        >
                                                            Guides
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://goe.freshdesk.com/en/support/home"
                                                            target="_blank"
                                                        >
                                                            Contact us
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="">
                                                <a href="#!">GAME POLICY</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="link-margin-2">
                                <nav id="primary_nav_wrap">
                                    <ul class="nav language">
                                        <li>
                                            <a href="./coinshop" class="coin">
                                                COIN SHOP
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/ts2">SIGN OUT</a>
                                        </li>
                                        <li>
                                            <a href="./accountinformation">MY PAGE</a>
                                        </li>
                                        <li>
                                            <img
                                                alt=""
                                                class="global"
                                                src={require('../../assets/images/ico_global.png')}
                                            />
                                            <a href="#!">{t('language')}</a>
                                            <img
                                                alt=""
                                                class=""
                                                src={require('../../assets/images/arrow2.svg').default}
                                            />
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
}
