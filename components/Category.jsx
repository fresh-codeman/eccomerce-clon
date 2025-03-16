import { useContext, useState } from "react"
import { FilterContext } from "./FilterContext"

function Category() {
  const {setFilterStatus} = useContext(FilterContext)
  const [checker, setChecker] = useState("all")
  const handleChange = (e)=>{
    setChecker(e.target.value)
    setFilterStatus((old)=>{
      return {...old, category: e.target.value}
    })
    
  }
  return (
    <div style={{display:'grid',}}>
      <h3>Category</h3>
      <label> <input type="radio" value='all' onChange={handleChange} checked={checker=='all'}/> All</label>
      <label> <input type="radio" value='sneakers' onChange={handleChange} checked={checker=='sneakers'} /> Sneakers</label>
      <label> <input type="radio" value='flats' onChange={handleChange} checked={checker=='flats'} /> Flats</label>
      <label> <input type="radio" value='sandals' onChange={handleChange} checked={checker=='sandals'} /> Sandals</label>
      <label> <input type="radio" value='heels' onChange={handleChange} checked={checker=='heels'} /> Heels</label>      
    </div>
  )
}
export default Category