import './Coinshop.css';

export default function Coinshop() {
    return (
        <div className="Coinshop">
            <div class="instance-parent">
                <div class="coinshop_wrapper">
                    <div class="coin-box">
                        <div class="frame-container">
                            <div class="group-group">
                                <img class="group-icon1" alt="" src={require('../../assets/images/coin.svg').default} />
                                <b class="text">500</b>
                            </div>
                            <div class="frame-child"></div>
                        </div>
                        <img class="icon" alt="" src={require('../../assets/images/item1.png')} />
                        <div class="buy-wrapper">
                            <b class="text">Buy $4.99</b>
                        </div>
                    </div>
                    <div class="coin-box">
                        <div class="frame-container">
                            <div class="group-group">
                                <img class="group-icon1" alt="" src={require('../../assets/images/coin.svg').default} />
                                <b class="text">1,000</b>
                            </div>
                            <div class="frame-child"></div>
                        </div>
                        <img class="icon" alt="" src={require('../../assets/images/item2.png')} />
                        <div class="buy-wrapper">
                            <b class="text">Buy $9.99</b>
                        </div>
                    </div>
                    <div class="coin-box">
                        <div class="frame-container">
                            <div class="group-group">
                                <img class="group-icon1" alt="" src={require('../../assets/images/coin.svg').default} />
                                <b class="text">2,000</b>
                            </div>
                            <div class="frame-child"></div>
                        </div>
                        <img class="icon" alt="" src={require('../../assets/images/item3.png')} />
                        <div class="buy-wrapper">
                            <b class="text">Buy $19.99</b>
                        </div>
                    </div>
                    <div class="coin-box">
                        <div class="frame-parent2">
                            <div class="group-group">
                                <img class="group-icon1" alt="" src={require('../../assets/images/coin.svg').default} />
                                <b class="text">5,250</b>
                            </div>
                            <div class="bonus-330030-wrapper">
                                <div class="bonus-330030">5,000 + 250 Bonus</div>
                            </div>
                        </div>
                        <img class="icon3" alt="" src={require('../../assets/images/item4.png')} />
                        <div class="buy-wrapper">
                            <b class="text">Buy $49.99</b>
                        </div>
                        <div class="tag">
                            <div class="bonus-wrapper">
                                <div class="bonus">
                                    <img alt="" src={require('../../assets/images/tag5.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="coin-box">
                        <div class="frame-parent2">
                            <div class="group-group">
                                <img class="group-icon1" alt="" src={require('../../assets/images/coin.svg').default} />
                                <b class="text">11,000</b>
                            </div>
                            <div class="bonus-330030-wrapper">
                                <div class="bonus-330030">10,000 + 1,000 Bonus</div>
                            </div>
                        </div>
                        <img class="icon3" alt="" src={require('../../assets/images/item5.png')} />
                        <div class="buy-wrapper">
                            <b class="text">Buy $99.99</b>
                        </div>
                        <div class="tag">
                            <div class="bonus-wrapper">
                                <div class="bonus">
                                    <img alt="" src={require('../../assets/images/tag10.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pregister2-check-wrapper">
                        <div class="pregister2-check">
                            <input type="checkbox" id="agree" name="agree" />
                            <label for="agree">
                                I consent to the payment and use of the service. And by accepting the EULA. I waive my
                                right to a refund or withdrawal.
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
