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

import SubNavi from './Ts2/SubNavi/SubNavi.js';
import SubTS2 from './Ts2/SubTS2/SubTS2.js';
import SubMenu from './Ts2/SubMenu/SubMenu.js';
import Feature from './Ts2/Feature/Feature.js';
import News from './Ts2/News/News.js';
import View from './Ts2/View/View.js';
import SubFooter from './Ts2/SubFooter/SubFooter.js';
import Coinshop from './Ts2/Coinshop/Coinshop.js';
import Purchase from './Ts2/Purchase/Purchase.js';

import Kopazar from './Ts2/Kopazar/Kopazar.js';
import AccountInformation from './Ts2/AccountInformation/AccountInformation.js';
import AccountDetail from './Ts2/AccountDetail/AccountDetail.js';

import Block from './components/Block/Block.js';
import Error from './components/Error/Error.js';
import Redirect from './components/Redirect/Redirect.js';
import Calendar from './Ts2/Calendar/Calendar.js';
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
                path="/ts2"
                element={
                    <div className="App">
                        <Redirect url={'/ts2/news'} />
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
                        <div class="sub-desktop">
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
        </Routes>
    );
}

export default App;
