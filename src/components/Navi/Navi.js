import './Navi.css';
import LanguageSwitcher from '../Translation/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function Navi() {
    const { t } = useTranslation();
    return (
        <div className="Navi">
            <div class="navbar-home">
                <div class="div">
                    <div class="logo">
                        <a href="./">
                            <img class="img" src={require('../../assets/images/logo_cbm.svg').default} />
                        </a>
                    </div>
                    <div class="link-margin">
                        <div class="link">
                            <nav id="primary_nav_wrap">
                                <ul>
                                    <li class="">
                                        <a class="nav_arrow" href="#">
                                            {t('games')}
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/ts2">
                                                    <img src={require('../../assets/images/nav_ico1.png').default} />
                                                    Twelve Sky 2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/aika">
                                                    <img src={require('../../assets/images/nav_ico2.png').default} />
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
                                    <img class="global" src={require('../../assets/images/ico_global.png')} />
                                    <a href="#">{t('language')}</a>
                                    <img class="" src={require('../../assets/images/arrow2.svg').default} />

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
