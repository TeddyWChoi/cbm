import './AccountLnb.css';

export default function AccountLnb(props) {
    switch (props.account) {
        case 'account1':
            return (
                <div className="AccountLnb">
                    <div class="account-sidebar">
                        <ul>
                            <li class="active home-nav">
                                <a href="./accountinformation">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="ic-dashboard-icon"
                                            src={require('../../assets/images/ico_account1.svg').default}
                                        />
                                        <div class="account-information">Account Information</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./accountdetail">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="hugeiconsuser-account"
                                            src={require('../../assets/images/ico_account2.svg').default}
                                        />
                                        <div class="account-information">Account Details</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./loginhistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="icbaseline-history-icon"
                                            src={require('../../assets/images/ico_account3.svg').default}
                                        />
                                        <div class="account-information">Login History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./ingamepurchasehistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="carbonpurchase-icon"
                                            src={require('../../assets/images/ico_account4.svg').default}
                                        />
                                        <div class="account-information">In-game Purchase History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./coinpurchasehistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="hugeiconsuser-account"
                                            src={require('../../assets/images/ico_account5.svg').default}
                                        />
                                        <div class="account-information">Coin Purchase History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="button">
                            <b class="text">Sign Out</b>
                        </div>
                    </div>
                </div>
            );
        case 'account2':
            return (
                <div className="AccountLnb">
                    <div class="account-sidebar">
                        <ul>
                            <li class="home-nav">
                                <a href="./accountinformation">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="ic-dashboard-icon"
                                            src={require('../../assets/images/ico_account1.svg').default}
                                        />
                                        <div class="account-information">Account Information</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="active home-nav">
                                <a href="./accountdetail">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="hugeiconsuser-account"
                                            src={require('../../assets/images/ico_account2.svg').default}
                                        />
                                        <div class="account-information">Account Details</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./loginhistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="icbaseline-history-icon"
                                            src={require('../../assets/images/ico_account3.svg').default}
                                        />
                                        <div class="account-information">Login History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./ingamepurchasehistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="carbonpurchase-icon"
                                            src={require('../../assets/images/ico_account4.svg').default}
                                        />
                                        <div class="account-information">In-game Purchase History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./coinpurchasehistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="hugeiconsuser-account"
                                            src={require('../../assets/images/ico_account5.svg').default}
                                        />
                                        <div class="account-information">Coin Purchase History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="button">
                            <b class="text">Sign Out</b>
                        </div>
                    </div>
                </div>
            );
        case 'account3':
            return (
                <div className="AccountLnb">
                    <div class="account-sidebar">
                        <ul>
                            <li class="home-nav">
                                <a href="./accountinformation">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="ic-dashboard-icon"
                                            src={require('../../assets/images/ico_account1.svg').default}
                                        />
                                        <div class="account-information">Account Information</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./accountdetail">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="hugeiconsuser-account"
                                            src={require('../../assets/images/ico_account2.svg').default}
                                        />
                                        <div class="account-information">Account Details</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="active home-nav">
                                <a href="./loginhistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="icbaseline-history-icon"
                                            src={require('../../assets/images/ico_account3.svg').default}
                                        />
                                        <div class="account-information">Login History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./ingamepurchasehistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="carbonpurchase-icon"
                                            src={require('../../assets/images/ico_account4.svg').default}
                                        />
                                        <div class="account-information">In-game Purchase History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./coinpurchasehistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="hugeiconsuser-account"
                                            src={require('../../assets/images/ico_account5.svg').default}
                                        />
                                        <div class="account-information">Coin Purchase History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="button">
                            <b class="text">Sign Out</b>
                        </div>
                    </div>
                </div>
            );
        case 'account4':
            return (
                <div className="AccountLnb">
                    <div class="account-sidebar">
                        <ul>
                            <li class="home-nav">
                                <a href="./accountinformation">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="ic-dashboard-icon"
                                            src={require('../../assets/images/ico_account1.svg').default}
                                        />
                                        <div class="account-information">Account Information</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./accountdetail">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="hugeiconsuser-account"
                                            src={require('../../assets/images/ico_account2.svg').default}
                                        />
                                        <div class="account-information">Account Details</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./loginhistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="icbaseline-history-icon"
                                            src={require('../../assets/images/ico_account3.svg').default}
                                        />
                                        <div class="account-information">Login History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="active home-nav">
                                <a href="./ingamepurchasehistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="carbonpurchase-icon"
                                            src={require('../../assets/images/ico_account4.svg').default}
                                        />
                                        <div class="account-information">In-game Purchase History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./coinpurchasehistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="hugeiconsuser-account"
                                            src={require('../../assets/images/ico_account5.svg').default}
                                        />
                                        <div class="account-information">Coin Purchase History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="button">
                            <b class="text">Sign Out</b>
                        </div>
                    </div>
                </div>
            );
        case 'account5':
            return (
                <div className="AccountLnb">
                    <div class="account-sidebar">
                        <ul>
                            <li class="home-nav">
                                <a href="./accountinformation">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="ic-dashboard-icon"
                                            src={require('../../assets/images/ico_account1.svg').default}
                                        />
                                        <div class="account-information">Account Information</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./accountdetail">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="hugeiconsuser-account"
                                            src={require('../../assets/images/ico_account2.svg').default}
                                        />
                                        <div class="account-information">Account Details</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./loginhistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="icbaseline-history-icon"
                                            src={require('../../assets/images/ico_account3.svg').default}
                                        />
                                        <div class="account-information">Login History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="home-nav">
                                <a href="./ingamepurchasehistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="carbonpurchase-icon"
                                            src={require('../../assets/images/ico_account4.svg').default}
                                        />
                                        <div class="account-information">In-game Purchase History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li class="active home-nav">
                                <a href="./coinpurchasehistory">
                                    <div class="ic-dashboard-parent">
                                        <img
                                            alt=""
                                            class="hugeiconsuser-account"
                                            src={require('../../assets/images/ico_account5.svg').default}
                                        />
                                        <div class="account-information">Coin Purchase History</div>
                                    </div>
                                    <div class="chevron-right-24px">
                                        <img
                                            alt=""
                                            class="chevron-right-icon"
                                            src={require('../../assets/images/ico_arrow_right.svg').default}
                                        />
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <a href="/ts2" class="button">
                            <b class="text">Sign Out</b>
                        </a>
                    </div>
                </div>
            );
        default:
            break;
    }
}
