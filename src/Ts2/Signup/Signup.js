import './Signup.css';
import ModalPopup from '../../components/Modalpopup/Modalpopup.js';

export default function Signup(props) {
    return (
        <div className="Signup">
            <div class="instance-parent">
                <div class="logo-parent">
                    <div class="logo">
                        <img alt="" class="logo-ts2-icon" src={require('../../assets/images/logo_ts2.png')} />
                    </div>
                    <div class="frame-parent">
                        <div class="frame">
                            <div class="form_input">
                                <div class="form_title">Email Address</div>
                                <input class="input" type="text" name="email" placeholder=""></input>
                            </div>
                            <div class="johndoeexamplecom-parent">
                                <div class="johndoeexamplecom1">
                                    <ul class="only-lowercase-letters-are-all">
                                        <li>Only lowercase letters are allowed.</li>
                                    </ul>
                                </div>
                                <div class="johndoeexamplecom2">
                                    <ul class="only-lowercase-letters-are-all">
                                        <li>Length of an email should be between 8 and 40 words.</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="form_input">
                                <div class="form_title">Nickname</div>
                                <input class="input" type="text" name="nickname" placeholder=""></input>
                            </div>
                            <div class="johndoeexamplecom3">
                                <ul class="only-lowercase-letters-are-all">
                                    <li>Must be 8-50 characters long.</li>
                                </ul>
                            </div>

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
                        <div class="frame-group">
                            <div class="pregister2-check-parent">
                                <div class="pregister2-check">
                                    <input type="checkbox" id="agree" name="agree" />
                                    <label for="agree" class="i-agree-to">
                                        I agree to the terms of TOS & EULA
                                    </label>
                                    <ModalPopup agree={'agree1'} />
                                </div>
                                <div class="pregister2-check1">
                                    <div class="i-agree-to">[Required]</div>
                                </div>
                            </div>
                            <div class="pregister2-check-parent">
                                <div class="pregister2-check">
                                    <input type="checkbox" id="agree2" name="agree2" />
                                    <label for="agree2" class="i-agree-to">
                                        I agree to the terms of Privacy Policy
                                    </label>
                                    <ModalPopup agree={'agree2'} />
                                </div>
                                <div class="pregister2-check1">
                                    <div class="i-agree-to">[Required]</div>
                                </div>
                            </div>
                            <div class="pregister2-check-parent">
                                <div class="pregister2-check">
                                    <input type="checkbox" id="agree3" name="agree3" />
                                    <label for="agree3" class="i-agree-to">
                                        I agree to receive email newsletters
                                    </label>
                                    <ModalPopup agree={'agree3'} />
                                </div>
                                <div class="pregister2-check1">
                                    <div class="i-agree-to">[Optional]</div>
                                </div>
                            </div>
                        </div>
                        <img alt="" class="image-30-icon" src={require('../../assets/images/img_sample.png')} />
                        <a href={props.linkUrl} class="btn-black">
                            <b class="proceed">{props.linkTxt}</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
