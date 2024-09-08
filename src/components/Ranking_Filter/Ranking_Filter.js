import './Ranking_Filter.css';

export default function Ranking_Filter(props) {
    switch (props.filter) {
        case 'guild':
            return (
                <div className="Ranking_Filter">
                    <div class="filter-component">
                        <div class="fiilter-button">
                            <div class="frame-parent">
                                <div class="period-wrapper">
                                    <b class="period">Period</b>
                                </div>
                                <div class="link">
                                    <div class="character-wrapper">
                                        <div class="character">DAILY</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">WEEKLY</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">MONTHLY</div>
                                    </div>
                                </div>
                            </div>
                            <div class="frame-parent">
                                <div class="period-wrapper">
                                    <b class="period">Nation</b>
                                </div>
                                <div class="link">
                                    <div class="character-wrapper">
                                        <div class="character">GENERAL</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">ERIDANUS</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">OCTANS</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">VOLANS</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">CHARIOTEER</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">CRUX</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="filter-form">
                            <input type="text" class="input" placeholder="Nickname" />
                            <div class="button-2">
                                <div class="search">Search</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            return (
                <div className="Ranking_Filter">
                    <div class="filter-component">
                        <div class="fiilter-button">
                            <div class="frame-parent">
                                <div class="period-wrapper">
                                    <b class="period">Period</b>
                                </div>
                                <div class="link">
                                    <div class="character-wrapper">
                                        <div class="character">DAILY</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">WEEKLY</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">MONTHLY</div>
                                    </div>
                                </div>
                            </div>
                            <div class="frame-parent">
                                <div class="period-wrapper">
                                    <b class="period">Nation</b>
                                </div>
                                <div class="link">
                                    <div class="character-wrapper">
                                        <div class="character">GENERAL</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">ERIDANUS</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">OCTANS</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">VOLANS</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">CHARIOTEER</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">CRUX</div>
                                    </div>
                                </div>
                            </div>
                            <div class="frame-parent">
                                <div class="period-wrapper">
                                    <b class="period">Class</b>
                                </div>
                                <div class="link">
                                    <div class="character-wrapper">
                                        <div class="character">GENERAL</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">WARRIOR</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">TEMPLAR</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">SHOOTER</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">GUNSLINGER</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">BLACK WIZARD</div>
                                    </div>
                                </div>
                                <div class="link1">
                                    <div class="character-wrapper">
                                        <div class="character">CLERIC</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="filter-form">
                            <input type="text" class="input" placeholder="Nickname" />
                            <div class="button-2">
                                <div class="search">Search</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}
