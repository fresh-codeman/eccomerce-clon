import { useContext, useState } from "react"
import { FilterContext } from "./FilterContext"

function Recommended() {
  const [recommended, setRecommended]  = useState('all')
  const {setFilterStatus} = useContext(FilterContext)
  const handleClick = (e)=> {
    setRecommended(e.target.value)
    setFilterStatus((old)=>{
      return {...old,   recommendation: e.target.value}
    })
  }
  return (
    <div style={{paddingBottom:'20px'}}>
    <div style={{fontSize:'1.3rem', paddingBottom:'10px'}}> Recommendation</div>
    <div style={{display:'flex', flexWrap:'wrap', gap:'20px'}}>
      <button value='all' onClick={handleClick} > All Products </button>
      <button value='Nike' onClick={handleClick} > Nike </button>
      <button value='Adidas' onClick={handleClick} > Adidas </button>
      <button value='Puma' onClick={handleClick} > Puma </button>
      <button value='Vans' onClick={handleClick} > Vans </button>
    </div>
    </div>
  )
}
export default Recommended