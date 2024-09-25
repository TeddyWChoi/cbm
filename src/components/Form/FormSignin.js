import './Form.css';

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
                                <div class="form_title">Email Address</div>
                                <input class="input" type="text" name="email" placeholder=""></input>
                            </div>
                            <div class="form_input">
                                <div class="form_title">Password</div>
                                <input class="input" type="password" name="password" placeholder=""></input>
                            </div>
                        </div>

                        <img alt="" class="image-30-icon" src={require('../../assets/images/img_sample.png')} />
                        <a href={props.linkUrl} class="btn-black">
                            <b class="proceed">{props.linkTxt}</b>
                        </a>
                    </div>
                    <div class="terms-parent">
                        <div class="terms">
                            <a href="./find">Find Password</a>
                        </div>
                        <div class="terms">|</div>
                        <div class="terms">
                            <a href="./signup">Sign up for Free</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
