import './Form.css';
import ModalPopup from '../../components/Modalpopup/Modalpopup.js';

export default function Form(props) {
    return (
        <div className="Form">
            <div class="instance-parent">
                <div class="logo-parent">
                    {props.logo === 'ts2' ? (
                        <img alt="" class="logo-ts2-icon" src={require('../../assets/images/logo_ts2.png')} />
                    ) : (
                        <img alt="" class="logo-ts2-icon" src={require('../../assets/images/logo_aika.png')} />
                    )}
                    <div class="frame-parent">
                        <div class="frame">
                            <div class="form_input">
                                <div class="form_title">ID</div>
                                <input class="input" type="text" name="email" placeholder=""></input>
                            </div>
                            <div class="johndoeexamplecom-parent">
                                <div class="johndoeexamplecom1">
                                    <ul class="only-lowercase-letters-are-all">
                                        <li>You must agree to the following terms to ensure smooth gameplay.</li>
                                    </ul>
                                </div>
                                <div class="johndoeexamplecom2">
                                    <ul class="only-lowercase-letters-are-all">
                                        <li>
                                            Please note that if you do not agree, access to the CBM Games system and
                                            gameplay may be restricted.
                                        </li>
                                    </ul>
                                </div>
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
                        <div class="button-parent">
                            <a href="./guild_register" class="button-2">
                                <div class="text">Confirm</div>
                            </a>
                            <a href="./guild_register" class="button-1">
                                <div class="text">Cancel</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
