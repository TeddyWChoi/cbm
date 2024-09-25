import AccountLnb from '../../components/AccountLnb/AccountLnb.js';
import './AccountDetail.css';

export default function AccountDetail(props) {
    return (
        <div className="AccountDetail">
            <AccountLnb account={'account2'} />

            <div class="myboard-form-parent">
                <div class="myboard-form">
                    <div class="th-parent">
                        <div class="th">
                            <div class="email">Email </div>
                        </div>
                        <div class="td">
                            <div class="divtd-cont">
                                <div class="jasonjmhangmailcom">jason.jm.han@gmail.com</div>
                            </div>
                            <div class="divtd-cont1">
                                <img
                                    alt=""
                                    class="phcheck-bold-icon"
                                    src={require('../../assets/images/ico_check.svg').default}
                                />
                                <div class="jasonjmhangmailcom">Verified</div>
                            </div>
                        </div>
                    </div>
                    <div class="th-parent">
                        <div class="th">
                            <div class="email">Nickname</div>
                        </div>
                        <div class="td1">
                            <div class="divtd-cont-wrapper">
                                <div class="divtd-cont2">
                                    <div class="jasonjmhangmailcom">jasonhan</div>
                                </div>
                            </div>
                            <div class="divtd-cont-wrapper">
                                <div class="divtd-cont3">
                                    <img
                                        class="phcheck-bold-icon"
                                        alt=""
                                        src={require('../../assets/images/ico_check.svg').default}
                                    />
                                    <div class="jasonjmhangmailcom">Can't be changed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="th-container">
                        <div class="th">
                            <div class="email">Password</div>
                        </div>
                        <div class="divtd-cont4">
                            <div class="frame-parent">
                                <div class="latest-change-may-19-2024-11-wrapper">
                                    <div class="jasonjmhangmailcom">Latest Change: May 19 2024 11:46PM</div>
                                </div>

                                <a href="./password_changed" class="abtn">
                                    Change Password
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
