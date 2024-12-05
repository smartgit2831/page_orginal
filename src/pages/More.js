import { NavLink, useParams } from 'react-router-dom'
import '../css/More.css'
import { useFetch } from '../hooks/useFetch'

export default function More() {
    const {name} = useParams()
    const {data} = useFetch("https://smartgit2831.github.io/file_json/"+name+".json")
    return (
        <div>
        <main className="scrooll">
            <div className="row ">
                <NavLink to={`/creatpost/${name}`} style={{textDecoration : "none"}}><p className='plus'><span>+</span></p></NavLink>
                {data && data[name].map((e)=>(
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 hide-one">
                        <div className="shoping-card margi-top">
                            <div className="img-sec">
                                <NavLink to={`/${e.name}/${e.id}`}><img src={e.src} alt=""></img></NavLink>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div className="title">
                                {e.title}
                            </div>
                            <div className="buttons">
                                <div className="right">
                                    <span className="price">{e.price.toLocaleString('en',{useGrouping:true,maximumSignificantDigits:3})}</span>
                                </div>
                                <div className="left">
                                    <div className="extend-btn">
                                        <a className="b-text" href="">علاقه</a>
                                        <a className="b-icon" href=""><i className="fas fa-heart"></i></a>
                                    </div>
                                    <div className="extend-btn">
                                        <a className="b-text" href="">خرید</a>
                                        <a className="b-icon" href=""><i className="fas fa-shopping-cart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </main>
    </div>
  )
}