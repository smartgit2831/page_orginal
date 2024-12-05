import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';
import '../css/Edit.css'
import Alert from '../component/Alert';
import { context } from '../component/Context';

export default function Edit() {
    const {name, id} = useParams()
    const url = "https://smartgit2831.github.io/file_json/"+name+".json";
    const {data, EditAxios} = useAxios(url)
    const [count, setcount] = useState(0)
    const Navigate = useNavigate()

    const [title, setTitle] = useState()
    const [pric, setPrice] = useState()
    const [length, setLength] = useState()
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()
    const [about, setAbout] = useState()
    const [image, setImage] = useState(null)
    const [showTrue, setShowTrue] = useState(false)


    const location = useLocation()
    const params = location.pathname.split('/')
    const secoundParams = params[3] 
    const {setEdit} = useContext(context)
    useEffect(()=>{        
        const nameShowEdit = ['soruhi', 'abnama', 'rushoey']
        for(let i=0; i<=nameShowEdit.length; i++){
            if(location.pathname === `/edit/${nameShowEdit[i]}/${secoundParams}`){
                setEdit(false)
                console.log("first")
            }
        }
    },[])


    useEffect(()=>{
        if(count < 3){
            setTitle(data && data.title)
            setPrice(data && data.price)
            setLength(data && data.length)
            setWidth(data && data.width)
            setHeight(data && data.height)
            setAbout(data && data.detail)
            setImage(data && data.src)
            setcount((count)=> count+1)
        }
    },[data])


    function handelsub(e){
        e.preventDefault()
        EditAxios(title, pric, image.name, length, width, height, about, name)
        setShowTrue(true)
        setTimeout(() => {
            setShowTrue(false)
            Navigate(`/${name}/${id}`)
        }, 2000);
    }
  return (
    <div>
        <div className='create_form_div'>
            
            {data && 
            <form onSubmit={handelsub} className='Create_Form '>
                <div className="row">
                <div className="col-lg-6">
                    <label>
                    <span>Title </span>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} required/>
                    </label>
                    <label>
                    <span>about </span>
                    <textarea onChange={(e)=>setAbout(e.target.value)} value={about} required />
                    </label>
                    <label>
                    <span>Image </span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                    </label>

                </div>
                <div className="col-lg-6">
                    <label>
                    <span>Price </span>
                    <input type='number' onChange={(e)=>setPrice(e.target.value)} value={pric} required />
                    </label>
                    <label>
                    <span>length</span>
                    <input type='number' onChange={(e)=>setLength(e.target.value)} value={length} required />
                    </label>
                    <label>
                    <span>width </span>
                    <input type='number' onChange={(e)=>setWidth(e.target.value)} value={width} required />
                    </label>
                    <label>
                    <span>height </span>
                    <input type='number' onChange={(e)=>setHeight(e.target.value)} value={height} required />
                    </label>

                </div>

                </div>
                <button>submit</button>
            </form>
            }
        </div>
        {showTrue && <Alert message={'با موفقیت انجام شد'} type={'success'}/>}
    </div>
  )
}
