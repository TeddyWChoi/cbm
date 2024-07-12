import './SubNavi.css';
import LanguageSwitcher from '../../components/Translation/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function SubNavi(props) {
    const { t } = useTranslation();

    return (
        <div className="SubNavi">
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
                                                    tagret="_blank"
                                                >
                                                    FAQ
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">Guides</a>
                                            </li>
                                            <li>
                                                <a href="https://goe.freshdesk.com/en/support/home" tagret="_blank">
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
                                    <a href="./signin">SIGN IN</a>
                                </li>
                                <li>
                                    <a href="./signup">CREATE ACCOUNT</a>
                                </li>
                                <li>
                                    <img alt="" class="global" src={require('../../assets/images/ico_global.png')} />
                                    <a href="#!">{t('language')}</a>
                                    <img alt="" class="" src={require('../../assets/images/arrow2.svg').default} />
                                    <LanguageSwitcher />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
