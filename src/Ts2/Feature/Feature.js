import './Feature.css';

export default function Feature() {
    return (
        <div className="Feature">
            <div class="sub">
                <div class="sub-container">
                    <div id="video" class="container-video">
                        <div class="sub-container1">
                            <b class="heading">Video & Screenshots</b>
                            <div class="buttons-container">
                                <div class="button">
                                    <img alt="" class="icon" alt="" src={require('../../assets/images/btn_left.png')} />
                                </div>
                                <div class="button">
                                    <img
                                        alt=""
                                        class="icon"
                                        alt=""
                                        src={require('../../assets/images/btn_right.png')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="video_container">
                            <div class="picture">
                                <img alt="" alt="" src={require('../../assets/images/video_sample1.jpg')} />
                            </div>
                            <div class="video">
                                <div class="video_margin">
                                    <img alt="" alt="" src={require('../../assets/images/video_sample1.jpg')} />
                                </div>
                                <div class="">
                                    <img alt="" alt="" src={require('../../assets/images/video_sample1.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="info" class="container-info">
                        <b class="heading1">Info</b>
                        <div class="margin-parent">
                            <div class="margin4">
                                <div class="container1">
                                    <div class="container2">
                                        <div class="genre">Genre</div>
                                    </div>
                                    <div class="container3">
                                        <div class="genre">MMORPG</div>
                                    </div>
                                </div>
                            </div>
                            <div class="margin4">
                                <div class="container1">
                                    <div class="container2">
                                        <div class="genre">Publisher</div>
                                    </div>
                                    <div class="container3">
                                        <div class="genre">CBM Interactive Inc.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="container7">
                                <div class="container2">
                                    <div class="genre">Developer</div>
                                </div>
                                <div class="container3">
                                    <div class="genre">Begagames Co., Ltd.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="overview" class="container-info">
                        <b class="heading1">Overview</b>
                        <div class="paragraph">
                            Dive into the dynamic and action-packed world of Twelve Sky 2, a martial arts-themed MMORPG
                            that offers a thrilling blend of intense PvP combat, intricate skill systems, and rich lore.
                            Set in an expansive and beautifully designed landscape, players choose from three powerful
                            factions, each with its unique abilities and combat styles. Engage in epic battles, master
                            advanced martial arts techniques, and participate in massive clan wars that determine the
                            fate of your faction. With a variety of quests, dungeons, and player-driven economy, Twelve
                            Sky 2 provides a deeply immersive and challenging experience for both new and veteran
                            players alike. Join the fight, rise through the ranks, and become a legendary warrior in the
                            world of Twelve Sky 2.
                        </div>
                    </div>
                    <div id="system" class="container-system">
                        <div class="sub-container2">
                            <b class="heading">System Requirements</b>
                        </div>
                        <div class="sub-container3">
                            <div class="card">
                                <div class="container10">
                                    <b class="minimum">Minimum</b>
                                    <div class="table">
                                        <div class="row">
                                            <div class="data">
                                                <div class="container2">
                                                    <div class="genre">OS</div>
                                                </div>
                                            </div>
                                            <div class="data1">
                                                <div class="container2">
                                                    <div class="genre">Windows 98, XP, 2000</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="data">
                                                <div class="container2">
                                                    <div class="genre">CPU</div>
                                                </div>
                                            </div>
                                            <div class="data1">
                                                <div class="container2">
                                                    <div class="genre">Pentium III 800 Mhz</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="data">
                                                <div class="container2">
                                                    <div class="genre">Memory</div>
                                                </div>
                                            </div>
                                            <div class="data1">
                                                <div class="container2">
                                                    <div class="genre">256 GB RAM</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="data">
                                                <div class="container2">
                                                    <div class="genre">Hard Drive</div>
                                                </div>
                                            </div>
                                            <div class="data1">
                                                <div class="container2">
                                                    <div class="genre">Over 3GB</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="data">
                                                <div class="container2">
                                                    <div class="genre">GPU</div>
                                                </div>
                                            </div>
                                            <div class="data1">
                                                <div class="container2">
                                                    <div class="genre">GeForce FX 5200 or Radeon 7500 64 MB</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="data">
                                                <div class="container2">
                                                    <div class="genre">
                                                        <p class="latest-drivers">Latest Drivers & Software</p>
                                                        <p class="latest-drivers">&nbsp;</p>
                                                        <p class="latest-drivers">&nbsp;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="data11">
                                                <div class="container2">
                                                    <a href="#" class="download-link">
                                                        AMD Download Link
                                                    </a>
                                                    <a href="#" class="download-link">
                                                        intel Download Link
                                                    </a>
                                                    <a href="#" class="download-link">
                                                        NVIDIA Download Link
                                                    </a>
                                                    <a href="#" class="download-link">
                                                        Microsoft DirectX Download Link
                                                    </a>
                                                    <a href="#" class="download-link">
                                                        Microsoft Visual C++ Download Link
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="container23">
                                    <b class="minimum">Recommended</b>
                                    <div class="table">
                                        <div class="row">
                                            <div class="data">
                                                <div class="container2">
                                                    <div class="genre">OS</div>
                                                </div>
                                            </div>
                                            <div class="data1">
                                                <div class="container2">
                                                    <div class="genre">
                                                        Any Windows version higher than the minimum requirement
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="data">
                                                <div class="container2">
                                                    <div class="genre">CPU</div>
                                                </div>
                                            </div>
                                            <div class="data1">
                                                <div class="container2">
                                                    <div class="genre">Pentium IV 2.4 Ghz</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="data">
                                                <div class="container2">
                                                    <div class="genre">Memory</div>
                                                </div>
                                            </div>
                                            <div class="data1">
                                                <div class="container2">
                                                    <div class="genre">512 GB RAM</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="data">
                                                <div class="container2">
                                                    <div class="genre">Hard Drive</div>
                                                </div>
                                            </div>
                                            <div class="data1">
                                                <div class="container2">
                                                    <div class="genre">Over 3GB</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="data">
                                                <div class="container2">
                                                    <div class="genre">GPU</div>
                                                </div>
                                            </div>
                                            <div class="data1">
                                                <div class="container2">
                                                    <div class="genre">GeForce FX 5600 or Radeon 9500 128 MB</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
