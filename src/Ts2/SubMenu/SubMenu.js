import './SubMenu.css';

export default function SubMenu(props) {
    switch (props.menu) {
        case 'news':
            return (
                <div className="SubMenu">
                    <div class="category">
                        <div class="section-title">
                            <div class="filters">
                                <div class="active button-text-dark">
                                    <a href="./news" class="text-wrapper-7">
                                        Announcement
                                    </a>
                                </div>
                                <div class="button-text-dark">
                                    <a href="./feature#video" class="text-wrapper-7">
                                        Video &amp; Screenshots
                                    </a>
                                </div>
                                <div class="button-text-dark">
                                    <a href="./feature#info" class="text-wrapper-7">
                                        Info
                                    </a>
                                </div>
                                <div class="button-text-dark">
                                    <a href="./feature#overview" class="text-wrapper-7">
                                        Overview
                                    </a>
                                </div>
                                <div class="button-text-dark">
                                    <a href="./feature#system" class="text-wrapper-7">
                                        System Requirements
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            return (
                <div className="SubMenu">
                    <div class="category">
                        <div class="section-title">
                            <div class="filters">
                                <div class="button-text-dark">
                                    <a href="./news" class="text-wrapper-7">
                                        Announcement
                                    </a>
                                </div>
                                <div class="active button-text-dark">
                                    <a href="./feature#video" class="text-wrapper-7">
                                        Video &amp; Screenshots
                                    </a>
                                </div>
                                <div class="button-text-dark">
                                    <a href="./feature#info" class="text-wrapper-7">
                                        Info
                                    </a>
                                </div>
                                <div class="button-text-dark">
                                    <a href="./feature#overview" class="text-wrapper-7">
                                        Overview
                                    </a>
                                </div>
                                <div class="button-text-dark">
                                    <a href="./feature#system" class="text-wrapper-7">
                                        System Requirements
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}
