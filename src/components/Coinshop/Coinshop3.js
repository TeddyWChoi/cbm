import './Coinshop.css';

export default function Coinshop() {
    return (
        <div className="Coinshop">
            <div class="instance-parent">
                <div class="coinshop_wrapper">
                    <div class="coin-box">
                        <div class="frame-container">
                            <div class="group-group">
                                <img alt="" class="group-icon1" src={require('../../assets/images/coin.svg').default} />
                                <b class="text">550</b>
                            </div>
                            <div class="bonus-330030-wrapper">
                                <div class="bonus-330030">500 + 50 {'(10%)'}</div>
                            </div>
                        </div>
                        <img alt="" class="icon" src={require('../../assets/images/item1.png')} />
                        <div class="buy-wrapper">
                            <b class="text">Buy $4.99</b>
                        </div>
                        <div class="tag">
                            <div class="bonus-wrapper">
                                <div class="bonus">
                                    <img alt="" src={require('../../assets/images/tag10.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="coin-box">
                        <div class="frame-container">
                            <div class="group-group">
                                <img alt="" class="group-icon1" src={require('../../assets/images/coin.svg').default} />
                                <b class="text">1,100</b>
                            </div>
                            <div class="bonus-330030-wrapper">
                                <div class="bonus-330030">1,000 + 100 {'(10%)'}</div>
                            </div>
                        </div>
                        <img alt="" class="icon" src={require('../../assets/images/item2.png')} />
                        <div class="buy-wrapper">
                            <b class="text">Buy $9.99</b>
                        </div>
                        <div class="tag">
                            <div class="bonus-wrapper">
                                <div class="bonus">
                                    <img alt="" src={require('../../assets/images/tag10.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="coin-box coin20">
                        <div class="frame-container">
                            <div class="group-group">
                                <img alt="" class="group-icon1" src={require('../../assets/images/coin.svg').default} />
                                <b class="text">2,400</b>
                            </div>
                            <div class="bonus-330030-wrapper">
                                <div class="bonus-330030">2,000 + 400 {'(20%)'}</div>
                            </div>
                        </div>
                        <img alt="" class="icon" src={require('../../assets/images/item3.png')} />
                        <div class="buy-wrapper">
                            <b class="text">Buy $19.99</b>
                        </div>
                        <div class="tag">
                            <div class="bonus-wrapper">
                                <div class="bonus">
                                    <img alt="" src={require('../../assets/images/tag20.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="coin-box coin25">
                        <div class="frame-container">
                            <div class="group-group">
                                <img alt="" class="group-icon1" src={require('../../assets/images/coin.svg').default} />
                                <b class="text">6,563</b>
                            </div>
                            <div class="bonus-330030-wrapper">
                                <div class="bonus-330030">5,000 + 250 Bonus + 1,313 {'(25%)'}</div>
                            </div>
                        </div>
                        <img alt="" class="icon3" src={require('../../assets/images/item4.png')} />
                        <div class="buy-wrapper">
                            <b class="text">Buy $49.99</b>
                        </div>
                        <div class="tag">
                            <div class="bonus-wrapper">
                                <div class="bonus">
                                    <img alt="" src={require('../../assets/images/tag25.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="coin-box coin30">
                        <div class="frame-container">
                            <div class="group-group">
                                <img alt="" class="group-icon1" src={require('../../assets/images/coin.svg').default} />
                                <b class="text">14,300</b>
                            </div>
                            <div class="bonus-330030-wrapper">
                                <div class="bonus-330030">10,000 + 1,000 Bonus + 3,300 {'(30%)'}</div>
                            </div>
                        </div>
                        <img alt="" class="icon3" src={require('../../assets/images/item5.png')} />
                        <div class="buy-wrapper">
                            <b class="text">Buy $99.99</b>
                        </div>
                        <div class="tag">
                            <div class="bonus-wrapper">
                                <div class="bonus">
                                    <img alt="" src={require('../../assets/images/tag30.png')} />
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
