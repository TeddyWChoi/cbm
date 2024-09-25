import Search from '../Search/Search';
import './Board.css';

export default function Board(props) {
    return (
        <div className="Board">
            <Search menu={'ticket'} />
            <div class="my-board-listview-parent">
                <a href="./my_ticket" class="my-board-listview">
                    <div class="my-board-list">
                        <div class="frame-parent">
                            <div class="frame-group">
                                <div class="wrapper">
                                    <div class="ticket_category">General</div>
                                </div>
                                <div class="board_list">I have an inquiry. Waiting for your answer.</div>
                            </div>
                            <div class="frame-container">
                                <div class="container">
                                    <div class="div">pending</div>
                                </div>
                                <div class="frame">
                                    <div class="div">2014.11.01</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="./my_ticket" class="my-board-listview">
                    <div class="my-board-list">
                        <div class="frame-parent">
                            <div class="frame-group">
                                <div class="wrapper">
                                    <div class="ticket_category">Technical</div>
                                </div>
                                <div class="board_list">I have an inquiry. Waiting for your answer.</div>
                            </div>
                            <div class="frame-container">
                                <div class="container">
                                    <div class="div">pending</div>
                                </div>
                                <div class="frame">
                                    <div class="div">2014.11.01</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="./my_ticket" class="my-board-listview">
                    <div class="my-board-list">
                        <div class="frame-parent">
                            <div class="frame-group">
                                <div class="wrapper">
                                    <div class="ticket_category">Billing</div>
                                </div>
                                <div class="board_list">
                                    I have an inquiry. Waiting for your answer.I have an inquiry. Waiting for your
                                    answer.I have an inquiry. Waiting for your answer.I have an inquiry. Waiting for
                                    your answer.
                                </div>
                            </div>
                            <div class="frame-container">
                                <div class="container">
                                    <div class="div">pending</div>
                                </div>
                                <div class="frame">
                                    <div class="div">2014.11.01</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="./my_ticket" class="my-board-listview">
                    <div class="my-board-list">
                        <div class="frame-parent">
                            <div class="frame-group">
                                <div class="wrapper">
                                    <div class="ticket_category">Account</div>
                                </div>
                                <div class="board_list">I have an inquiry. Waiting for your answer.</div>
                            </div>
                            <div class="frame-container">
                                <div class="container">
                                    <div class="div">Completed</div>
                                </div>
                                <div class="frame">
                                    <div class="div">2014.11.01</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="board_btn">
                <a href="./ticket_submit" class="button-2">
                    <div class="text">Create</div>
                </a>
            </div>
            <div class="table-number">
                <div class="item-link-prxima">
                    <div class="table_num_div">&lt;</div>
                </div>
                <div class="item-link">
                    <div class="table_num_div1">1</div>
                </div>
                <div class="item-link1">
                    <div class="table_num_div1">2</div>
                </div>
                <div class="item-link1">
                    <div class="table_num_div1">3</div>
                </div>
                <div class="item-link-prxima">
                    <div class="table_num_div">&gt;</div>
                </div>
            </div>
        </div>
    );
}
