import {Link, NavLink, useLocation, useNavigate} from 'react-router-dom'
import { useContext, useState } from "react"
import "../css/Navbar.css"
import { useEffect } from 'react'
import { context } from './Context';
export default function Navbar() {
    const [active, setActive] = useState(false);
    const [icon, setIcon] = useState(false);
    const [icon1, setIcon1] = useState(false);
    const [searching, setSearching] = useState();
    const Navigate = useNavigate();

    const [add, setAdd] = useState(false);
    const {edit, setEdit} = useContext(context);
    const [nameURL, setNameUrl] = useState()
    const location = useLocation()
    const params = location.pathname.split('/')
    const firstParams = params[1] 
    const secoundParams = params[2] 
    useEffect(()=>{
        if(location.pathname ===`/more/${secoundParams}`){
            setAdd(true)
            setEdit(false)
        }else{
            setAdd(false)
        }
        
        const nameShowEdit = ['soruhi', 'abnama', 'rushoey']
        for(let i=0; i<=nameShowEdit.length; i++){
            if(location.pathname === `/${nameShowEdit[i]}/${secoundParams}`){
                setEdit(true)
                setNameUrl(firstParams)
            }else if(location.pathname === `/`){
                setEdit(false)
            }
        }
    },[location])

    const name = [
        {'nam':'روشویی','ertebat':'تماس: 00000000000'},
        {'nam':'ابنما' ,'ertebat':'ادرس : تهران'},
        {'nam':'صراحی', 'ertebat':'واتساپ: 00000000000'},
        {'nam':'تزینی', 'ertebat':'تلگرام: 00000000000'},
        {'nam':'پایه ایفون', 'ertebat':'اینستاگرام: shey '},
        {'nam':'پایه ستون', 'ertebat':'فیسبوک: 00000000000 '}
    ]
    function show(){
        if(!active){
            setActive(true);
        }else if(active){
            setActive(false)
        }
    }
    function hide(){
        setActive(false)
    }
    function showIcon(){
        if(!icon){
            setIcon(true);
        }else if(icon){
            setIcon(false)
        }
    }
    function showIcon1(){
        if(!icon1){
            setIcon1(true);
        }else if(icon1){
            setIcon1(false)
        }
    }
    function search(e){
        e.preventDefault()
        Navigate(`/search?q=${searching}`)
    }
   
  return (
    <div>
        <header>
            <nav className="navbar fixed-top navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <div id="triggermenu" onClick={show} >
                        <i className="bx bx-menu"></i>
                    </div>
                    <img src="I:\New folder (2)\html\picture\horse.jpg" alt="Logo" style={{"width":"40px"}} className="rounded-pill"></img>
                    <Link to={'/'} className='navbar-brand'>تزینات سنگ خاشعی</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <NavLink className="nav-link" to={'/'}>خانه</NavLink>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="about.html">درباره</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">بیشتر</a>
                            </li>  
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">more</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#mahsool">محصولات</a></li>
                                    <li><a className="dropdown-item" href="#mahsool">تماس</a></li>
                                </ul>
                            </li>
                            <li className="nav-item ">
                                <NavLink to={"/buy"}><i className="fas fa-shopping-cart" style={{fontSize : '30px'}}></i></NavLink>
                            </li>
                        </ul>
                        <form className="d-flex search" id="form">
                            <input id="search" className="form-control me-2"  type="text" placeholder="Search" onChange={(e)=>setSearching(e.target.value)}></input>
                            <button className="btn btn-primary" onClick={search}>Search</button>
                        </form>
                        {add &&
                            <NavLink to={`/creatpost/${secoundParams}`} style={{textDecoration : "none"}}><p className='plus'><span>+</span></p></NavLink>
                        }
                        {edit && 
                            <NavLink to={`/edit/${nameURL}/${secoundParams}`}  style={{textDecoration : "none", margin: '0 10px 0 16px'}}><i className='fas fa-pen'></i></NavLink>
                        }
                    </div>
                </div>
            </nav>
        </header>
        <div id="menu-mobile-container" className={active && active ? 'active' : ''}>
            <div className="dark-part" onClick={hide}></div>
            <nav id="mobile-menu" className="menu mobile">
                <ul className="fehrest" onClick={showIcon} > محصولات <i className={icon && icon ? 'block fas fa-angle-right fehrest1' : 'none'} ></i> <i className={icon && icon ? 'none' : 'block fas fa-angle-left'} ></i>
                    {name && name.map((e)=>(
                        <li className={icon && icon ? '' : 'none'} key={e.nam}><a className={icon && icon ? 'block animate__animated animate__rollIn' : ''} href="">{e.nam}</a></li>
                    ))}
                </ul>
                <ul className="darbare-ma" onClick={showIcon1}> درباره ما <i className={icon1 && icon1 ? 'block fas fa-angle-right fehrest1' : 'none'}></i> <i className={icon1 && icon1 ? 'none' : 'block fas fa-angle-left'}></i>
                    {name && name.map((e)=>(
                        <li className={icon1 && icon1 ? 'block animate__animated animate__zoomInDown' : 'none'} key={e.nam}>{e.ertebat}</li>
                    ))}
                </ul>
                <div className="container" id="container"></div>
            </nav>
        </div>
    </div>
  )
}
