import './Balance.css';

export default function Balance(props) {
    return (
        <div className="Balance">
            <div class="Balance_div">
                <div class="frame-wrapper">
                    <div class="frame-parent">
                        <div class="group-parent">
                            <div class="frame-parent">
                                <div class="frame-group">
                                    <div class="web-coupon-wrapper">
                                        <b class="web-coupon">Web Coupon</b>
                                    </div>

                                    <input class="input" placeholder="Enter the coupon code" />
                                </div>
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
