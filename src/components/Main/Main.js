import './Main.css';

export default function Main() {
    return (
        <div className="Main">
            <div class="games">
                <div class="category">
                    <ul class="filters">
                        <li class="active">
                            <a href="#!" class="view-all">
                                All Games
                            </a>
                        </li>
                        <li>
                            <a href="#!" class="view-all">
                                Windows
                            </a>
                        </li>
                        <li>
                            <a href="#!" class="view-all">
                                iOS
                            </a>
                        </li>
                        <li>
                            <a href="#!" class="view-all">
                                Android
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="main-card">
                    <a href="/ts2" class="card1">
                        <div class="txt-2">
                            <div class="logo-2">
                                <img alt="" class="logo-3" src={require('../../assets/images/logo_ts2.png').default} />
                            </div>
                            <div class="container-2">
                                <div class="card_game_title">Twelve Sky 2</div>
                                <div class="container-3">
                                    <div class="genre">
                                        <div class="text-wrapper-5">MMORPG</div>
                                    </div>
                                    <img
                                        alt=""
                                        class="platform"
                                        src={require('../../assets/images/ico_win.svg').default}
                                    />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="/aika" class="card2">
                        <div class="txt-2">
                            <div class="logo-2">
                                <img alt="" class="logo-3" src={require('../../assets/images/logo_aika.png').default} />
                            </div>
                            <div class="container-2">
                                <div class="card_game_title">Aika Online Global</div>
                                <div class="container-3">
                                    <div class="genre">
                                        <div class="text-wrapper-5">MMORPG</div>
                                    </div>
                                    <img
                                        alt=""
                                        class="platform"
                                        src={require('../../assets/images/ico_win.svg').default}
                                    />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#!" class="card3">
                        <div class="txt-2">
                            <div class="logo-2"></div>
                            <div class="container-2">
                                <div class="card_game_title">Upcoming!</div>
                                <div class="container-3">
                                    <div class="genre">
                                        <div class="text-wrapper-5">MMORPG</div>
                                    </div>
                                    <img
                                        alt=""
                                        class="platform"
                                        src={require('../../assets/images/ico_ios.svg').default}
                                    />
                                    <img
                                        alt=""
                                        class="platform"
                                        src={require('../../assets/images/ico_and.svg').default}
                                    />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="frame">
                <div class="main-bottom">
                    <div class="bottom">
                        <img alt="" class="bottom_left" src={require('../../assets/images/bottom_left.png')} />
                        <img alt="" class="bottom_right" src={require('../../assets/images/bottom_right.png')} />
                    </div>
                    <div class="text-container">
                        <div class="heading">About CBM Interactive</div>
                        <p class="paragraph">Your gateway to the world&#39;s most exciting and captivating games.</p>
                    </div>
                    <button class="button-2">
                        <a href="/about" class="text">
                            LEARN MORE
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}
