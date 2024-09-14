import './Search.css';

export default function Search(props) {
    switch (props.menu) {
        case 'ranking':
            return (
                <div className="Search">
                    <div class="filter-form">
                        <div class="filter-wrapper">
                            <div class="frame-3">
                                <div class="div-2">
                                    <div class="text-wrapper-9">Guild</div>
                                </div>
                                <img
                                    alt=""
                                    class="dropdown"
                                    src={require('../../assets/images/dropdown.svg').default}
                                />
                            </div>
                            <ul class="filter_box">
                                <li>
                                    <a href="#!">Guild</a>
                                </li>
                                <li>
                                    <a href="#!">Master</a>
                                </li>
                                <li>
                                    <a href="#!">Nation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="search_input">
                            <input type="text" class="input" placeholder="Search" />
                            <div class="button-2">
                                <div class="search">Search</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'ticket':
            return (
                <div className="Search">
                    <div class="filter-form">
                        <div class="filter-wrapper">
                            <div class="frame-3">
                                <div class="div-2">
                                    <div class="text-wrapper-9">All</div>
                                </div>
                                <img
                                    alt=""
                                    class="dropdown"
                                    src={require('../../assets/images/dropdown.svg').default}
                                />
                            </div>
                            <ul class="filter_box">
                                <li>
                                    <a href="#!">All</a>
                                </li>
                                <li>
                                    <a href="#!">General</a>
                                </li>
                                <li>
                                    <a href="#!">Technical</a>
                                </li>
                                <li>
                                    <a href="#!">Billing</a>
                                </li>
                                <li>
                                    <a href="#!">Account</a>
                                </li>
                            </ul>
                        </div>

                        <input type="text" class="input" placeholder="Search" />
                        <div class="button-2">
                            <div class="search">Search</div>
                        </div>
                    </div>
                </div>
            );
    }
}
