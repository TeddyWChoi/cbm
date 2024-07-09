import './Balance.css';

export default function Balance(props) {
    return (
        <div className="Balance">
            <div class="instance-parent">
                <div class="frame-wrapper">
                    <div class="frame-parent">
                        <div class="group-parent">
                            <img class="group-icon" alt="" src={require('../../assets/images/coin2.svg').default} />
                            <div class="frame-group">
                                <div class="current-balance-wrapper">
                                    <div class="current-balance">Current Balance</div>
                                </div>
                                <b class="b">3,000</b>
                            </div>
                        </div>
                        <a href="#" class="button-3">
                            <b class="text">{props.button}</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
