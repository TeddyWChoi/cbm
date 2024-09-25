import './View.css';

export default function View() {
    return (
        <div className="View">
            <div class="board_wrapper">
                <div class="component-2">
                    <div class="div0">
                        <div class="div1"></div>
                        <img
                            alt=""
                            class="glb-common-minjpg-icon"
                            src={require('../../assets/images/board_sample.jpg')}
                        />
                        <div class="div2">
                            <div class="updates-parent">
                                <div class="updates">UPDATES</div>
                                <b class="title">Christmas Coupon Event</b>
                                <div class="div-parent">
                                    <div class="div3">
                                        <div class="i">
                                            <div class="i1">
                                                <img
                                                    alt=""
                                                    class="edit-icon"
                                                    src={require('../../assets/images/time2.svg').default}
                                                />
                                            </div>
                                        </div>
                                        <div class="date">Feb 6 2024 12:15PM (EDT)</div>
                                    </div>
                                    <div class="div3">
                                        <div class="i2">
                                            <img
                                                alt=""
                                                class="icoutline-remove-red-eye-icon"
                                                src={require('../../assets/images/eye.svg').default}
                                            />
                                        </div>
                                        <div class="date">1827</div>
                                    </div>
                                </div>
                            </div>
                            <div class="board_txt">
                                <span>
                                    Greetings, Aitans!
                                    <br />
                                    <br />
                                    We've received many requests from our players to continue the 20% More M-Coin event.
                                    <br />
                                    <br />
                                    Don't miss out on this wonderful opportunity once again!
                                    <br />
                                    <br />
                                    As a token of our appreciation,
                                    <br />
                                    <br />
                                    NOW THROUGH June 30, 2024 23:59 (EDT),
                                    <br />
                                    Get up to 20% more M-coins on your purchase!!!
                                    <br />
                                    <br />
                                    Check out the festive deals below:
                                    <br />
                                    <br />
                                    500 M-Coins
                                    <br />
                                    Get 10% more = 550 M-Coins
                                    <br />
                                    <br />
                                    1,000 M-Coins <br />
                                    Get 10% more = 1,100 M-Coins
                                    <br />
                                    <br />
                                    2,000 M-Coins
                                    <br />
                                    Get 10% more = 2,200 M-Coins
                                    <br />
                                    <br />
                                    5,250 M-Coins
                                    <br />
                                    Get 15% more = 6,037 M-Coins
                                    <br />
                                    <br />
                                    11,000 M-Coins
                                    <br />
                                    Get 20% more = 13,200 M-Coins
                                    <br />
                                    <br />
                                    Enjoy!
                                    <br />
                                    <br />
                                    <br />- Aika Online Global Team
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="related-news-wrapper">
                <div class="ico-boardsvg">
                    <img alt="" class="page-1-icon" src={require('../../assets/images/ico_news.svg').default} />
                </div>
                <b class="related-news">RELATED NEWS</b>
            </div>

            <div class="related-news2">
                <div class="div-3">
                    <a href="#!" class="news">
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
                    <a href="#!" class="news">
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
                    <a href="#!" class="news">
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
                    <a href="./news" class="button-2">
                        <div class="text">See More</div>
                    </a>
                </div>
            </div>
        </div>
    );
}
