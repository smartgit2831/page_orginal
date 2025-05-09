import { useState } from 'react'

import '../css/Parametr.css'
export default function Parametr() {
        const item = [
            {'tag' : 'tag1', "title": "جستو جو برای مسابقات" ,"more":"جستجو و فیلتر کردن میلیون‌ها محصول و عرضه‌کننده برای یافتن موارد منطبق برای ساختمان تان.", "ico" : "//s.alicdn.com/@img/imgextra/i4/O1CN01mkYwO01N9PeKLQWYq_!!6000000001527-2-tps-96-96.png", 'image' : 'https://s.alicdn.com/@img/imgextra/i1/O1CN01KrWFW11fg52xUQzdc_!!6000000004035-0-tps-1380-1060.jpg_q60.jpg'},
            {'tag' : 'tag2',"title": "محصول مناسب را شناسایی کنید" ,"more":"کیفیت محصول و قابلیت های تامین کننده را به راحتی و کارآمد از طریق بازرسی های تایید شده و ابزارهای منبع دیجیتال ارزیابی کنید.", "ico" : "//s.alicdn.com/@img/imgextra/i4/O1CN015lgvwy1md3g5nlS9C_!!6000000004976-2-tps-96-96.png", 'image' : 'https://s.alicdn.com/@img/imgextra/i2/O1CN0168f1F61TkrjFojnmE_!!6000000002421-2-tps-1380-1060.png_q60.jpg'},
            {'tag' : 'tag3',"title": "با اطمینان پرداخت کنید" ,"more":"هزینه سفارش خود را با بیش از 20 ارز از طریق بیش از 20 روش پرداخت امن، از جمله شرایط پرداخت انعطاف پذیر، پرداخت کنید.", "ico" : "//s.alicdn.com/@img/imgextra/i3/O1CN01HZd7ME1fEbDXenc3M_!!6000000003975-2-tps-96-96.png", 'image' : 'https://s.alicdn.com/@img/imgextra/i1/O1CN01XW2muo1PFU87b4zQ5_!!6000000001811-2-tps-1380-1060.png_q60.jpg'},
            {'tag' : 'tag4',"title": "با شفافیت عمل کنید" ,"more":"نیازهای تدارکات خود را با ردیابی بی‌درنگ برای بیش از 26000 مسیر در 220 کشور و منطقه که توسط Ston Decoration ارائه می‌شود، برآورده کنید.", "ico" : "//s.alicdn.com/@img/imgextra/i3/O1CN01Q2EI0L1iqYtRZh1gI_!!6000000004464-2-tps-96-96.png", 'image' : 'https://s.alicdn.com/@img/imgextra/i2/O1CN01spEIDZ1TPnVsDakHo_!!6000000002375-2-tps-1380-1060.png_q60.jpg'},
            {'tag' : 'tag5',"title": "به راحتی مدیریت کنید" ,"more":"وضعیت سفارش را بررسی کنید، تامین‌کنندگان را مدیریت کنید، پرداخت‌ها و محموله‌ها را پیگیری کنید و با پشتیبانی پس از فروش از طریق More تماس بگیرید.", "ico" : "//s.alicdn.com/@img/imgextra/i4/O1CN01bw2aFV1obnp2vp772_!!6000000005244-2-tps-96-96.png", 'image' : 'https://s.alicdn.com/@img/imgextra/i1/O1CN01HrdHbz2511UJNFOxq_!!6000000007465-2-tps-1380-1060.png_q60.jpg'}
        ]

        const [hoveredTag, setHoveredTag] = useState('tag1')
        const handelHover = (tag)=>{
            setHoveredTag(tag)
        }
    
  return (
    <div>
        <div className="row">
            <div className="col-6">
                <div>
                <div className='full-whrite'></div>
                <ul>
                    {item && item.map((e)=>(
                        <li className={hoveredTag === `${e.tag}` ? 'hovered row li' : 'row li'} onMouseEnter={()=>{handelHover(e.tag) }}>
                            <div className={hoveredTag === `${e.tag}` ? 'bold col-4' : 'icon col-4'}>
                                <img src={e.ico} alt="" />
                            </div>
                            <div className={hoveredTag === `${e.tag}` ? 'matn1 col-8' : 'matn col-8'}>
                                <h3>{e.title}</h3>
                                <span className='none_width_small'><p className={hoveredTag === `${e.tag}` ? 'block' : 'none'}>{e.more}</p></span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="col-6 images">
            {item && item.map((e)=>(
                <div>
                    <img src={e.image} className={hoveredTag === `${e.tag}` ? 'block img11' : 'none'}  alt="" />
                    <span className='none_width_big'><p className={hoveredTag === `${e.tag}` ? 'block color_matn_image' : 'none'}>{e.more}</p></span>
                </div>
            ))}
        </div>
    </div>

    






















        {/* <div className="row">

            <div className="col-6">
                <div>
                <div className='full-whrite'></div>
                <ul>

                    <li className={hoveredTag === 'tag1' ? 'hovered row li' : 'row li'} onMouseEnter={()=>{handelHover('tag1') }}>
                        <div className={hoveredTag === 'tag1' ? 'bold col-4' : 'icon col-4'}>
                            <img src="//s.alicdn.com/@img/imgextra/i4/O1CN01mkYwO01N9PeKLQWYq_!!6000000001527-2-tps-96-96.png" alt="" />
                        </div>
                        <div className={hoveredTag === 'tag1' ? 'matn1 col-8' : 'matn col-8'}>
                            <h3>جستو جو برای مسابقات</h3>
                            <p className={hoveredTag === 'tag1' ? 'block' : 'none'}>جستجو و فیلتر کردن میلیون‌ها محصول و عرضه‌کننده برای یافتن موارد منطبق برای کسب‌وکارتان.</p>
                        </div>
                    </li>


                    <li className={hoveredTag === 'tag2' ? 'hovered row li' : 'row li'} onMouseEnter={()=>{handelHover('tag2') }}>
                        <div className={hoveredTag === 'tag2' ? 'bold col-4' : 'icon col-4'}>
                            <img src="//s.alicdn.com/@img/imgextra/i4/O1CN015lgvwy1md3g5nlS9C_!!6000000004976-2-tps-96-96.png" alt="" />
                        </div>
                        <div className={hoveredTag === 'tag2' ? 'matn1 col-8' : 'matn col-8'}>
                            <h3>مناسب را شناسایی کنید</h3>
                            <p className={hoveredTag === 'tag2' ? 'block' : 'none'}>کیفیت محصول و قابلیت های تامین کننده را به راحتی و کارآمد از طریق بازرسی های تایید شده و ابزارهای منبع دیجیتال ارزیابی کنید.</p>
                        </div>
                    </li>

                    <li className={hoveredTag === 'tag3' ? 'hovered row li' : 'row li'} onMouseEnter={()=>{handelHover('tag3') }}>
                        <div className={hoveredTag === 'tag3' ? 'bold col-4' : 'icon col-4'}>
                            <img src="//s.alicdn.com/@img/imgextra/i3/O1CN01HZd7ME1fEbDXenc3M_!!6000000003975-2-tps-96-96.png" alt="" />
                        </div>
                        <div className={hoveredTag === 'tag3' ? 'matn1 col-8' : 'matn col-8'}>
                            <h3>با اطمینان پرداخت کنید</h3>
                            <p className={hoveredTag === 'tag3' ? 'block' : 'none'}>هزینه سفارش خود را با بیش از 20 ارز از طریق بیش از 20 روش پرداخت امن، از جمله شرایط پرداخت انعطاف پذیر، پرداخت کنید.</p>
                        </div>
                    </li>

                    <li className={hoveredTag === 'tag4' ? 'hovered row li' : 'row li'} onMouseEnter={()=>{handelHover('tag4') }}>
                        <div className={hoveredTag === 'tag4' ? 'bold col-4' : 'icon col-4'}>
                            <img src="//s.alicdn.com/@img/imgextra/i3/O1CN01Q2EI0L1iqYtRZh1gI_!!6000000004464-2-tps-96-96.png" alt="" />
                        </div>
                        <div className={hoveredTag === 'tag4' ? 'matn1 col-8' : 'matn col-8'}>
                            <h3>با شفافیت عمل کنید</h3>
                            <p className={hoveredTag === 'tag4' ? 'block' : 'none'}>نیازهای تدارکات خود را با ردیابی بی‌درنگ برای بیش از 26000 مسیر در 220 کشور و منطقه که توسط Alibaba.com Logistics ارائه می‌شود، برآورده کنید.</p>
                        </div>
                    </li>

                    <li className={hoveredTag === 'tag5' ? 'hovered row li' : 'row li'} onMouseEnter={()=>{handelHover('tag5') }}>
                        <div className={hoveredTag === 'tag5' ? 'bold col-4' : 'icon col-4'}>
                            <img src="//s.alicdn.com/@img/imgextra/i4/O1CN01bw2aFV1obnp2vp772_!!6000000005244-2-tps-96-96.png" alt="" />
                        </div>
                        <div className={hoveredTag === 'tag5' ? 'matn1 col-8' : 'matn col-8'}>
                            <h3>به راحتی مدیریت کنید</h3>
                            <p className={hoveredTag === 'tag5' ? 'block' : 'none'}>وضعیت سفارش را بررسی کنید، تامین‌کنندگان را مدیریت کنید، پرداخت‌ها و محموله‌ها را پیگیری کنید و با پشتیبانی پس از فروش از طریق My Alibaba تماس بگیرید.</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
            </div>
            <div className="col-6 images">
                <img src='./images/search.avif' className={hoveredTag === 'tag1' ? 'img11' : 'none'}  alt="" />
                <img src='./images/idintify.avif' className={hoveredTag === 'tag2' ? 'block img11' : 'none'}  alt="" />
                <img src='./images/pay.avif' className={hoveredTag === 'tag3' ? 'block img11' : 'none'} alt="" />
                <img src='./images/fulfill.avif' className={hoveredTag === 'tag4' ? 'block img11' : 'none'} alt="" />
                <img src='./images/manage.avif' className={hoveredTag === 'tag5' ? 'block img11' : 'none'} alt="" />
            </div>
        </div> */}
        
    </div>
  )
}
