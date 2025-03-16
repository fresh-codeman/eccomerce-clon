function Price() {
  return (
    <div style={{display:'grid'}}>
      <h3>Price</h3>
      <label> <input type="radio" value='All'/> All</label>
      <label> <input type="radio" value='0-50'/> $0 - 50</label>
      <label> <input type="radio" value='50-100'/> $50 - 100</label>
      <label> <input type="radio" value='100-150'/> $100 - 150</label>
      <label> <input type="radio" value='Over 150'/> Over $150</label>      
    </div>
  )
}
export default Price