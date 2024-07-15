import './Purchase.css';

export default function Purchase(props) {
    return (
        <div className="Purchase">
            <div class="instance-parent">
                <div class="logo-parent">
                    <div class="">
                        {props.logo === 'ts2' ? (
                            <img alt="" class="logo-ts2-icon" src={require('../../assets/images/logo_ts2.png')} />
                        ) : (
                            <img alt="" class="logo-ts2-icon" src={require('../../assets/images/logo_aika.png')} />
                        )}
                    </div>
                    <div class="frame-parent">
                        <div class="frame">
                            <div class="johndoeexamplecom-wrapper">
                                <b class="johndoeexamplecom">{props.messageTitle}</b>
                            </div>
                            <div class="johndoeexamplecom-container">
                                <div class="johndoeexamplecom1">{props.messageTxt}</div>
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
