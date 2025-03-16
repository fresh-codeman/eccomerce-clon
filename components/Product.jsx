function Product(props) {
  const { category, color, company, img, newPrice, prevPrice, reviews, title} = props
return (
  <div style={{border:'1px solid rgb(190, 189, 189)', padding:'10px'
  }}>
    <div style={{height:'200px'}}>
      <img src={img} />
    </div>
    <div> {title}</div>
    <div>
      <span> rattings</span>
      <span> (122 review)</span>
    </div>
    <div>
      <span> price</span>
      <span> 👜</span>
    </div>
  </div>
)
}
export default Product