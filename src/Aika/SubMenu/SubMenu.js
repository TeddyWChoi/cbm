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
                                    <Link to="/aika/news#news" class="text-wrapper-7">
                                        Announcement
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/calendar#calendar" class="text-wrapper-7">
                                        Calendar
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/feature#video" class="text-wrapper-7">
                                        Video &amp; Screenshots
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/feature#info" class="text-wrapper-7">
                                        Info
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/feature#overview" class="text-wrapper-7">
                                        Overview
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/feature#system" class="text-wrapper-7">
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
                                    <Link to="/aika/news#news" class="text-wrapper-7">
                                        Announcement
                                    </Link>
                                </div>
                                <div class="active button-text-dark">
                                    <Link to="/aika/calendar#calendar" class="text-wrapper-7">
                                        Calendar
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/feature#video" class="text-wrapper-7">
                                        Video &amp; Screenshots
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/feature#info" class="text-wrapper-7">
                                        Info
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/feature#overview" class="text-wrapper-7">
                                        Overview
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/feature#system" class="text-wrapper-7">
                                        System Requirements
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'character':
            return (
                <div className="SubMenu">
                    <div class="category">
                        <div class="section-title">
                            <div class="filters">
                                <div class="active button-text-dark">
                                    <Link to="/aika/character" class="text-wrapper-7">
                                        Character
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/guild" class="text-wrapper-7">
                                        Guild
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/durgeon" class="text-wrapper-7">
                                        Durgeon
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/relics" class="text-wrapper-7">
                                        Relics
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'guild':
            return (
                <div className="SubMenu">
                    <div class="category">
                        <div class="section-title">
                            <div class="filters">
                                <div class=" button-text-dark">
                                    <Link to="/aika/character" class="text-wrapper-7">
                                        Character
                                    </Link>
                                </div>
                                <div class="active button-text-dark">
                                    <Link to="/aika/guild" class="text-wrapper-7">
                                        Guild
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/durgeon" class="text-wrapper-7">
                                        Durgeon
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/relics" class="text-wrapper-7">
                                        Relics
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'durgeon':
            return (
                <div className="SubMenu">
                    <div class="category">
                        <div class="section-title">
                            <div class="filters">
                                <div class=" button-text-dark">
                                    <Link to="/aika/character" class="text-wrapper-7">
                                        Character
                                    </Link>
                                </div>
                                <div class=" button-text-dark">
                                    <Link to="/aika/guild" class="text-wrapper-7">
                                        Guild
                                    </Link>
                                </div>
                                <div class="active button-text-dark">
                                    <Link to="/aika/durgeon" class="text-wrapper-7">
                                        Durgeon
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/relics" class="text-wrapper-7">
                                        Relics
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'relics':
            return (
                <div className="SubMenu">
                    <div class="category">
                        <div class="section-title">
                            <div class="filters">
                                <div class=" button-text-dark">
                                    <Link to="/aika/character" class="text-wrapper-7">
                                        Character
                                    </Link>
                                </div>
                                <div class=" button-text-dark">
                                    <Link to="/aika/guild" class="text-wrapper-7">
                                        Guild
                                    </Link>
                                </div>
                                <div class=" button-text-dark">
                                    <Link to="/aika/durgeon" class="text-wrapper-7">
                                        Durgeon
                                    </Link>
                                </div>
                                <div class="active button-text-dark">
                                    <Link to="/aika/relics" class="text-wrapper-7">
                                        Relics
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'mark':
            return (
                <div className="SubMenu">
                    <div class="category">
                        <div class="section-title">
                            <div class="filters">
                                <div class="active button-text-dark">
                                    <Link to="/aika/mark" class="text-wrapper-7">
                                        Guild Mark
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/slots" class="text-wrapper-7">
                                        Guild Slots
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'slots':
            return (
                <div className="SubMenu">
                    <div class="category">
                        <div class="section-title">
                            <div class="filters">
                                <div class=" button-text-dark">
                                    <Link to="/aika/mark" class="text-wrapper-7">
                                        Guild Mark
                                    </Link>
                                </div>
                                <div class="active button-text-dark">
                                    <Link to="/aika/slots" class="text-wrapper-7">
                                        Guild Slots
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
                                    <Link to="/aika/news#news" class="text-wrapper-7">
                                        Announcement
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/calendar#calendar" class="text-wrapper-7">
                                        Calendar
                                    </Link>
                                </div>
                                <div class="active button-text-dark">
                                    <Link to="/aika/feature#video" class="text-wrapper-7">
                                        Video &amp; Screenshots
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/feature#info" class="text-wrapper-7">
                                        Info
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/feature#overview" class="text-wrapper-7">
                                        Overview
                                    </Link>
                                </div>
                                <div class="button-text-dark">
                                    <Link to="/aika/feature#system" class="text-wrapper-7">
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
