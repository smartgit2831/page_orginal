import React, { useState } from 'react'
import '../css/styles.css'
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/R-s-p-a.css'
import CreatSlide from './CreatSlide';
import { NavLink } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';

export default function Rushoey() {


    const [hoverMove , setHoverMove] = useState(false)
    const [hoverLeave , setHoverLeave] = useState(true)
    function showe(){
        if(hoverLeave){
            setHoverLeave(false)
        }
        if(!hoverMove){
            setHoverMove(true)
        }
    }
    function hide(){
        if(!hoverLeave){
            setHoverLeave(true)
            console.log("true")
        }
        if(hoverMove){
            setHoverMove(false)
        }
    }

    const {data, loading, error} = useAxios("https://smartgit2831.github.io/file_json/rushoey.json")
  return (

    <section className="dragble-list">
        <div className="title ico" onMouseMove={()=>showe()} onMouseLeave={()=>hide()}>
            <NavLink to={'/more/rushoey'} className='titleee'>روشویی <i className={hoverMove ? "fas fa-angle-right" : ""}></i><i className={hoverLeave ? "fas fa-angle-left" : ""}></i></NavLink>
         
        </div>
            <p className={hoverMove ? "animate__animated animate__fadeInRight display-block" : " display-none"}>روشویی های سنگی یکی از هنر های زیبایی هست که در حمام یا سرویس بهداشتی به کار میرود که دکوراسیونی بسیار شیک و جذاب برای شما به وجود می اورد مهم ترین ویژگی یک روشویی علاوه بر طراحی بسیار زیبا و متنوع کیفیت و دوام فوق العااده ان است
                تا به حال دیده اید که روشویی های چینی با طی کردن یک مدت زمان رنگ انها تغیر کرده و لکه هایی بوجود می اید که این لک ها و رنگ در روشویی سنگی نه تنها نمیرود بلکه نظافت انها بسیار اسان است
                برای دیدن روشویی ها می توانید روی تصویر یا کلمه روشویی کلیک کنید</p>
            <CreatSlide data={data && data.rushoey} loading={loading} error={error}/>
    </section>
  )
}
