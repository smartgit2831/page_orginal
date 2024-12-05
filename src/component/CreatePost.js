import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'
import '../css/CreatePost.css'

export default function CreatePost() {
  const {name} = useParams()
  const {postAxios} = useAxios("https://smartgit2831.github.io/file_json/"+name+".json")
  const [title, setTitle] = useState()
  const [pric, setPrice] = useState()
  const [length, setLength] = useState()
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()
  const [about, setAbout] = useState()
  const [image, setImage] = useState(null)
  const Navigate = useNavigate()
  function handelsub(e){
    e.preventDefault()
    const src = image.name
    const price = Number(pric)
    const detail = about
    postAxios(title, price, src, length, width, height, detail, name)
    Navigate(`/more/${name}`)
  }

  return (
    <div className='create_form_div'>
      <form onSubmit={handelsub} className='Create_Form '>
        <div className="row">
          <div className="col-lg-6">
            <label>
              <span>Title </span>
              <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} required/>
            </label>
            <label>
              <span>about </span>
              <input type='textarea' onChange={(e)=>setAbout(e.target.value)} value={about} required />
            </label>
            <label>
              <span>Image </span>
              <input type="file" onChange={(e)=>setImage(e.target.files[0])}  required/>
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
    </div>
  )
}
