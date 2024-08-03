import './Feature.css';
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VideoImageSlider from '../../components/VideoImageSlider/VideoImageSlider';

export default function Feature() {
    /* 슬라이더관련 */
    const sliderRef = useRef();

    const items = [
        { type: 'video', id: 'dQw4w9WgXcQ', title: 'Video 1' },
        { type: 'image', src: 'https://via.placeholder.com/800x450', title: 'Image 1' },
        { type: 'video', id: 'J---aiyznGQ', title: 'Video 2' },
    ];

    const handleOpenModal = (item) => {
        if (sliderRef.current) {
            sliderRef.current.openModal(item);
        }
    };

    /* 서브메뉴 내부링크 관련 */
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="Feature">
            <VideoImageSlider ref={sliderRef} initialItem={items} />

            <div class="sub">
                <div class="sub-container">
                    <div id="video" class="container-video">
                        <div class="sub-container1">
                            <b class="heading">Video & Screenshots</b>
                            <div class="buttons-container">
                                <div class="button">
                                    <img alt="" class="icon" src={require('../../assets/images/btn_left.png')} />
                                </div>
                                <div class="button">
                                    <img alt="" class="icon" src={require('../../assets/images/btn_right.png')} />
                                </div>
                            </div>
                        </div>
                        <div class="video_container">
                            <div class="picture">
                                <img
                                    onClick={() => handleOpenModal(items[0])}
                                    alt=""
                                    src={require('../../assets/images/video_sample1.jpg')}
                                />
                            </div>
                            <div class="video">
                                <div class="video_margin">
                                    <img
                                        onClick={() => handleOpenModal(items[1])}
                                        alt=""
                                        src={require('../../assets/images/video_sample1.jpg')}
                                    />
                                </div>
                                <div class="">
                                    <img
                                        onClick={() => handleOpenModal(items[2])}
                                        alt=""
                                        src={require('../../assets/images/video_sample1.jpg')}
                                    />
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
                            <div class="margin4">
                                <div class="container1">
                                    <div class="container2">
                                        <div class="genre">Supported Languages</div>
                                    </div>
                                    <div class="container3">
                                        <div class="genre">English</div>
                                    </div>
                                </div>
                            </div>
                            <div class="container7">
                                <div class="container2">
                                    <div class="genre">Developer</div>
                                </div>
                                <div class="container3">
                                    <div class="genre">HANBITSOFT INC.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="overview" class="container-info">
                        <b class="heading1">Overview</b>
                        <div class="paragraph">
                            Aika Online Global is a thrilling fantasy MMORPG where players join one of five nations to
                            engage in epic, large-scale PvP battles for dominance.  Featuring a unique Pran system,
                            players can raise and customize fairy-like companions for enhanced combat support.  Choose
                            from diverse classes like Warrior, Paladin, Rifleman, Dual Gunner, Warlock, and Cleric to
                            tailor your playstyle.  Experience a perfect balance of PvP and PvE content with challenging
                            dungeons, quests, and intense boss battles.  Form powerful guilds, strategize with allies,
                            and participate in regular events to keep the adventure fresh and exciting.
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
                                                    <div class="genre">Window 2000, XP, Vista, 7</div>
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
                                                    <div class="genre">Pentium4 1.8GHz</div>
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
                                                    <div class="genre">1 GB Ram</div>
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
                                                    <div class="genre">Over 2GB</div>
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
                                                    <div class="genre">Over 256 MB 3D</div>
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
                                                    <a
                                                        href="https://www.amd.com/en/support/download/drivers.html"
                                                        target="_blank"
                                                        class="download-link"
                                                    >
                                                        AMD Download Link
                                                    </a>
                                                    <a href="#!" class="download-link">
                                                        intel Download Link
                                                    </a>
                                                    <a
                                                        href="https://www.nvidia.co.kr/Download/index.aspx?lang=en"
                                                        target="_blank"
                                                        class="download-link"
                                                    >
                                                        NVIDIA Download Link
                                                    </a>
                                                    <a
                                                        href="https://www.microsoft.com/en-us/download/details.aspx?id=35"
                                                        target="_blank"
                                                        class="download-link"
                                                    >
                                                        Microsoft DirectX Download Link
                                                    </a>
                                                    <a href="#!" class="download-link">
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
                                                    <div class="genre">Pentium dual core</div>
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
                                                    <div class="genre">2 GB Ram</div>
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
                                                    <div class="genre">Over 2GB</div>
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
                                                    <div class="genre">Over 512 MB 3D</div>
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
