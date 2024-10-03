import './Search.css';

export default function Search(props) {
    switch (props.menu) {
        case 'ranking':
            return (
                <div className="Search">
                    <div class="filter-form">
                        <form action="#">
                            <select name="search" id="search">
                                <option value="All">All</option>
                                <option value="Guild">Guild</option>
                                <option value="Master">Master</option>
                                <option value="Nation">Nation</option>
                            </select>
                        </form>
                        <input type="text" class="input" placeholder="Search" />
                        <input class="search button-2 " type="submit" value="Search" />
                    </div>
                </div>
            );
        case 'ticket':
            return (
                <div className="Search">
                    <div class="filter-form">
                        <form action="#">
                            <select name="search" id="search">
                                <option value="All">All</option>
                                <option value="General">General</option>
                                <option value="Technical">Technical</option>
                                <option value="Billing">Billing</option>
                                <option value="Account">Account</option>
                            </select>
                        </form>
                        <input type="text" class="input" placeholder="Search" />
                        <input class="search button-2 " type="submit" value="Search" />
                    </div>
                </div>
            );
    }
}
