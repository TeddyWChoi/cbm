import Search from '../Search/Search';
import './Board.css';

export default function Board2(props) {
    return (
        <div className="Board2">
            <div class="myboard-form">
                <div class="th-parent">
                    <div class="th">
                        <b class="th_text">
                            <span>Email </span>
                            <span class="span">*</span>
                        </b>
                    </div>
                    <div class="td">
                        <input class="inputsubject" placeholder="" type="text" value="" />
                    </div>
                </div>
                <div class="th-parent">
                    <div class="th">
                        <b class="th_text">
                            <span>Game </span>
                            <span class="span">*</span>
                        </b>
                    </div>
                    <div class="td1">
                        <div class="category-wrapper">
                            <select class="category">
                                <option value="aika">Aika Online Global</option>
                                <option value="ts2">Twelve Sky2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="th-parent">
                    <div class="th">
                        <b class="th_text">
                            <span>Category </span>
                            <span class="span">*</span>
                        </b>
                    </div>
                    <div class="td1">
                        <div class="category-wrapper">
                            <select class="category">
                                <option value="general">General</option>
                                <option value="general">Technical</option>
                                <option value="general">Billing</option>
                                <option value="general">Account</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="th-parent">
                    <div class="th">
                        <b class="th_text">Character Name</b>
                    </div>
                    <div class="td">
                        <input class="inputsubject" placeholder="" type="text" value="" />
                    </div>
                </div>
                <div class="th-parent">
                    <div class="th">
                        <b class="th_text">
                            <span>Title </span>
                            <span class="span">*</span>
                        </b>
                    </div>
                    <div class="td">
                        <input class="inputsubject" placeholder="" type="text" value="" />
                    </div>
                </div>
                <div class="th-parent">
                    <div class="th">
                        <b class="th_text">
                            <span>Description </span>
                            <span class="span">*</span>
                        </b>
                    </div>
                    <div class="td5">
                        <textarea id="message" required="" spellcheck="false"></textarea>
                    </div>
                </div>
                <div class="th-parent">
                    <div class="th">
                        <b class="th_text">Attach a file</b>
                    </div>
                    <div class="td6">
                        <div class="inputbfile">
                            <input type="file" />
                            <div>Ticket size should be less than 5MB. Allow Image file only</div>
                        </div>
                    </div>
                </div>
                <div class="th-parent3">
                    <div class="th6">
                        <b class="th_text">첨부파일</b>
                    </div>
                </div>
            </div>
            <div class="button-parent">
                <a href="./ticket_history" class="button-2">
                    <div class="text">Register</div>
                </a>
                <a href="./ticket_history" class="button-1">
                    <div class="text">Cancel</div>
                </a>
            </div>
        </div>
    );
}
