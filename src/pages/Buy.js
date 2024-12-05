import React, { useState } from 'react'
import '../css/Buy.css'
import { useEffect } from 'react';
import { useAxios } from '../hooks/useAxios';
import Alert from '../component/Alert';

export default function Buy() {
    const {data, deleteAxios} = useAxios("https://smartgit2831.github.io/file_json/buy.json");
    const [array, setArray] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
    const [jamekol, setJamekol] = useState([])
    const [show, setShow] = useState(false)
    
    const [number, setNumber] = useState([])
    useEffect(()=>{
        const price = data && data.buy.map(product => product.price)
        const total = price && price.reduce((acc, price) => acc + price, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
        setJamekol(total);
        sabadjamekol();
    },[data])
    function increase(e){
        setArray((prev)=>{
            const newCount = [...prev];
            newCount[e] += 1;
            return newCount;
        })    
        sabadjamekol()
    }
    function decrease(e){
        setArray((prev)=>{
            const newCount = [...prev];
            if(array[e] === 1){
                newCount[e]=1
            }else{
                newCount[e] -= 1;
            }
            return newCount;
        })  
        sabadjamekol()
    } 
    
    function sabadjamekol(){
        const price = data && data.buy.map(product => product.price)
        // از متود .toString() به بعد برای اینکه ارقام را سه رقم سه رقم جدا کند کد نوشتیم
        const total = price && price.reduce((acc, price, index) => acc + price * array[index], 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
        setNumber(total)
    }

    function Delete(e){
        // deleteAxios(data && data.buy[e-1])
        // setShow(true)
        // setTimeout(() => {
        //     setShow(false)
        // }, 2000);
    }
    

    return (
        <div className='row jadval'>
            <table className='table table-bordered col-8 jadval-1'>
                <thead>
                    <tr className='tr_th'>
                        <th>محصول</th>
                        <th>قیمت جزء</th>
                        <th>تعداد</th>
                        <th>جمع کل</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.buy.map((e,index)=>(
                        <tr>
                            <td><span onClick={()=>Delete(e.id)}><i className='fa fa-trash'></i></span><img className='jadval-img' src={e.src} alt="" />{e.title}</td>
                            <td>{e.price.toLocaleString('en',{useGrouping:true,maximumSignificantDigits:3})}</td>
                            <td className='incres-dicres'><button type='button' className='btn btn-info' onClick={()=>increase(index)}>+</button><input className='form-control form-control-color' disabled placeholder={array[index]}/><button type='button' className='btn btn-danger' onClick={()=>decrease(index)}>-</button></td>
                            <td style={{color:'red', fontSize:'14px'}}>{(e.price*array[index]).toLocaleString('en',{useGrouping:true,maximumSignificantDigits:3})}  تومان</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='col-4 jadval-2'>
                <p>جمع کل سبد خرید</p>
                <table className='col-4 table table-bordered'>
                    <tr>
                        <td>جمع جزء</td>
                        <td>{jamekol}</td>
                    </tr>
                    <tr>
                        <td>مجموع</td>
                        <td className='majmue'>{number}</td>
                    </tr>
                </table>
                <button className='btn btn-primary btn-block'>ادامه جهت تسویه حساب</button>
            </div>
            {show && <Alert message={"با موفقیت محصول مورد نظر حذف شد"} type={'success'}/>}

        </div>
    )
}
