import './Balance.css';

export default function Balance(props) {
    return (
        <div className="Balance">
            <div class="points_border_wrap">
                <div class="points_border">
                    <p>Each time you purchase coins, points are accumulated.</p>
                    <p>Once you accumulate more than 5,000 points, you can convert them into coins.</p>
                    <p>&nbsp;</p>
                    <p>▶ Please note that conversions cannot be canceled once completed.</p>
                </div>
            </div>
            <div class="Balance_div">
                <div class="frame-wrapper">
                    <div class="frame-parent">
                        <div class="group-parent">
                            <img
                                alt=""
                                class="group-icon"
                                src={require('../../assets/images/ico_points.svg').default}
                            />
                            <div class="frame-group">
                                <div class="current-balance-wrapper">
                                    <div class="current-balance">Points</div>
                                </div>
                                <b class="b">1,500</b>
                            </div>
                        </div>
                        <a href={props.url} class="button-3">
                            <b class="text">{props.button}</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
