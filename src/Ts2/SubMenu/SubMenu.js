import './SubMenu.css';
import { Link } from 'react-router-dom';
export default function SubMenu(props) {
    switch (props.menu) {
        case 'news':
            return (
                <div className="SubMenu">
                    <div class="category">
                        <div class="section-title">
                            <div class="filters">
                                <div class="active button-text-dark">
                                    <Link to="/ts2/news#news" class="text-wrapper-7">
                                        Announcement
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/ts2/calendar#calendar" class="text-wrapper-7">
                                        Calendar
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/ts2/feature#video" class="text-wrapper-7">
                                        Video &amp; Screenshots
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/ts2/feature#info" class="text-wrapper-7">
                                        Info
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/ts2/feature#overview" class="text-wrapper-7">
                                        Overview
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/ts2/feature#system" class="text-wrapper-7">
                                        System Requirements
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'calendar':
            return (
                <div className="SubMenu">
                    <div class="category">
                        <div class="section-title">
                            <div class="filters">
                                <div class=" button-text-dark">
                                    <Link to="/ts2/news#news" class="text-wrapper-7">
                                        Announcement
                                    </Link>
                                </div>
                                <div class="active button-text-dark">
                                    <Link to="/ts2/calendar#calendar" class="text-wrapper-7">
                                        Calendar
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/ts2/feature#video" class="text-wrapper-7">
                                        Video &amp; Screenshots
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/ts2/feature#info" class="text-wrapper-7">
                                        Info
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/ts2/feature#overview" class="text-wrapper-7">
                                        Overview
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/ts2/feature#system" class="text-wrapper-7">
                                        System Requirements
                                    </Link>
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
                                <div class=" button-text-dark">
                                    <Link to="/ts2/news#news" class="text-wrapper-7">
                                        Announcement
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/ts2/calendar#calendar" class="text-wrapper-7">
                                        Calendar
                                    </Link>
                                </div>
                                <div class="active button-text-dark">
                                    <Link to="/ts2/feature#video" class="text-wrapper-7">
                                        Video &amp; Screenshots
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/ts2/feature#info" class="text-wrapper-7">
                                        Info
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/ts2/feature#overview" class="text-wrapper-7">
                                        Overview
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/ts2/feature#system" class="text-wrapper-7">
                                        System Requirements
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}
