import './Ranking_Search.css';

export default function Ranking_Search(props) {
    return (
        <div className="Ranking_Search">
            <div class="filter-form">
                <div class="filter-wrapper">
                    <div class="frame-3">
                        <div class="div-2">
                            <div class="text-wrapper-9">Guild</div>
                        </div>{' '}
                        <img alt="" class="dropdown" src={require('../../assets/images/dropdown.svg').default} />
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

                <input type="text" class="input" placeholder="Search" />
                <div class="button-2">
                    <div class="search">Search</div>
                </div>
            </div>
        </div>
    );
}
