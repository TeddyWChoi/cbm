import './Ranking_Table.css';

export default function Ranking_Table() {
    return (
        <div className="Ranking_Table">
            <div class="table table6">
                <div class="header-row">
                    <div class="cell-parent">
                        <div class="cell">
                            <b class="nation">Nation </b>
                        </div>
                        <div class="cell1">
                            <b class="guilds">Guilds </b>
                        </div>
                        <div class="cell2">
                            <b class="nation">Status</b>
                        </div>
                    </div>
                </div>
                <div class="body">
                    <div class="row6">
                        <div class="data">
                            <img class="image-icon1" alt="" src={require('../../assets/images/ico_nation.png')} />
                        </div>
                        <div class="data1">
                            <div class="div">127 </div>
                        </div>
                        <div class="data2 red">
                            <div class="nation">Crowded</div>
                        </div>
                    </div>
                </div>
                <div class="body">
                    <div class="row6">
                        <div class="data">
                            <img class="image-icon1" alt="" src={require('../../assets/images/ico_nation.png')} />
                        </div>
                        <div class="data1">
                            <div class="div">127 </div>
                        </div>
                        <div class="data2 green">
                            <div class="nation">Crowded</div>
                        </div>
                    </div>
                </div>
                <div class="body">
                    <div class="row6">
                        <div class="data">
                            <img class="image-icon1" alt="" src={require('../../assets/images/ico_nation.png')} />
                        </div>
                        <div class="data1">
                            <div class="div">127 </div>
                        </div>
                        <div class="data2 red">
                            <div class="nation">Crowded</div>
                        </div>
                    </div>
                </div>
                <div class="body">
                    <div class="row6">
                        <div class="data">
                            <img class="image-icon1" alt="" src={require('../../assets/images/ico_nation.png')} />
                        </div>
                        <div class="data1">
                            <div class="div">127 </div>
                        </div>
                        <div class="data2 red">
                            <div class="nation">Crowded</div>
                        </div>
                    </div>
                </div>
                <div class="body">
                    <div class="row6">
                        <div class="data">
                            <img class="image-icon1" alt="" src={require('../../assets/images/ico_nation.png')} />
                        </div>
                        <div class="data1">
                            <div class="div">127 </div>
                        </div>
                        <div class="data2 red">
                            <div class="nation">Crowded</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table_border2">
                <div class="if-you-have-container">
                    Each nation has a maximum capacity of 127 Guilds.
                    <br />
                    <br />
                    The system updates the slots daily at 11:00 am, e.g. if a Guild is deleted at 11:01 am on 03/01, the
                    slot will only be vacant on 03/02 at 11:00 am; if it is deleted at 10:59 am on 03/01, the slot will
                    be vacant at 11:00 am on 03/01.
                    <br />
                    <br />
                    The website updates the number of Guilds in real time, but the time at which the system makes this
                    update within the game must be respected. If the Guild is deleted after 11:00 am, a vacant slot in
                    the nation will be shown on the website, but the player will only be able to create the Guild the
                    following day.
                </div>
            </div>
        </div>
    );
}
