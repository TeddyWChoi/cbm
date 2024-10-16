import { Routes, Route } from 'react-router-dom';

import './Global.css';
import './Styleguide.css';

import Navi from './components/Navi/Navi.js';
import Slider from './components/Slider/Slider.js';
import Main from './components/Main/Main.js';
import About from './components/About/About.js';
import PrivatePolicy from './components/Policy/PrivatePolicy.js';
import TOS from './components/Policy/TOS.js';
import UGC from './components/Policy/UGC.js';
/* 241017 추가*/
import GamePolicy from './components/Policy/GamePolicy.js';
import Footer from './components/Footer/Footer.js';
import Balance from './components/Balance/Balance.js';
/* 241017 추가*/
import Balance2 from './components/Balance/Balance2.js';
import Balance3 from './components/Balance/Balance3.js';
import SubTop from './components/SubTop/SubTop.js';
import Purchase from './components/Purchase/Purchase.js';
import Coinshop from './components/Coinshop/Coinshop.js';
import Coinshop2 from './components/Coinshop/Coinshop2.js';
import Coinshop3 from './components/Coinshop/Coinshop3.js';

/* TS2 */
import SubNavi from './Ts2/SubNavi/SubNavi.js';
import SubTS2 from './Ts2/SubTS2/SubTS2.js';
import SubMenu from './Ts2/SubMenu/SubMenu.js';
import Feature from './Ts2/Feature/Feature.js';
import News from './Ts2/News/News.js';
import View from './Ts2/View/View.js';
import SubFooter from './Ts2/SubFooter/SubFooter.js';
import Kopazar from './Ts2/Kopazar/Kopazar.js';
import AccountInformation from './Ts2/AccountInformation/AccountInformation.js';
import AccountDetail from './Ts2/AccountDetail/AccountDetail.js';
import Calendar from './Ts2/Calendar/Calendar.js';

/* AIKA */
import SubNavi_Aika from './Aika/SubNavi/SubNavi.js';
import SubAIKA from './Aika/SubAIKA/SubAIKA.js';
import SubMenu_Aika from './Aika/SubMenu/SubMenu.js';
import SubMenu_Feature from './Aika/Feature/Feature.js';
import News_Aika from './Aika/News/News.js';
import View_Aika from './Aika/View/View.js';
import SubFooterAika from './Aika/SubFooter/SubFooter.js';
import AccountInformation_Aika from './Aika/AccountInformation/AccountInformation.js';
import AccountDetail_Aika from './Aika/AccountDetail/AccountDetail.js';
import Calendar_Aika from './Aika/Calendar/Calendar.js';

import Block from './components/Block/Block.js';
import Error from './components/Error/Error.js';
import Redirect from './components/Redirect/Redirect.js';
import HistoryFilter from './components/HistoryFilter/HistoryFilter.js';
import AccountLnb from './components/AccountLnb/AccountLnb.js';
import Table1 from './components/Table/Table1.js';
import Table2 from './components/Table/Table2.js';
import Table3 from './components/Table/Table3.js';
/* 241017 추가*/
import Table4 from './components/Table/Table4.js';
import Table5 from './components/Table/Table5.js';
import FormAgreements from './components/Form/FormAgreements.js';

import FormSignup from './components/Form/FormSignup.js';
import FormSignin from './components/Form/FormSignin.js';
import FormFind from './components/Form/FormFind.js';
import FormFindPasswordChange from './components/Form/FormFindPasswordChange.js';
import FormPasswordChange from './components/Form/FormPasswordChange.js';
import FormVaildcode from './components/Form/FormVaildcode.js';
import LandingTs2 from './Ts2/LandingTs2/Landing.js';
import LandingTs2Tr from './Ts2/LandingTs2/LandingTr.js';
import LandingAika from './Aika/LandingAika/Landing.js';
import Ranking_Filter from './components/Ranking_Filter/Ranking_Filter.js';
import Ranking_Table from './components/Ranking_Table/Ranking_Table.js';
import Ranking_Table2 from './components/Ranking_Table/Ranking_Table2.js';
import Ranking_Table3 from './components/Ranking_Table/Ranking_Table3.js';
/* 9/25 추가*/
import Ranking_Table3_po from './components/Ranking_Table/Ranking_Table3_po.js';
import Ranking_Table4 from './components/Ranking_Table/Ranking_Table4.js';
import Ranking_Table4_po from './components/Ranking_Table/Ranking_Table4_po.js';
import Ranking_Table5 from './components/Ranking_Table/Ranking_Table5.js';
import Ranking_Table6 from './components/Ranking_Table/Ranking_Table6.js';
import Board from './components/Board/Board.js';
import Board2 from './components/Board/Board2.js';
import Board3 from './components/Board/Board3.js';
import Board4 from './components/Board/Board4.js';
/* 241017 추가*/
import Faq from './components/Faq/Faq.js';

function App() {
    const is_login = true; //로그인 로그아웃 변경
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div className="App">
                        <div class="main-desktop">
                            <Navi />
                            <Slider />
                            <Main />
                            <Footer />
                        </div>
                    </div>
                }
            />
            <Route
                path="/about"
                element={
                    <div className="App">
                        <div class="main-desktop">
                            <Navi />
                            <About />
                            <Footer />
                        </div>
                    </div>
                }
            />
            <Route
                path="/game_policy"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <Navi />
                            <SubTop bg={'bottom'} heading={'Game Operations Policy'} />
                            <GamePolicy />
                            <Footer />
                        </div>
                    </div>
                }
            />
            <Route
                path="/private_policy"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <Navi />
                            <SubTop bg={'bottom'} heading={'Private Policy'} />
                            <PrivatePolicy />
                            <Footer />
                        </div>
                    </div>
                }
            />
            <Route
                path="/term_of_service"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <Navi />
                            <SubTop bg={'bottom'} heading={'TOS & EULA'} />
                            <TOS />
                            <Footer />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ugc"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <Navi />
                            <SubTop bg={'bottom'} heading={'User Generated Content Policy'} />
                            <UGC />
                            <Footer />
                        </div>
                    </div>
                }
            />
            {/* TS2 start */}
            <Route
                path="/ts2"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <Redirect url={'/ts2/news'} />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/landing"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <LandingTs2 />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/landing_tr"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <LandingTs2Tr />
                        </div>
                    </div>
                }
            />

            <Route
                path="/ts2/news"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTS2 />
                            <SubMenu menu={'news'} />
                            <News />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/view"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubMenu menu={'news'} />
                            <View />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/feature"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTS2 />
                            <SubMenu menu={'feature'} />
                            <Feature />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/calendar"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTS2 />
                            <SubMenu menu={'calendar'} />
                            <Calendar />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/coinshop"
                element={
                    <div className="App">
                        <div class="sub-desktop coinshop_wrapper">
                            <SubNavi is_login={is_login} />
                            <SubTop
                                bg={'bottom_ts2'}
                                heading={'G-Coin Shop'}
                                subtitle={'Twelve Sky 2 uses G-Coin as its currency for the purchase of in-game items'}
                            />
                            <Balance url={'./coinpurchasehistory'} button={'Purchase History'} />
                            <Coinshop />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/coinshop2"
                element={
                    <div className="App">
                        <div class="sub-desktop coinshop_wrapper">
                            <SubNavi is_login={is_login} />
                            <SubTop
                                bg={'bottom_ts2'}
                                heading={'G-Coin Shop'}
                                subtitle={'Twelve Sky 2 uses G-Coin as its currency for the purchase of in-game items'}
                            />
                            <Balance url={'./coinpurchasehistory'} button={'Purchase History'} />
                            <Coinshop2 />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/coinshop3"
                element={
                    <div className="App">
                        <div class="sub-desktop coinshop_wrapper">
                            <SubNavi is_login={is_login} />
                            <SubTop
                                bg={'bottom_ts2'}
                                heading={'G-Coin Shop'}
                                subtitle={'Twelve Sky 2 uses G-Coin as its currency for the purchase of in-game items'}
                            />
                            <Balance url={'./coinpurchasehistory'} button={'Purchase History'} />
                            <Coinshop3 />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/coinshop_kopazar"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop
                                bg={'bottom_ts2'}
                                heading={'E-PİN İLE G-PARA YÜKLEME'}
                                subtitle={'Hesabınıza G-Para yükleyerek oyun içerisinde kullanabilirsiniz.'}
                            />
                            <Balance button={'Satın Alınan G-Para / Kullanım Geçmişi'} />
                            <Kopazar linkTxt={'YÜKLE'} linkUrl={'#'} />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/purchase_completed"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop
                                bg={'bottom_ts2'}
                                heading={'G-Coin Shop'}
                                subtitle={'Twelve Sky 2 uses G-Coin as its currency for the purchase of in-game items'}
                            />
                            <Purchase
                                logo={'ts2'}
                                messageTitle={'Purchase completed!'}
                                messageTxt={'You have successfully purchased G-Coins!'}
                                linkTxt={'Purchase History'}
                                linkUrl={'./history'}
                            />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/purchase_failed"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop
                                bg={'bottom_ts2'}
                                heading={'G-Coin Shop'}
                                subtitle={'Twelve Sky 2 uses G-Coin as its currency for the purchase of in-game items'}
                            />
                            <Purchase
                                logo={'ts2'}
                                messageTitle={'Purchase failed!'}
                                messageTxt={
                                    'Purchase has been failed because something went wrong. Your account has not been charged.'
                                }
                                linkTxt={'Purchase History'}
                                linkUrl={'./history'}
                            />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/password_changed"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'My page'} subtitle={''} />
                            <Purchase
                                logo={'ts2'}
                                messageTitle={'Password Changed!'}
                                messageTxt={'Password has been changed successfully.'}
                                linkTxt={'Go to Account'}
                                linkUrl={'./accountinformation'}
                            />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/signup_completed"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'Sign up'} subtitle={''} />
                            <Purchase
                                logo={'ts2'}
                                messageTitle={'Sign up Completed!'}
                                messageTxt={
                                    'Welcome to Twelve Sky2 on an unforgettable adventure presended by CBM Entertainment.'
                                }
                                linkTxt={'Go to Homepage'}
                                linkUrl={'./'}
                            />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/signup"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'Sign up'} subtitle={''} />

                            <FormSignup logo={'ts2'} linkTxt={'Create Account'} linkUrl={'./'} />

                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/signin"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'Sign in'} subtitle={''} />
                            <FormSignin logo={'ts2'} linkTxt={'Sign in'} linkUrl={'./'} />

                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/vaildcode"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'Sign up'} subtitle={''} />
                            <FormVaildcode logo={'ts2'} linkTxt={'Valid Code'} linkUrl={'./'} />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/find"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'Sign in'} subtitle={''} />
                            <FormFind logo={'ts2'} linkTxt={'Find Password'} linkUrl={'#!'} />

                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/FindPasswordChange"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'Sign up'} subtitle={''} />
                            <FormFindPasswordChange logo={'ts2'} linkTxt={'Update Password'} linkUrl={'./'} />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/PasswordChange"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'Sign up'} subtitle={''} />
                            <FormPasswordChange logo={'ts2'} linkTxt={'Update Password'} linkUrl={'./'} />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/AccountInformation"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'My page'} subtitle={''} />
                            <AccountInformation />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/AccountDetail"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'My page'} subtitle={''} />
                            <AccountDetail />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/LoginHistory"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'My page'} subtitle={''} />
                            <div class="information_wrapper">
                                <AccountLnb account={'account3'} />
                                <div class="information_div">
                                    <HistoryFilter />
                                    <Table1 />
                                </div>
                            </div>
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/IngamePurchaseHistory"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'My page'} subtitle={''} />
                            <div class="information_wrapper">
                                <AccountLnb account={'account4'} />
                                <div class="information_div">
                                    <Balance url={'./coinshop'} button={'Buy Coin'} />
                                    <HistoryFilter />
                                    <Table2 />
                                </div>
                            </div>

                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/CoinPurchaseHistory"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'My page'} subtitle={''} />
                            <div class="information_wrapper">
                                <AccountLnb account={'account5'} />
                                <div class="information_div">
                                    <Balance url={'./coinshop'} button={'Buy Coin'} />
                                    <HistoryFilter />
                                    <Table3 />
                                </div>
                            </div>
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/Block"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'Block'} subtitle={''} />
                            <Block url={'https://goe.freshdesk.com/en/support/home'} />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/ts2/Error"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi is_login={is_login} />
                            <SubTop bg={'bottom_ts2'} heading={'Error'} subtitle={''} />
                            <Error url={'/ts2'} />
                            <SubFooter />
                        </div>
                    </div>
                }
            />

            {/* AIKA start */}
            <Route
                path="/aika"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <Redirect url={'/aika/news'} />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/landing"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <LandingAika />
                        </div>
                    </div>
                }
            />

            <Route
                path="/aika/news"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubAIKA />
                            <SubMenu_Aika menu={'news'} />
                            <News_Aika />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/view"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubMenu_Aika menu={'news'} />
                            <View_Aika />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/feature"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubAIKA />
                            <SubMenu_Aika menu={'feature'} />
                            <SubMenu_Feature />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/calendar"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubAIKA />
                            <SubMenu_Aika menu={'calendar'} />
                            <Calendar_Aika />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/coinshop"
                element={
                    <div className="App">
                        <div class="sub-desktop coinshop_wrapper">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop
                                bg={'bottom_aika'}
                                heading={'M-Coin Shop'}
                                subtitle={
                                    'Aika Online Global uses M-Coin as its currency for the purchase of in-game items'
                                }
                            />
                            <Balance url={'./coinpurchasehistory'} button={'Purchase History'} />
                            <Coinshop />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/coinshop2"
                element={
                    <div className="App">
                        <div class="sub-desktop coinshop_wrapper">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop
                                bg={'bottom_aika'}
                                heading={'M-Coin Shop'}
                                subtitle={
                                    'Aika Online Global uses M-Coin as its currency for the purchase of in-game items'
                                }
                            />
                            <Balance url={'./coinpurchasehistory'} button={'Purchase History'} />
                            <Coinshop2 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/coinshop3"
                element={
                    <div className="App">
                        <div class="sub-desktop coinshop_wrapper">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop
                                bg={'bottom_aika'}
                                heading={'M-Coin Shop'}
                                subtitle={
                                    'Aika Online Global uses M-Coin as its currency for the purchase of in-game items'
                                }
                            />
                            <Balance url={'./coinpurchasehistory'} button={'Purchase History'} />
                            <Coinshop3 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />

            <Route
                path="/aika/purchase_completed"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop
                                bg={'bottom_aika'}
                                heading={'M-Coin Shop'}
                                subtitle={
                                    'Aika Online Global uses M-Coin as its currency for the purchase of in-game items'
                                }
                            />
                            <Purchase
                                logo={'aika'}
                                messageTitle={'Purchase completed!'}
                                messageTxt={'You have successfully purchased G-Coins!'}
                                linkTxt={'Purchase History'}
                                linkUrl={'./history'}
                            />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/purchase_failed"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop
                                bg={'bottom_aika'}
                                heading={'M-Coin Shop'}
                                subtitle={
                                    'Aika Online Global uses M-Coin as its currency for the purchase of in-game items'
                                }
                            />
                            <Purchase
                                logo={'aika'}
                                messageTitle={'Purchase failed!'}
                                messageTxt={
                                    'Purchase has been failed because something went wrong. Your account has not been charged.'
                                }
                                linkTxt={'Purchase History'}
                                linkUrl={'./history'}
                            />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/password_changed"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My page'} subtitle={''} />
                            <Purchase
                                logo={'aika'}
                                messageTitle={'Password Changed!'}
                                messageTxt={'Password has been changed successfully.'}
                                linkTxt={'Go to Account'}
                                linkUrl={'./accountinformation'}
                            />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/signup_completed"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Sign up'} subtitle={''} />
                            <Purchase
                                logo={'aika'}
                                messageTitle={'Sign up Completed!'}
                                messageTxt={
                                    'Welcome to Twelve Sky2 on an unforgettable adventure presended by CBM Entertainment.'
                                }
                                linkTxt={'Go to Homepage'}
                                linkUrl={'./'}
                            />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/signup"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Sign up'} subtitle={''} />

                            <FormSignup logo={'aika'} linkTxt={'Create Account'} linkUrl={'./'} />

                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            {/* 241017 추가 */}
            <Route
                path="/aika/requiredagreements"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Required Agreements'} subtitle={''} />

                            <FormAgreements logo={'aika'} />

                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/signin"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Sign in'} subtitle={''} />
                            <FormSignin logo={'aika'} linkTxt={'Sign in'} linkUrl={'./'} />

                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/vaildcode"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Sign up'} subtitle={''} />
                            <FormVaildcode logo={'aika'} linkTxt={'Valid Code'} linkUrl={'./'} />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/find"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Sign in'} subtitle={''} />
                            <FormFind logo={'aika'} linkTxt={'Find Password'} linkUrl={'#!'} />

                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/FindPasswordChange"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Sign up'} subtitle={''} />
                            <FormFindPasswordChange logo={'aika'} linkTxt={'Update Password'} linkUrl={'./'} />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/PasswordChange"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Sign up'} subtitle={''} />
                            <FormPasswordChange logo={'aika'} linkTxt={'Update Password'} linkUrl={'./'} />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/AccountInformation"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My page'} subtitle={''} />
                            <AccountInformation_Aika />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/AccountDetail"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My page'} subtitle={''} />
                            <AccountDetail_Aika />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/LoginHistory"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My page'} subtitle={''} />
                            <div class="information_wrapper">
                                <AccountLnb account={'account3'} />
                                <div class="information_div">
                                    <HistoryFilter />
                                    <Table1 />
                                </div>
                            </div>
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/IngamePurchaseHistory"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My page'} subtitle={''} />
                            <div class="information_wrapper">
                                <AccountLnb account={'account4'} />
                                <div class="information_div">
                                    <Balance url={'./coinshop'} button={'Buy Coin'} />
                                    <HistoryFilter />
                                    <Table2 />
                                </div>
                            </div>

                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/CoinPurchaseHistory"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My page'} subtitle={''} />
                            <div class="information_wrapper">
                                <AccountLnb account={'account5'} />
                                <div class="information_div">
                                    <Balance url={'./coinshop'} button={'Buy Coin'} />
                                    <HistoryFilter />
                                    <Table3 />
                                </div>
                            </div>
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            {/* 241017 추가 */}
            <Route
                path="/aika/PointsHistory"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My page'} subtitle={''} />
                            <div class="information_wrapper">
                                <AccountLnb account={'account6'} />
                                <div class="information_div">
                                    <Balance2 url={'#'} button={'Convert All to Coin'} />
                                    <HistoryFilter />
                                    <Table4 />
                                </div>
                            </div>
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            {/* 241017 추가 */}
            <Route
                path="/aika/CouponHistory"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My page'} subtitle={''} />
                            <div class="information_wrapper">
                                <AccountLnb account={'account7'} />
                                <div class="information_div">
                                    <Balance3 url={'#'} button={'Confirm'} />
                                    <HistoryFilter />
                                    <Table5 />
                                </div>
                            </div>
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/Block"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Block'} subtitle={''} />
                            <Block url={'https://goe.freshdesk.com/en/support/home'} />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/Error"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Error'} subtitle={''} />
                            <Error url={'/aika'} />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/character"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Character Ranking'} subtitle={''} />
                            <SubMenu_Aika menu={'character'} />
                            <Ranking_Filter />
                            <Ranking_Table />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/guild"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Guild Ranking'} subtitle={''} />
                            <SubMenu_Aika menu={'guild'} />
                            <Ranking_Filter filter={'guild'} />
                            <Ranking_Table2 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/durgeon"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Dungeon Ranking'} subtitle={''} />
                            <SubMenu_Aika menu={'durgeon'} />
                            <Ranking_Filter filter={'all'} />
                            <Ranking_Table3 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/relics"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Situation of the Relics'} subtitle={''} />
                            <SubMenu_Aika menu={'relics'} />
                            <Ranking_Table4 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/mark"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Guild mark registration'} subtitle={''} />
                            <SubMenu_Aika menu={'mark'} />
                            <Ranking_Table5 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/guild_register"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Guild mark registration'} subtitle={''} />
                            <SubMenu_Aika menu={'mark'} />
                            <Board4 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/slots"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Guild Slots'} subtitle={''} />
                            <SubMenu_Aika menu={'slots'} />
                            <Ranking_Table6 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/ticket_history"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Ticket History'} subtitle={''} />
                            <Board />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/ticket_submit"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Submit A Ticket'} subtitle={''} />
                            <Board2 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika/my_ticket"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My Ticket'} subtitle={''} />
                            <Board3 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />

            {/* 241017 추가 */}
            <Route
                path="/aika/faq"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'FAQ'} subtitle={''} />

                            <Faq />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />

            {/* AIKA_po start */}
            <Route
                path="/aika_po"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <Redirect url={'/aika_po/news'} />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/landing"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <LandingAika />
                        </div>
                    </div>
                }
            />

            <Route
                path="/aika_po/news"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubAIKA />
                            <SubMenu_Aika menu={'news'} />
                            <News_Aika />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/view"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubMenu_Aika menu={'news'} />
                            <View_Aika />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/feature"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubAIKA />
                            <SubMenu_Aika menu={'feature'} />
                            <SubMenu_Feature />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/calendar"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubAIKA />
                            <SubMenu_Aika menu={'calendar'} />
                            <Calendar_Aika />
                            <SubFooter />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/coinshop"
                element={
                    <div className="App">
                        <div class="sub-desktop coinshop_wrapper">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop
                                bg={'bottom_aika'}
                                heading={'M-Coin Shop'}
                                subtitle={
                                    'Aika Online Global uses M-Coin as its currency for the purchase of in-game items'
                                }
                            />
                            <Balance url={'./coinpurchasehistory'} button={'Purchase History'} />
                            <Coinshop />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/coinshop2"
                element={
                    <div className="App">
                        <div class="sub-desktop coinshop_wrapper">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop
                                bg={'bottom_aika'}
                                heading={'M-Coin Shop'}
                                subtitle={
                                    'Aika Online Global uses M-Coin as its currency for the purchase of in-game items'
                                }
                            />
                            <Balance url={'./coinpurchasehistory'} button={'Purchase History'} />
                            <Coinshop2 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/coinshop3"
                element={
                    <div className="App">
                        <div class="sub-desktop coinshop_wrapper">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop
                                bg={'bottom_aika'}
                                heading={'M-Coin Shop'}
                                subtitle={
                                    'Aika Online Global uses M-Coin as its currency for the purchase of in-game items'
                                }
                            />
                            <Balance url={'./coinpurchasehistory'} button={'Purchase History'} />
                            <Coinshop3 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />

            <Route
                path="/aika_po/purchase_completed"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop
                                bg={'bottom_aika'}
                                heading={'M-Coin Shop'}
                                subtitle={
                                    'Aika Online Global uses M-Coin as its currency for the purchase of in-game items'
                                }
                            />
                            <Purchase
                                logo={'aika'}
                                messageTitle={'Purchase completed!'}
                                messageTxt={'You have successfully purchased G-Coins!'}
                                linkTxt={'Purchase History'}
                                linkUrl={'./history'}
                            />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/purchase_failed"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop
                                bg={'bottom_aika'}
                                heading={'M-Coin Shop'}
                                subtitle={
                                    'Aika Online Global uses M-Coin as its currency for the purchase of in-game items'
                                }
                            />
                            <Purchase
                                logo={'aika'}
                                messageTitle={'Purchase failed!'}
                                messageTxt={
                                    'Purchase has been failed because something went wrong. Your account has not been charged.'
                                }
                                linkTxt={'Purchase History'}
                                linkUrl={'./history'}
                            />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/password_changed"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My page'} subtitle={''} />
                            <Purchase
                                logo={'aika'}
                                messageTitle={'Password Changed!'}
                                messageTxt={'Password has been changed successfully.'}
                                linkTxt={'Go to Account'}
                                linkUrl={'./accountinformation'}
                            />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/signup_completed"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Sign up'} subtitle={''} />
                            <Purchase
                                logo={'aika'}
                                messageTitle={'Sign up Completed!'}
                                messageTxt={
                                    'Welcome to Twelve Sky2 on an unforgettable adventure presended by CBM Entertainment.'
                                }
                                linkTxt={'Go to Homepage'}
                                linkUrl={'./'}
                            />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/signup"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Sign up'} subtitle={''} />

                            <FormSignup logo={'aika'} linkTxt={'Create Account'} linkUrl={'./'} />

                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/signin"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Sign in'} subtitle={''} />
                            <FormSignin logo={'aika'} linkTxt={'Sign in'} linkUrl={'./'} />

                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/vaildcode"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Sign up'} subtitle={''} />
                            <FormVaildcode logo={'aika'} linkTxt={'Valid Code'} linkUrl={'./'} />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/find"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Sign in'} subtitle={''} />
                            <FormFind logo={'aika'} linkTxt={'Find Password'} linkUrl={'#!'} />

                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/FindPasswordChange"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Sign up'} subtitle={''} />
                            <FormFindPasswordChange logo={'aika'} linkTxt={'Update Password'} linkUrl={'./'} />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/PasswordChange"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Sign up'} subtitle={''} />
                            <FormPasswordChange logo={'aika'} linkTxt={'Update Password'} linkUrl={'./'} />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/AccountInformation"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My page'} subtitle={''} />
                            <AccountInformation_Aika />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/AccountDetail"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My page'} subtitle={''} />
                            <AccountDetail_Aika />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/LoginHistory"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My page'} subtitle={''} />
                            <div class="information_wrapper">
                                <AccountLnb account={'account3'} />
                                <div class="information_div">
                                    <HistoryFilter />
                                    <Table1 />
                                </div>
                            </div>
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/IngamePurchaseHistory"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My page'} subtitle={''} />
                            <div class="information_wrapper">
                                <AccountLnb account={'account4'} />
                                <div class="information_div">
                                    <Balance url={'./coinshop'} button={'Buy Coin'} />
                                    <HistoryFilter />
                                    <Table2 />
                                </div>
                            </div>

                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/CoinPurchaseHistory"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My page'} subtitle={''} />
                            <div class="information_wrapper">
                                <AccountLnb account={'account5'} />
                                <div class="information_div">
                                    <Balance url={'./coinshop'} button={'Buy Coin'} />
                                    <HistoryFilter />
                                    <Table3 />
                                </div>
                            </div>
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/Block"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Block'} subtitle={''} />
                            <Block url={'https://goe.freshdesk.com/en/support/home'} />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/Error"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Error'} subtitle={''} />
                            <Error url={'/aika_po'} />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/character"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Character Ranking'} subtitle={''} />
                            <SubMenu_Aika menu={'character'} />
                            <Ranking_Filter />
                            <Ranking_Table />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/guild"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Guild Ranking'} subtitle={''} />
                            <SubMenu_Aika menu={'guild'} />
                            <Ranking_Filter filter={'guild'} />
                            <Ranking_Table2 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/durgeon"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Dungeon Ranking'} subtitle={''} />
                            <SubMenu_Aika menu={'durgeon'} />
                            <Ranking_Filter filter={'all'} />
                            <Ranking_Table3_po />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/relics"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Situation of the Relics'} subtitle={''} />
                            <SubMenu_Aika menu={'relics'} />
                            <Ranking_Table4_po />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/mark"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Guild mark registration'} subtitle={''} />
                            <SubMenu_Aika menu={'mark'} />
                            <Ranking_Table5 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/guild_register"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Guild mark registration'} subtitle={''} />
                            <SubMenu_Aika menu={'mark'} />
                            <Board4 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/slots"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Guild Slots'} subtitle={''} />
                            <SubMenu_Aika menu={'slots'} />
                            <Ranking_Table6 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/ticket_history"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Ticket History'} subtitle={''} />
                            <Board />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/ticket_submit"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'Submit A Ticket'} subtitle={''} />
                            <Board2 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
            <Route
                path="/aika_po/my_ticket"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop bg={'bottom_aika'} heading={'My Ticket'} subtitle={''} />
                            <Board3 />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
        </Routes>
    );
}

export default App;
