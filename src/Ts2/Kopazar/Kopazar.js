import './Kopazar.css';

export default function Kopazar(props) {
    return (
        <div className="Kopazar">
            <div class="instance-parent">
                <div class="frame-parent">
                    <div class="frame-group">
                        <div class="kp-logo-dark-parent">
                            <img alt="" class="kp-logo-dark-icon" src={require('../../assets/images/logo_kp.png')} />
                            <b class="epin-satn-almak">Epin satın almak için Kopazar'ı ziyaret edin</b>
                            <a href="#!" class="wwwkopazarcomkarahan-online">
                                www.kopazar.com/karahan-online
                            </a>
                        </div>
                        <div class="epin-ykleme-parent">
                            <b class="epin-ykleme">Epin Yükleme</b>
                            <div class="yetkili-satclarmzdan-ald">
                                Yetkili satıcılarımızdan aldığınız E-PİN'leri bu ekrandan yükleyebilirsiniz
                            </div>
                        </div>
                    </div>
                    <div class="frame-container">
                        <div class="frame-div">
                            <div class="frame">
                                <div class="form_input">
                                    <div class="form_title">E-PİN KODU</div>
                                    <input
                                        class="input"
                                        type="text"
                                        name="code"
                                        placeholder="örnek- XXXX-XXXX-XXXX-XXXX"
                                    ></input>
                                </div>
                                <div class="johndoeexamplecom1">
                                    <ul class="e-pin-16-karakter-uzunluunda">
                                        <li>E-Pin 16 karakter uzunluğunda olmalıdır.</li>
                                    </ul>
                                </div>

                                <div class="form_input">
                                    <div class="form_title">SERİ NO</div>
                                    <input
                                        class="input"
                                        type="text"
                                        name="seri"
                                        placeholder="örnek- 12a1b2xx91"
                                    ></input>
                                </div>
                                <div class="johndoeexamplecom1">
                                    <ul class="e-pin-16-karakter-uzunluunda">
                                        <li>Seri numarası 9-10 karakter uzunluğunda olmalıdır.</li>
                                    </ul>
                                </div>
                            </div>
                            <img alt="" class="image-30-icon" src={require('../../assets/images/img_sample.png')} />

                            <a href={props.linkUrl} class="btn-black">
                                <b class="proceed">{props.linkTxt}</b>
                            </a>
                        </div>
                        <div class="epin-ykleme-ve-container">
                            <span>
                                <span>Epin yükleme ve satın alma ile ilgili herhangi bir sorununuz varsa, lütfen </span>
                                <a href="#!" class="destek">
                                    destek
                                </a>
                                <span class="blmnden-bize-bilet"> bölümünden bize bilet gönderin.</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
