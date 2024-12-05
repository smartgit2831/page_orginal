import "../css/Footer.css"

export default function Footer() {
  return (
    <div>
        <footer>
            <div className="row" style={{marginLeft : "0px"}}>
                <div className="col-lg-8 col-sm-8 col-p-8">
                    <div className="right">
                        <div className="title">
                            درباره ما
                        </div>
                        <div className="des">
                            <ul className="button1">
                                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">محصولات</button>
                                <ul className="dropdown-menu">
                                    <button type="button" className="btn btn-primary"><a className="dropdown-item" href="sorahi.html">صراحی </a></button>
                                    <button type="button" className="btn btn-primary"><a className="dropdown-item" href="sher.html"> شیر </a></button>
                                    <button type="button" className="btn btn-primary"><a className="dropdown-item" href="tazeenat.html"> قطعات </a></button>
                                    <button type="button" className="btn btn-primary"><a className="dropdown-item" href="roshoyee.html"> روشویی </a></button>
                                    <button type="button" className="btn btn-primary"><a className="dropdown-item" href="abnama.html"> ابنما </a></button>
                                    <button type="button" className="btn btn-primary"><a className="dropdown-item" href="abnama.html"> پایه ایفون </a></button>
                                </ul>
                            </ul>
                        </div>
                        <div className="adress">
                            <p>نشانی:  شهر تهران  </p>
                            <p>تلفن تماس:    09162741254</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-p-4">
                    <div className="left">
                        <div className="title">
                            ما را در شبکه های اجتماعی دنبال کنید
                        </div>
                        <div className="socials">
                            <a href="/"><i className="fab fa-twitter"></i></a>
                            <a href="/"><i className="fab fa-instagram"></i></a>
                            <a href="/"><i className="fab fa-linkedin"></i></a>
                            <a href="/"><i className="fab fa-telegram-plane"></i></a>
                        </div>
                        <div className="namad-electonik">
                            <img src="./picture/kha.jpg" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                کلیه حقوق محفوظ می باشد 2022 ©
            </div>
        </footer>
    </div>
  )
}
