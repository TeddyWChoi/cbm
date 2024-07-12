import AccountLnb from '../../components/AccountLnb/AccountLnb.js';
import Balance from '../../components/Balance/Balance.js';
import './IngamePurchaseHistory.css';

export default function IngamePurchaseHistory(props) {
    return (
        <div className="IngamePurchaseHistory">
            <AccountLnb account={'account4'} />

            <div class="instance-parent">
                <Balance button={'Purchase History'} />

                <div class="frame-parent">
                    <div class="cash-filter-btn-parent">
                        <div class="cash-filter-btn">
                            <button href="#" class="div">
                                1 Week
                            </button>
                        </div>
                        <div class="cash-filter-btn">
                            <button class="div">1 Month</button>
                        </div>
                        <div class="cash-filter-btn">
                            <button class="div">6 Months</button>
                        </div>
                    </div>
                    <div class="frame-group2">
                        <div class="cash-filter-btn-parent">
                            <div class="divtd-cont">
                                <input class="select" type="text" value="2024-02-22"></input>
                                <a href="#" class="carboncalendar">
                                    <img
                                        class="vector-icon"
                                        alt=""
                                        src={require('../../assets/images/ico_calendar.svg').default}
                                    />
                                </a>
                            </div>
                            <b class="b">~</b>
                            <div class="divtd-cont">
                                <input class="select" type="text" value="2024-03-22"></input>
                                <a href="#" class="carboncalendar">
                                    <img
                                        class="vector-icon"
                                        alt=""
                                        src={require('../../assets/images/ico_calendar.svg').default}
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="cash-filter-btn3">
                            <button class="div">Search</button>
                        </div>
                    </div>
                </div>
                <div class="frame-container">
                    <div class="tab-parent">
                        <div class="tab">
                            <div class="li">
                                <div class="a">
                                    <b class="date">Date</b>
                                </div>
                            </div>
                            <div class="li">
                                <div class="a">
                                    <b class="date">Access Type</b>
                                </div>
                            </div>
                            <div class="li">
                                <div class="a">
                                    <b class="date">Product</b>
                                </div>
                            </div>
                            <div class="li">
                                <div class="a">
                                    <b class="date">Price</b>
                                </div>
                            </div>
                        </div>
                        <div class="tab1">
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Apr 8 2024 10:20PM</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">GAME</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Mark of Honor [15day]</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">1,320</div>
                                </div>
                            </div>
                        </div>
                        <div class="tab1">
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Apr 8 2024 10:20PM</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">GAME</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Mark of Honor [15day]</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">1,320</div>
                                </div>
                            </div>
                        </div>
                        <div class="tab1">
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Apr 8 2024 10:20PM</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">GAME</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Mark of Honor [15day]</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">1,320</div>
                                </div>
                            </div>
                        </div>
                        <div class="tab1">
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Apr 8 2024 10:20PM</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">GAME</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Mark of Honor [15day]</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">1,320</div>
                                </div>
                            </div>
                        </div>
                        <div class="tab1">
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Apr 8 2024 10:20PM</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">GAME</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Mark of Honor [15day]</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">1,320</div>
                                </div>
                            </div>
                        </div>
                        <div class="tab1">
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Apr 8 2024 10:20PM</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">GAME</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Mark of Honor [15day]</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">1,320</div>
                                </div>
                            </div>
                        </div>
                        <div class="tab1">
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Apr 8 2024 10:20PM</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">GAME</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Mark of Honor [15day]</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">1,320</div>
                                </div>
                            </div>
                        </div>
                        <div class="tab1">
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Apr 8 2024 10:20PM</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">GAME</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Mark of Honor [15day]</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">1,320</div>
                                </div>
                            </div>
                        </div>
                        <div class="tab1">
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Apr 8 2024 10:20PM</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">GAME</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Mark of Honor [15day]</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">1,320</div>
                                </div>
                            </div>
                        </div>
                        <div class="tab1">
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Apr 8 2024 10:20PM</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">GAME</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">Mark of Honor [15day]</div>
                                </div>
                            </div>
                            <div class="li4">
                                <div class="a">
                                    <div class="game">1,320</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="paging">
                        <a href="#" class="object">
                            <img class="icon-arrows" alt="" src={require('../../assets/images/ico_left.svg').default} />
                        </a>
                        <div class="object">
                            <ul>
                                <li class="num">
                                    <a href="#" class="div8">
                                        1
                                    </a>
                                </li>
                                <li class="num">
                                    <a href="#" class="div8">
                                        2
                                    </a>
                                </li>
                                <li class="num">
                                    <a href="#" class="div8">
                                        3
                                    </a>
                                </li>
                                <li class="num">
                                    <a href="#" class="div8">
                                        4
                                    </a>
                                </li>
                                <li class="num">
                                    <a href="#" class="div8">
                                        5
                                    </a>
                                </li>
                                <li class="num">
                                    <a href="#" class="div8">
                                        6
                                    </a>
                                </li>
                                <li class="num">
                                    <a href="#" class="div8">
                                        7
                                    </a>
                                </li>
                                <li class="num">
                                    <a href="#" class="div8">
                                        8
                                    </a>
                                </li>
                                <li class="num">
                                    <a href="#" class="div8">
                                        9
                                    </a>
                                </li>
                                <li class="num">
                                    <a href="#" class="div8">
                                        10
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a href="#" class="object1">
                            <img
                                class="icon-arrows1"
                                alt=""
                                src={require('../../assets/images/ico_right.svg').default}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}