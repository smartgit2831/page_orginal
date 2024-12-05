import { useParams } from "react-router-dom"
import '../css/Detail.css'
import { useAxios } from "../hooks/useAxios";
export default function Detail() {
  const {name, id} = useParams()
  const url = "https://smartgit2831.github.io/file_json/"+name+".json";
  console.log(url)
  const {data} = useAxios(url)
  console.log(data && data[name][id-1])
  return (
    <div className="space-top">
        <>
            {data &&
                <div style={{marginTop : '7%'}}>
                    <div className="item" draggable={false}>
                        <div className="shoping-card">
                            <div className="img-sec">
                                <img src={data[name][id-1].src} alt=""></img>
                            </div>
                            <div className="title">
                                {data[name][id-1].title}
                            </div>
                            {data[name][id-1].detail && <div className="detail">
                                <p className="right">{data[name][id-1].detail}</p>
                                <ul className="left">
                                    {data[name][id-1].length && <li>طول : {data[name][id-1].length}</li>}
                                    {data[name][id-1].width && <li>عرض : {data[name][id-1].width}</li>}
                                    {data[name][id-1].height && <li>ارتفاع : {data[name][id-1].height}</li>}
                                </ul>
                            </div>}
                            <div className="buttons">
                                <div className="right">
                                    <span className="price">{data[name][id-1].price.toLocaleString('en',{useGrouping:true,maximumSignificantDigits:3})}</span>
                                </div>
                                <div className="left">
                                    <div className="extend-btn">
                                        <a className="b-text" href="/">علاقه</a>
                                        <a className="b-icon" href="/"><i className="fas fa-heart"></i></a>
                                    </div>
                                    <div className="extend-btn">
                                        <span className="b-text" href="">خرید</span>
                                        <a className="b-icon" href="/"><i className="fas fa-shopping-cart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    </div>
  )
}
