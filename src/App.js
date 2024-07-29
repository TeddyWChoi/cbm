import { Routes, Route } from 'react-router-dom';

import './Global.css';
import './Styleguide.css';

import Navi from './components/Navi/Navi.js';
import Slider from './components/Slider/Slider.js';
import Main from './components/Main/Main.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer.js';
import Balance from './components/Balance/Balance.js';
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
import FormSignup from './components/Form/FormSignup.js';
import FormSignin from './components/Form/FormSignin.js';
import FormFind from './components/Form/FormFind.js';
import FormFindPasswordChange from './components/Form/FormFindPasswordChange.js';
import FormPasswordChange from './components/Form/FormPasswordChange.js';
import FormVaildcode from './components/Form/FormVaildcode.js';
import LandingTs2 from './Ts2/LandingTs2/Landing.js';
import LandingAika from './Aika/LandingAika/Landing.js';

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
                            <SubTop heading={'My page'} subtitle={''} />
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
                            <SubTop heading={'Sign up'} subtitle={''} />
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
                            <SubTop heading={'Sign up'} subtitle={''} />

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
                            <SubTop heading={'Sign in'} subtitle={''} />
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
                            <SubTop heading={'Sign up'} subtitle={''} />
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
                            <SubTop heading={'Sign in'} subtitle={''} />
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
                            <SubTop heading={'Sign up'} subtitle={''} />
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
                            <SubTop heading={'Sign up'} subtitle={''} />
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
                            <SubTop heading={'My page'} subtitle={''} />
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
                            <SubTop heading={'My page'} subtitle={''} />
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
                            <SubTop heading={'My page'} subtitle={''} />
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
                            <SubTop heading={'My page'} subtitle={''} />
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
                            <SubTop heading={'My page'} subtitle={''} />
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
                            <SubTop heading={'Block'} subtitle={''} />
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
                            <SubTop heading={'Error'} subtitle={''} />
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
                            <SubTop heading={'My page'} subtitle={''} />
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
                            <SubTop heading={'Sign up'} subtitle={''} />
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
                            <SubTop heading={'Sign up'} subtitle={''} />

                            <FormSignup logo={'aika'} linkTxt={'Create Account'} linkUrl={'./'} />

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
                            <SubTop heading={'Sign in'} subtitle={''} />
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
                            <SubTop heading={'Sign up'} subtitle={''} />
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
                            <SubTop heading={'Sign in'} subtitle={''} />
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
                            <SubTop heading={'Sign up'} subtitle={''} />
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
                            <SubTop heading={'Sign up'} subtitle={''} />
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
                            <SubTop heading={'My page'} subtitle={''} />
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
                            <SubTop heading={'My page'} subtitle={''} />
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
                            <SubTop heading={'My page'} subtitle={''} />
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
                            <SubTop heading={'My page'} subtitle={''} />
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
                            <SubTop heading={'My page'} subtitle={''} />
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
                path="/aika/Block"
                element={
                    <div className="App">
                        <div class="sub-desktop">
                            <SubNavi_Aika is_login={is_login} />
                            <SubTop heading={'Block'} subtitle={''} />
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
                            <SubTop heading={'Error'} subtitle={''} />
                            <Error url={'/aika'} />
                            <SubFooterAika />
                        </div>
                    </div>
                }
            />
        </Routes>
    );
}

export default App;
