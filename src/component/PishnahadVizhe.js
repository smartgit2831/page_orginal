import '../css/PishnahadVizhe.css'
import { useAxios } from '../hooks/useAxios'
import { useState } from 'react'
export default function PishnahadVizhe() {
    const url = "https://smartgit2831.github.io/file_json/pishnahadvizhe.json"
    const {data, loading, error} = useAxios(url)
    const [hours , setHours] = useState(24)
    const [minutes , setMinutes] = useState(60)
    const [secounds , setSecounds] = useState(60)
    function timer(){
        let sec = secounds;
        let min = minutes;
        let hour = hours;
        setInterval(() => {
            if(sec){
                setSecounds(--sec)
                if(sec < 1){
                    sec = 60;
                    setMinutes(--min)
                    if(min === 0){
                        console.log(min)
                        min = 60;
                        setHours(--hour)
                    }
                }
            }
        }, 1000);
    }
    timer()

    return (
        <div>
            {loading && <h2 style={{textAlign : 'center'}}>IsLoading</h2>}
            {error && <h2>{error}</h2>}

            <section className="super-offer-section">
                {data && data.pishnahadvizhe.map((e)=>(
                    <div className="row" key={e.id}>
                            
                        <div className="col-lg-9">
                            <div className="super-offer-box">
                                <span className="super-offer-box-title">
                                    پیشنهاد شگفت انگیز
                                </span>
                                <div className="body">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="image-container">
                                                <img className="charkhesh-aks" src={e.src} alt=""></img>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="spesification">
                                                <div className="price-row">
                                                    <div className="price">{e.price}</div>
                                                    <div className="off">تخفیف {e.takhfif}%</div>
                                                </div>
                                                <div className="title">{e.title}</div>
                                                <div className="counter-down">
                                                    <span >{secounds}</span> :
                                                    <span id="minutes">{minutes}</span> :
                                                    <span id="hours">{hours}</span>
                                                </div>
                                                <div className="remaining-time">زمان باقی مانده تا پایان سفارش</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="banner">
                                <img src={e.src} alt=""></img>
                            </div>
                        </div>

                    </div>
                ))}
            </section>     

        </div>
    )}
// <h3>{console.log(e.pisnahad && e.pisnahad.map((e)=>(e.title)))}</h3>