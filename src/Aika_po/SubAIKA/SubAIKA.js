import './SubAIKA.css';

export default function SubAIKA() {
    return (
        <div className="SubAIKA">
            <div class="sub-top">
                <div class="sub_top_bg"></div>
                <div class="container-2">
                    <div class="container-wrapper">
                        <div class="container-3">
                            <div class="">
                                <div class="text-wrapper-4">Aika Online Global</div>
                            </div>
                            <div class="">
                                <p class="p">
                                    Join forces with players worldwide, defend your realm, and rise to glory in Aika
                                    Online Global!
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
                                            href="https://www.facebook.com/aika.online.official/"
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
                                            href="https://discord.com/invite/FqmnW5m5Cb"
                                            target="_blank"
                                            class="text-wrapper-5"
                                        >
                                            DISCORD
                                        </a>
                                    </div>
                                </div>
                                <div class="border">
                                    <img
                                        alt=""
                                        class="SVG-margin-3"
                                        src={require('../../assets/images/ico_fd.svg').default}
                                    />
                                    <div class="container-7">
                                        <a
                                            href="https://aikaonlinena.fandom.com/wiki/AikaOnlineNA_Wiki"
                                            target="_blank"
                                            class="text-wrapper-5"
                                        >
                                            FANDOM
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-wrapper">
                        <a
                            href="https://patch-aikaonline.cbmgames.com/fullclient/AikaOnlineGlobal_Setup.exe"
                            class="button-3"
                        >
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
                        <img alt="" class="image-shadow" src={require('../../assets/images/game_card_aika.png')} />
                        <div class="logo-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
