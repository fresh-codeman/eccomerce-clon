import Profile from "./Profile"
import Search from "./Search"

function Header() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '4fr 1fr',alignItems:'center', height:'10vh'}}>
      <Search />
      <div style={{position:'absolute', top:'10vh', border:'1px solid gray', width: '100%'}}></div>
      <Profile />
    </div>
  )
}
export default Header  