import './GuildRegister.css';

export default function GuildRegister(props) {
    return (
        <div className="GuildRegister">
            <h3 class="heading">Register Guild mark</h3>

            <div class="myboard-form-parent">
                <div class="myboard-form">
                    <div class="th-parent">
                        <div class="th">
                            <div class="email">World / Nation </div>
                        </div>
                        <div class="td">
                            <div class="divtd-cont">
                                <div class="">
                                    <select name="World" id="World">
                                        <option value="World">World</option>
                                    </select>
                                    <select name="Nation" id="Nation">
                                        <option value="Nation">Nation</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="th-parent">
                        <div class="th">
                            <div class="email">Guild Name</div>
                        </div>
                        <div class="divtd-cont4">
                            <div class="frame-parent">
                                <div class="">
                                    <div class="">
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="th-container">
                        <div class="th">
                            <div class="email">Guild Master Nickname</div>
                        </div>
                        <div class="divtd-cont4">
                            <div class="frame-parent">
                                <div class="">
                                    <div class="">
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="th-container">
                        <div class="th">
                            <div class="email">Guild Mark</div>
                        </div>
                        <div class="divtd-cont4">
                            <div class="frame-parent">
                                <div class="">
                                    <div class="">
                                        <input type="file" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="th-container">
                        <div class="th">
                            <div class="email">Guild Introduce</div>
                        </div>
                        <div class="divtd-cont5">
                            <div class="frame-parent">
                                <div class="">
                                    <div class="">
                                        <textarea id="message" required></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="button-parent">
                    <a href="./guild_register" class="button-2">
                        <div class="text">Register</div>
                    </a>
                    <a href="./guild_register" class="button-1">
                        <div class="text">Cancel</div>
                    </a>
                </div>
            </div>
        </div>
    );
}
