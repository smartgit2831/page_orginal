import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import '../css/styles.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import '../css/R-s-p-a.css'
import { useAxios } from '../hooks/useAxios';

export default function SlideAuto() {
    const {data, loading, error} = useAxios("https://smartgit2831.github.io/file_json/slideAuto.json")

    const progressCircle = useRef(null)
    const progressContent = useRef(null)
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1-progress)
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
  return (

    <section className="dragble-list">
        <Swiper slidesPerView={2} spaceBetween={20} pagination={{ clickable: true,}} autoplay={{delay:2500, disableOnInteraction:false}} modules={[Pagination, Autoplay]} onAutoplayTimeLeft={onAutoplayTimeLeft} breakpoints={{640:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:4, spaceBetween:40}}} className="mySwiper">
            {loading && <p style={{textAlign: 'center'}}>is Loading</p>}
            {error && <p>{error}</p>}
            {data && data.slideAuto.map((e)=>(
                <>
                    <SwiperSlide key={e.id}>
                        <div>
                            <div className="item" draggable={false}>
                                <div className="shoping-card">
                                    <div className="img-sec">
                                        <img src={e.src} alt=""></img>
                                    </div>
                                    <div className="title">
                                        {e.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </>
            ))}
            <div className='autoplay-progress' slot="container-end">
                <svg viewBox='0 0 48 48' ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>
    </section>
  )
}
