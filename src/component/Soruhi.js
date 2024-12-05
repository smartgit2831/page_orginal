import React, { useState } from 'react'
import CreatSlide from './CreatSlide'
import { NavLink } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'

export default function Soruhi() {
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
    const {data , loading, error} = useAxios("https://smartgit2831.github.io/file_json/soruhi.json")
    return (
        <section className="dragble-list">
            <div className="title ico" onMouseMove={()=>showe()} onMouseLeave={()=>hide()}>
                <NavLink to={'/more/soruhi'} className='titleee'>صراحی <i className={hoverMove ? "fas fa-angle-right" : ""}></i><i className={hoverLeave ? "fas fa-angle-left" : ""}></i></NavLink>
            
            </div>
                <p className={hoverMove ? "animate__animated animate__fadeInRight display-block" : " display-none"}>نرده سنگی که از ان جهت تزئینات پله و زیبایی پلکان به کار برده می شود که باطرح اندازه های گوناگونی وجود دارد برای دیدن عکس ها روی کلمه صراحی یا تصویر کلیک کنید</p>
            <CreatSlide data={data && data.soruhi} loading={loading} error={error}/>
        </section>
    )
}
