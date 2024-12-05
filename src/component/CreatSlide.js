import { Swiper, SwiperSlide } from 'swiper/react'
import '../css/styles.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Alert from './Alert';
import { useAxios } from '../hooks/useAxios';

export default function CreatSlide({data, loading, error}) {
    const {dataB, postAxios} = useAxios("https://smartgit2831.github.io/file_json/buy.json")
    const [data_buying ,setData_buying] = useState({})
    const [Show, setShow] = useState(false)
    const [DataAlert, setDataAlert] = useState()

    useEffect(()=>{
        fetch("https://smartgit2831.github.io/file_json/buy.json")
        .then(response => response.json())
        .then(data =>setData_buying(data))
        .catch(error => console.log(error))
    },[data_buying])
    function buy(e){
        // e.preventDefault();
        setDataAlert(e);
        const title = e.title;
        const id = e.id;
        const src = e.src;
        const price = e.price;

        if(data_buying.find(obj => obj.id === e.id) === undefined){
            postAxios(id, title, price, src)
            setShow(true)
        }
        // setTimeout(()=>{setShow(false)},2000)

    }
    return (
        <Swiper slidesPerView={1} spaceBetween={10} pagination={{ clickable: true,}} modules={[Pagination]} breakpoints={{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3, spaceBetween:30}}} className="mySwiper">
            {loading && <p style={{textAlign: 'center'}}>is Loading</p>}
            {error && <p>{error}</p>}
    
            {Show ? <Alert message={"این کالا به سبد خرید اضافه شد"} type={'success'} data={DataAlert}/> : '' }


            {data && data.map((e)=>(
                <>
                <SwiperSlide key={e.id}>
                    <div>
                        <div className="item" draggable={false}>
                            <div className="shoping-card">
                                <div className="img-sec">
                                    <NavLink to={`/${e.name}/${e.id}`}><img src={e.src} alt=""></img></NavLink>
                                </div>
                                <div className="title">
                                    <NavLink to={`/${e.name}/${e.id}`}>{e.title}</NavLink>
                                </div>
                                <div className="buttons">
                                    <div className="right">
                                        <span className="price">{e.price.toLocaleString('en',{useGrouping:true,maximumSignificantDigits:3})}</span>
                                    </div>
                                    <div className="left">
                                        <div className="extend-btn">
                                            <a className="b-text" href="/">علاقه</a>
                                            <a className="b-icon" href="/"><i className="fas fa-heart"></i></a>
                                        </div>
                                        <div className="extend-btn">
                                            <span className="b-text" onClick={()=>buy(e)}>خرید</span>
                                            <span className="b-icon" onClick={()=>buy(e)}><i className="fas fa-shopping-cart"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                </>
            ))}
        </Swiper>
    )
}



// {data && data.map((e)=>(
//     <div>
//         {e.title}
//     </div>
// ))}