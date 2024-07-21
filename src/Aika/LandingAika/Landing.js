import './Landing.css';

export default function Landing() {
    return (
        <div className="Landing">
            <div class="landing_wrapper">
                <div class="landing_header_wrapper">
                    <div class="landing_header">
                        <img class="logo-ts2-icon" alt="" src={require('../../assets/images/logo_aika.png')} />
                        <a href="./aika/news" class="btn-home">
                            <img class="vector-icon" alt="" src={require('../../assets/images/ico_home.png')} />
                            <div class="homepage">HOMEPAGE</div>
                        </a>
                    </div>
                </div>
                <video
                    id="sec-01-video"
                    class="landing_video"
                    playsinline=""
                    autoplay=""
                    muted="muted"
                    loop="loop"
                    poster="../../assets/images/bg_landing_ts2.jpg"
                >
                    <source type="video/mp4" src={require('../../assets/images/aika.mp4')} />
                </video>

                <div class="lading_txt">
                    <div class="landing_txt_img_wrapper">
                        <img class="landing_txt_img" alt="" src={require('../../assets/images/landing_aika.png')} />
                    </div>
                    <div class="btn_landing">
                        <a href="./aika/feature">
                            <img class="frame-icon" alt="" src={require('../../assets/images/btn_aika.png')} />
                        </a>
                    </div>

                    <div class="landing_logos">
                        <img class="bega" alt="" src={require('../../assets/images/logo_ha.png')} />

                        <img class="image-14-icon" alt="" src={require('../../assets/images/logo_cbm.svg').default} />
                    </div>
                    <div class="cbm-interactive-inc">© 2024 CBM Interactive Inc. All Right Reserved</div>
                </div>
            </div>
        </div>
    );
}
