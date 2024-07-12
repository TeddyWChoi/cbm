import './Footer.css';

export default function Footer() {
    return (
        <div className="Footer">
            <footer class="footer">
                <div class="footer-inner">
                    {/* <div class="list">
                        <div class="item">
                            <div class="link-2">
                                <a href="/about" class="text-wrapper">
                                    About CBM Interactive
                                </a>
                            </div>
                        </div>
                    </div> */}
                    <div class="list-2">
                        <div class="item-2">
                            <div class="link-2">
                                <a href="#!">Privacy Policy</a>
                            </div>
                        </div>
                        <div class="item-2">
                            <div class="text-wrapper-8">|</div>
                            <div class="link-2">
                                <a href="#!">UGC</a>
                            </div>
                        </div>
                        <div class="item-2">
                            <div class="text-wrapper-8">|</div>
                            <div class="link-2">
                                <a href="#!">TOS &amp; EULA</a>
                            </div>
                        </div>
                    </div>
                    <div class="container-5">
                        <div>
                            <a href="./">
                                <img alt="" class="image-5" src={require('../../assets/images/logo_cbm.svg').default} />
                            </a>
                        </div>
                        <div>
                            <a href="./">
                                <img
                                    alt=""
                                    class="image-6"
                                    src={require('../../assets/images/logo_cbm2.svg').default}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="background">
                    <div class="container-6">
                        <p class="text-wrapper-9">ⓒ 2024 CBM Interactive Inc. All Right Reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
