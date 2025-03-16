import './index.css'
import Header from '../components/Header'
import Products from '../components/Products'
import SideBar from '../components/SideBar'
import Recommended from '../components/Recommended'
import { FilterProvider } from '../components/FilterContext'
function App() {
  return (
    <main>
      <Header />
      <FilterProvider>
        <section
          style={{ display: 'grid', gridTemplateColumns: '15%  4px 84.6%' }}
        >
          <SideBar />
          <div
            style={{
              display: 'absolute',
              border: '1px solid gray',
              height: '100vw',
            }}
          ></div>
          <section
            style={{ padding: '20px', height: '90vh', overflowY: 'scroll' }}
          >
            <Recommended />
            <Products />
          </section>
        </section>
      </FilterProvider>
    </main>
  )
}

export default App
