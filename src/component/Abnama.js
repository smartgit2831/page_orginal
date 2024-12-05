import { useState } from "react"
import CreatSlide from "./CreatSlide"
import { NavLink } from "react-router-dom"
import { useAxios } from "../hooks/useAxios"



export default function Abnama() {
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
    const {data , loading, error} = useAxios("https://smartgit2831.github.io/file_json/abnama.json")
  return (
    <section className="dragble-list">
        <div className="title ico" onMouseMove={()=>showe()} onMouseLeave={()=>hide()}>
            <NavLink to={'/more/abnama'} className='titleee'>ابنما <i className={hoverMove ? "fas fa-angle-right" : ""}></i><i className={hoverLeave ? "fas fa-angle-left" : ""}></i></NavLink>
        
        </div>
            <p className={hoverMove ? "animate__animated animate__fadeInRight display-block" : " display-none"}>با اب می توان ساختارهایی بسیار زیبا با سنگ بوجود اورد که با دیدن ریزش اب و شنیدن صدای دلنوازش ارامش واحساس خوبی به ما می دهد
            از ابنمای سنگی می توان در حیاط بسیاری از خانه های لوکس و ویلا استفاده کرد در ابنمای سنگی ابزارهایی بسیار زیبا و ظریف به کار رفته که سبک طراحی ابنما ها متقارن و به شکل مدل های باستانی با جزیات فراوان است </p>
        <CreatSlide data={data && data.abnama} loading={loading} error={error}/>
     
    </section>
  )
}
