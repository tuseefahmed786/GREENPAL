import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/Slides/LandingPage'
import SearchLoading from './components/Slides/SearchLoading'
import NoResults from './components/Slides/NoResults'
import SearchResults from './components/Slides/SearchResults'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loading" element={<SearchLoading />} />
        <Route path="/no-results" element={<NoResults />} />
        <Route path="/results" element={<SearchResults />} />
      </Routes>
    </div>
  )
}

export default App

