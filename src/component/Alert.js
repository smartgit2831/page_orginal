import '../css/Alert.css'
export default function Alert({data, message, type}) {
      const TruncatedText = ({text})=>{
        const word = text.split(' ')
        const truncated = word.length > 4 ? word.slice(0,4).join(' ')+'...' : text;
        return <h5>{truncated}</h5>
      }
  return (
      <div className={`alert alert-${type}`}>
        <h4>{message}</h4>
        <div className='Alert_detail'>
          <img src={`./images/${data.src}`} alt='001' />
          <span>{data.title}</span>
          <span>{data.price}</span>
          <TruncatedText text={data.detail} />
        </div>
      </div>
  )
}
