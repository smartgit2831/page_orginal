import '../css/Pishnahad.css'
import {useAxios} from '../hooks/useAxios'
export default function Pishnahad() {
    const url = "https://smartgit2831.github.io/file_json/pishnahad.json"
    const {data, error} = useAxios(url)
    // console.log(data && data.pishnahad)
  return (
    <div>
        <section className='product-sec-new'>
            <div className="row">
                {data && data.pishnahad.map((e)=>(
                    <div className="col-sm-3 product-sec" key={e.id} >
                        <div className="shoping-card">
                            <div className="img-sec pop">
                                <img src={e.src} alt=""></img>
                                <div className="stars">
                                    {e.stars && e.stars.map((e)=>(
                                        <i key={e.star} className="fas fa-star"></i>
                                        ))}
                                </div>
                            </div>
                            <div className="title" >
                                {e.title}
                            </div>
                            <div className="buttons">
                                <div className="right">
                                    <span className="price">{e.price.toLocaleString('en',{useGrouping:true,maximumSignificantDigits:3})}</span>
                                </div>
                                <div className="left">
                                    <div className="extend-btn">
                                        <span className="b-text">علاقه</span>
                                        <a className="b-icon" href="/"><i className="fas fa-heart"></i></a>
                                    </div>
                                    <div className="extend-btn">
                                        <span className="b-text">خرید</span>
                                        <span className="b-icon" ><i className="fas fa-shopping-cart"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}
