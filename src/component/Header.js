import React, { useState } from 'react'
import '../css/Header.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Header() {
    const [followerinstagram, setFollowerInstagram] = useState(0)
    const [followerfacebook, setFollowerFacebook] = useState(0)
    function follow(){
        let instagram=followerinstagram ;
        let facebook=followerfacebook ;
            setInterval(()=>{
                if(instagram < 1971){
                    setFollowerInstagram(++instagram)
                }else{
                    clearInterval()
                }
            },0.5)
            setInterval(()=>{
                if(facebook < 2351){
                    setFollowerFacebook(++facebook)
                }else{
                    clearInterval()
                }
            },0.5)
    }
    follow()
  return (
    <div>
        <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false,}}
            pagination={{clickable: true,}}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><img id="mahdi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eQYPuSnEG1I4WeROhDfTRSuGfMwlgRTgIg&s" alt=""></img></SwiperSlide>
            <SwiperSlide><img id="mahdi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4k84vwQWPuor1f2ykOb8jO22THC3EHJ2dXw&s" alt=""></img></SwiperSlide>
            <SwiperSlide><img id="mahdi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33M0kvIxQzYlZ4WtgJJHZePRo_qCk8LcEUA&s" alt=""></img></SwiperSlide>
        </Swiper>
        <div className="alaghe">
            <div className="counter-container">
                <div className="counter" data-target="1971" >{followerinstagram}</div>
                <i className="fab fa-youtube fa-3x pop"></i>
                <span className="count">یوتیوب</span>
            </div>
            <div className="counter-container">
                <div className="counter" data-target="2351">{followerfacebook}</div>
                <i className="fab fa-facebook fa-3x pop"></i>
                <span className="count">فیسبوک</span>
            </div>
        </div>
    </div>
  )
}
