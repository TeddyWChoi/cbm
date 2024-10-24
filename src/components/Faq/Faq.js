import Search from '../Search/Search';
import './Faq.css';

export default function Faq(props) {
    return (
        <div className="Faq">
            <Search menu={'ticket'} />
            <div class="faq-box">
                <div class="faq-tab">
                    <div class="li active">
                        <a href="" class="faq_menu">
                            ALL
                        </a>
                    </div>
                    <div class="li">
                        <a href="" class="faq_menu">
                            General
                        </a>
                    </div>
                    <div class="li">
                        <a href="" class="faq_menu">
                            Billing
                        </a>
                    </div>
                    <div class="li">
                        <a href="" class="faq_menu">
                            Technical
                        </a>
                    </div>
                    <div class="li">
                        <a href="" class="faq_menu">
                            Account
                        </a>
                    </div>
                </div>
                <div class="divlist-faq">
                    <div class="ul">
                        <div class="li5">
                            <div class="a">
                                <div class="wrapper">
                                    <div class="div5">Q. </div>
                                </div>
                                <div class="a-inner">
                                    <div class="text-wrapper">
                                        <div class="div">I have a suggestion, how do I let the staff kno</div>
                                    </div>
                                </div>
                                <div class="strongarrow">
                                    <img
                                        alt=""
                                        class="icon-arrows"
                                        src={require('../../assets/images/ico_faq_close.svg').default}
                                    />
                                    <div class="faq_container">
                                        <div class="div6">CLOSE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="divvar-box-inner">
                            <div class="select-the-radio-faq_container">
                                <p class="select-the-radio">
                                    Select the radio button for Use the following DNS server addresses
                                </p>
                                <p class="select-the-radio">
                                    In the Properties window for Internet Protocol Version 4, select the radio button
                                    for Use the following DNS server addresses.
                                </p>
                                <p class="select-the-radio">&nbsp;</p>
                                <p class="select-the-radio">
                                    Notice that there are fields for preferred and alternate DNS server.
                                </p>
                                <p class="select-the-radio">
                                    The alternate server is used if the preferred one is unavailable or not responding
                                    quickly enough.
                                </p>
                                <p class="select-the-radio">
                                    Type the IP addresses provided by the service for both servers in the appropriate
                                    fields and click OK.
                                </p>
                                <p class="select-the-radio">&nbsp;</p>
                                <p class="select-the-radio">Changing DNS settings in Windows 10.</p>
                                <p class="select-the-radio">&nbsp;</p>
                            </div>
                            <div class="image-wrapper">
                                <img
                                    alt=""
                                    class="image-icon"
                                    src={require('../../assets/images/img_faq_sample.png')}
                                />
                            </div>
                        </div>
                        <div class="li5">
                            <div class="a">
                                <div class="wrapper">
                                    <div class="div5">Q. </div>
                                </div>
                                <div class="a-inner">
                                    <div class="text-wrapper">
                                        <div class="div">Text</div>
                                    </div>
                                </div>
                                <div class="strongarrow">
                                    <img
                                        alt=""
                                        class="icon-arrows"
                                        src={require('../../assets/images/ico_faq_open.svg').default}
                                    />
                                    <div class="faq_container">
                                        <div class="div6">OPEN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="li5">
                            <div class="a">
                                <div class="wrapper">
                                    <div class="div5">Q. </div>
                                </div>
                                <div class="a-inner">
                                    <div class="text-wrapper">
                                        <div class="div">Text</div>
                                    </div>
                                </div>
                                <div class="strongarrow">
                                    <img
                                        alt=""
                                        class="icon-arrows"
                                        src={require('../../assets/images/ico_faq_open.svg').default}
                                    />
                                    <div class="faq_container">
                                        <div class="div6">OPEN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="li5">
                            <div class="a">
                                <div class="wrapper">
                                    <div class="div5">Q. </div>
                                </div>
                                <div class="a-inner">
                                    <div class="text-wrapper">
                                        <div class="div">Text</div>
                                    </div>
                                </div>
                                <div class="strongarrow">
                                    <img
                                        alt=""
                                        class="icon-arrows"
                                        src={require('../../assets/images/ico_faq_open.svg').default}
                                    />
                                    <div class="faq_container">
                                        <div class="div6">OPEN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="li5">
                            <div class="a">
                                <div class="wrapper">
                                    <div class="div5">Q.</div>
                                </div>
                                <div class="a-inner">
                                    <div class="text-wrapper">
                                        <div class="div">Text</div>
                                    </div>
                                </div>
                                <div class="strongarrow">
                                    <img
                                        alt=""
                                        class="icon-arrows"
                                        src={require('../../assets/images/ico_faq_open.svg').default}
                                    />
                                    <div class="faq_container">
                                        <div class="div6">OPEN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="li5">
                            <div class="a">
                                <div class="wrapper">
                                    <div class="div5">Q. </div>
                                </div>
                                <div class="a-inner">
                                    <div class="text-wrapper">
                                        <div class="div">Text</div>
                                    </div>
                                </div>
                                <div class="strongarrow">
                                    <img
                                        alt=""
                                        class="icon-arrows"
                                        src={require('../../assets/images/ico_faq_open.svg').default}
                                    />
                                    <div class="faq_container">
                                        <div class="div6">OPEN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="li5">
                            <div class="a">
                                <div class="wrapper">
                                    <div class="div5">Q. </div>
                                </div>
                                <div class="a-inner">
                                    <div class="text-wrapper">
                                        <div class="div">Text</div>
                                    </div>
                                </div>
                                <div class="strongarrow">
                                    <img
                                        alt=""
                                        class="icon-arrows"
                                        src={require('../../assets/images/ico_faq_open.svg').default}
                                    />
                                    <div class="faq_container">
                                        <div class="div6">OPEN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="li5">
                            <div class="a">
                                <div class="wrapper">
                                    <div class="div5">Q. </div>
                                </div>
                                <div class="a-inner">
                                    <div class="text-wrapper">
                                        <div class="div">Text</div>
                                    </div>
                                </div>
                                <div class="strongarrow">
                                    <img
                                        alt=""
                                        class="icon-arrows"
                                        src={require('../../assets/images/ico_faq_open.svg').default}
                                    />
                                    <div class="faq_container">
                                        <div class="div6">OPEN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="li5">
                            <div class="a">
                                <div class="wrapper">
                                    <div class="div5">Q. </div>
                                </div>
                                <div class="a-inner">
                                    <div class="text-wrapper">
                                        <div class="div">Text</div>
                                    </div>
                                </div>
                                <div class="strongarrow">
                                    <img
                                        alt=""
                                        class="icon-arrows"
                                        src={require('../../assets/images/ico_faq_open.svg').default}
                                    />

                                    <div class="faq_container">
                                        <div class="div6">OPEN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="li5">
                            <div class="a">
                                <div class="wrapper">
                                    <div class="div5">Q. </div>
                                </div>
                                <div class="a-inner">
                                    <div class="text-wrapper">
                                        <div class="div">Text</div>
                                    </div>
                                </div>
                                <div class="strongarrow">
                                    <img
                                        alt=""
                                        class="icon-arrows"
                                        src={require('../../assets/images/ico_faq_open.svg').default}
                                    />
                                    <div class="faq_container">
                                        <div class="div6">OPEN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
