import { useContext, useEffect, useState } from "react"
import Product from "./Product"
import data from './data'
import { FilterContext } from "./FilterContext"

function Products(){
    const [products, setProducts] = useState(data)
    const { filterStatus } = useContext(FilterContext)
    console.log(filterStatus)
    useEffect(()=>{
      let updated = data.filter((product)=>  filterStatus.category == 'all' ? true : product.category == filterStatus.category)
      updated = updated.filter((product)=>  filterStatus.color == 'all' ? true : product.color == filterStatus.color)
      updated = updated.filter((product)=>  filterStatus.price == 'all' ? true : product.category == filterStatus.category)
      updated = updated.filter((product)=>  filterStatus.recommendation == 'all' ? true : product.company == filterStatus.recommendation)
      setProducts(updated)
    },[filterStatus])
    return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px, 1fr))', width:'100%', gap:'30px', height:'100%'}}>
        {products.map((product,index)=> <Product key={index} {...product}/>)}
    </div>
  )
}
export default Products