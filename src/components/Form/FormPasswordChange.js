import './Form.css';

export default function Form(props) {
    return (
        <div className="Form">
            <div class="instance-parent">
                <div class="logo-parent">
                    <div class="logo">
                        {props.logo === 'ts2' ? (
                            <img alt="" class="logo-ts2-icon" src={require('../../assets/images/logo_ts2.png')} />
                        ) : (
                            <img alt="" class="logo-ts2-icon" src={require('../../assets/images/logo_aika.png')} />
                        )}
                    </div>
                    <div class="frame-parent">
                        <div class="frame">
                            <div class="form_input">
                                <div class="form_title">Password</div>
                                <input class="input" type="password" name="password" placeholder=""></input>
                            </div>
                            <div class="johndoeexamplecom3">
                                <ul class="only-lowercase-letters-are-all">
                                    <li class="include-8-16-capital">
                                        Include 8-16 capital and lower case letters, numbers, and special characters.
                                    </li>
                                    <li>Usable special characters are !@#$%^&*()+=~_-</li>
                                </ul>
                            </div>

                            <div class="form_input">
                                <div class="form_title">Confirm Password</div>
                                <input class="input" type="password" name="password2" placeholder=""></input>
                            </div>
                            <div class="johndoeexamplecom5">
                                <ul class="only-lowercase-letters-are-all">
                                    <li>Password and Confirm Password are not matched.</li>
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
