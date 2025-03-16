import Category from "./Category"
import Colors from "./Colors"
import Price from "./Price"

function SideBar() {
  return (
    <div style={{display:'grid', height:'fit-content', rowGap:'20px', justifyContent:'center'}}><Category/> <Price/> <Colors/></div>
  )
}
export default SideBar