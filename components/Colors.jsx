import { useContext, useState } from "react"
import { FilterContext } from "./FilterContext"

function Colors() {
  const {setFilterStatus} = useContext(FilterContext)
  const [checker, setChecker] = useState('all')
  const handleClick = (e)=>{
    setChecker(e.target.value)
    setFilterStatus((old)=>{
      return { ...old, color:e.target.value}
    })
  }
  return (
    <div style={{display:'grid'}}>
      <h3>Color</h3>
      <label> <input type="radio" onClick={handleClick} checked={checker=='all'} value='all'/> All</label>
      <label> <input type="radio" onClick={handleClick} checked={checker=='black'} value='black'/> Black</label>
      <label> <input type="radio" onClick={handleClick} checked={checker=='blue'} value='blue'/> Blue</label>
      <label> <input type="radio" onClick={handleClick} checked={checker=='red'} value='red'/> Red</label>
      <label> <input type="radio" onClick={handleClick} checked={checker=='green'} value='green'/> Green</label>      
      <label> <input type="radio" onClick={handleClick} checked={checker=='white'} value='white'/> White</label>      
    </div>
  )
}
export default Colors