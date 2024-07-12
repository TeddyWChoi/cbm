import './Vaildcode.css';

export default function Vaildcode(props) {
    return (
        <div className="Vaildcode">
            <div class="instance-parent">
                <div class="logo-parent">
                    <div class="logo">
                        <img alt="" class="logo-ts2-icon" src={require('../../assets/images/logo_ts2.png')} />
                    </div>
                    <div class="johndoeexamplecom-parent">
                        <b class="johndoeexamplecom">Input Verification Code</b>
                        <b class="johndoeexamplecom">puckmind@gmail.com</b>
                    </div>
                    <div class="frame-parent">
                        <div class="frame">
                            <div class="form_input">
                                <div class="form_title">Verification Code</div>
                                <input class="input" type="text" name="code" placeholder=""></input>
                            </div>
                            <div class="johndoeexamplecom3">
                                <ul class="only-lowercase-letters-are-all">
                                    <li>Please check your registered email for a Verification Code.</li>
                                    <li>Look in your "spam" folder if you don't see it in a few minutes.</li>
                                </ul>
                            </div>
                        </div>

                        <a href={props.linkUrl} class="btn-black">
                            <b class="proceed">{props.linkTxt}</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
