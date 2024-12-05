import React, { useEffect, useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import '../css/Search.css'

export default function Search() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')
    
    const url = 'http://localhost:3000/soruhi?q='+ query
    const url1 = 'http://localhost:3000/rushoey?q='+ query
    const url2 = 'http://localhost:3000/abnama?q='+ query
    const {data} = useFetch(url)
    const {data : data1} = useFetch(url1)
    const {data : data2} = useFetch(url2)

    // در اینجا ما امدیم و تمام ارایه های ما را یکی کردیم و بعد فیلتر زدیم بر  اساس ورودی که می دهد
    const Array_All = data && data.concat(data1, data2)
    console.log(Array_All && Array_All.filter(obj => obj && obj.title.toLowerCase().includes(query.toLowerCase().toString()) ))

  return (
    <div>
        <main className="scrooll">
            <div className="row ">
                {Array_All && Array_All.filter(obj => obj && obj.title.toLowerCase().includes(query.toLowerCase().toString()) ).map((e)=>(
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 hide-one">
                        <div className="shoping-card margi-top">
                            <div className="img-sec">
                                <NavLink to={`http://localhost:3001/${e.name}/${e.id}`}><img src={`../images/${e.src}`} alt=""></img></NavLink>
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
