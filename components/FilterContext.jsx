import { useState, createContext } from "react"

const initial_filter_status = {
  recommendation: 'all',
  color: 'all',
  price: 'all',
  category: 'all',
}

export const  FilterContext = createContext()
export const FilterProvider = ({children})=>{
    const [filterStatus, setFilterStatus] = useState(initial_filter_status)
    return (
        <FilterContext.Provider value={{filterStatus, setFilterStatus}}>
            {children}
        </FilterContext.Provider>
    )
}