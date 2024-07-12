import AccountLnb from '../../components/AccountLnb/AccountLnb.js';
import './AccountInformation.css';

export default function AccountInformation(props) {
    return (
        <div className="AccountInformation">
            <AccountLnb account={'account1'} />

            <div class="component-4">
                <div class="frame-parent">
                    <div class="frame-group">
                        <div class="frame-container">
                            <div class="hugeiconsuser-account-group">
                                <img
                                    alt=""
                                    class="hugeiconsuser-account"
                                    src={require('../../assets/images/ico_mypage1.svg').default}
                                />
                                <b class="account">Account</b>
                            </div>
                            <div class="edit-wrapper">
                                <a href="./accountdetail">
                                    <img
                                        alt=""
                                        class="edit-icon"
                                        src={require('../../assets/images/ico_edit.svg').default}
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="frame-div">
                            <div class="jasonjmhangmailcom-parent">
                                <div class="jasonjmhangmailcom">jason.jm.han@gmail.com</div>
                                <div class="password-changed-on-may">Password changed on May 19 2024 11:46PM</div>
                                <div class="password-changed-on-may">Member Since, Oct 16 2023 5:01AM</div>
                            </div>
                            <a href="./passwordchange" class="button-3">
                                <b class="text">Change Password</b>
                            </a>
                        </div>
                    </div>
                    <div class="frame-group">
                        <div class="frame-parent2">
                            <div class="hugeiconsuser-account-group">
                                <img
                                    alt=""
                                    class="icbaseline-history-icon"
                                    src={require('../../assets/images/ico_mypage2.svg').default}
                                />
                                <b class="account">Login History</b>
                            </div>
                            <div class="edit-wrapper">
                                <a href="./loginhistory">
                                    <img
                                        alt=""
                                        class="edit-icon"
                                        src={require('../../assets/images/ico_edit.svg').default}
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="frame-parent3">
                            <div class="jasonjmhangmailcom-parent">
                                <div class="jasonjmhangmailcom-parent">
                                    <div class="account-information">South Korea</div>
                                    <div class="kr">KR</div>
                                </div>
                            </div>
                            <div class="jasonjmhangmailcom-parent">
                                <div class="jasonjmhangmailcom-parent">
                                    <div class="account-information">South Korea</div>
                                    <div class="kr">KR</div>
                                </div>
                            </div>
                            <div class="jasonjmhangmailcom-parent">
                                <div class="jasonjmhangmailcom-parent">
                                    <div class="account-information">South Korea</div>
                                    <div class="kr">KR</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="frame-parent4">
                    <div class="frame-parent5">
                        <div class="frame-parent2">
                            <div class="hugeiconsuser-account-group">
                                <img
                                    alt=""
                                    class="hugeiconsuser-account"
                                    src={require('../../assets/images/ico_mypage3.svg').default}
                                />
                                <b class="account">In-game Purchase History</b>
                            </div>
                            <div class="edit-wrapper">
                                <a href="./ingamepurchasehistory">
                                    <img
                                        alt=""
                                        class="edit-icon"
                                        src={require('../../assets/images/ico_edit.svg').default}
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="frame-parent7">
                            <div class="jasonjmhangmailcom-parent">
                                <div class="account-information">Current Balance</div>
                                <b class="b">3,000</b>
                            </div>
                            <a href="./coinshop" class="button-3">
                                <b class="text">Buy Coin</b>
                            </a>
                        </div>
                    </div>
                    <div class="line-wrapper"></div>
                    <div class="frame-parent8">
                        <div class="frame-parent9">
                            <div class="frame-wrapper3">
                                <div class="date-wrapper">
                                    <b class="date">DATE</b>
                                </div>
                            </div>
                            <div class="frame-wrapper4">
                                <div class="item-wrapper">
                                    <b class="date">ITEM</b>
                                </div>
                            </div>
                            <div class="frame-wrapper5">
                                <div class="price-wrapper">
                                    <b class="date">PRICE</b>
                                </div>
                            </div>
                        </div>
                        <div class="frame-parent10">
                            <div class="frame-wrapper3">
                                <div class="frame-parent11">
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">Apr 8 2024 10:20PM</div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">Apr 8 2024 10:20PM</div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">Apr 8 2024 10:20PM</div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">Apr 8 2024 10:20PM</div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">Apr 8 2024 10:20PM</div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">Apr 8 2024 10:20PM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="frame-wrapper4">
                                <div class="frame-parent12">
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">Mark of Honor [15day]</div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper15">
                                        <div class="back-to-school-package-paladi-wrapper">
                                            <div class="back-to-school-package-paladi">
                                                Back-to-School Package [Paladin]
                                            </div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">Mark of Honor [3day]</div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">Wings Headband [365 days]</div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">Wings Headband [365 days]</div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">Wings Headband [365 days]</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="frame-wrapper20">
                                <div class="frame-parent13">
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">1,320</div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">1,320</div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">1,320</div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">1,320</div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">1,320</div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper7">
                                        <div class="apr-8-2024-1020pm-wrapper">
                                            <div class="mark-of-honor">1,320</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
