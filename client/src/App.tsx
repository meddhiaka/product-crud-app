import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import SearchResultsComp from './components/SearchResultsComp'
import { useState } from 'react'

export default function App() {
  const [resultsSearch, setResultsSearch] = useState([])


  return (
    <div>
      <Navbar setResultsSearch={setResultsSearch}/>
      <SearchResultsComp resultsSearch={resultsSearch}/>
      <main>
        <Outlet />
      </main>
    </div>
  )
}