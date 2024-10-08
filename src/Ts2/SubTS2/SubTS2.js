import './SubTS2.css';

export default function SubTS2() {
    return (
        <div className="SubTS2">
            <div class="sub-top">
                <div class="sub_top_bg"></div>
                <div class="container-2">
                    <div class="container-wrapper">
                        <div class="container-3">
                            <div class="">
                                <div class="text-wrapper-4">Twelve Sky 2</div>
                            </div>
                            <div class="">
                                <p class="p">
                                    Join the immersive world of Twelve Sky 2 and experience unparalleled PvP combat.
                                    Explore vast landscapes, forge alliances, and conquer your foes.
                                </p>
                            </div>
                            <div class="">
                                <div class="border">
                                    <img
                                        alt=""
                                        class="SVG-margin-2"
                                        src={require('../../assets/images/ico_fb.svg').default}
                                    />
                                    <div class="container-7">
                                        <a
                                            href="https://www.facebook.com/12sky2.official/"
                                            target="_blank"
                                            class="text-wrapper-5"
                                        >
                                            FACEBOOK
                                        </a>
                                    </div>
                                </div>
                                <div class="border">
                                    <img
                                        alt=""
                                        class="SVG-margin-3"
                                        src={require('../../assets/images/ico_ds.svg').default}
                                    />
                                    <div class="container-7">
                                        <a
                                            href="https://discord.com/invite/YHCmW3vNSy"
                                            target="_blank"
                                            class="text-wrapper-5"
                                        >
                                            DISCORD
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-wrapper">
                        <a href="https://cdn1-12sky2.geniusorc.com/fullclient/GOE_TS2_Full_Client.zip" class="button-3">
                            <img
                                alt=""
                                class="SVG-margin-4"
                                src={require('../../assets/images/ico_win2.svg').default}
                            />
                            <div class="container-8">
                                <div class="text-wrapper-6">DOWNLOAD</div>
                            </div>
                        </a>
                    </div>
                    <div class="game-card">
                        <img alt="" class="image-shadow" src={require('../../assets/images/game_card_ts2.png')} />
                        <div class="logo-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
