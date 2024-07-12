import './Find.css';

export default function Find(props) {
    return (
        <div className="Find">
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
