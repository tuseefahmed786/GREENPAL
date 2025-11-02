import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'

const SearchLoading = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('3246')

  const handleClear = () => {
    setSearchQuery('')
  }

  const handleCancel = () => {
    navigate('/')
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        navigate('/results', { state: { query: searchQuery } })
      } else {
        navigate('/no-results')
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [searchQuery, navigate])

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-800 text-lg mb-4">Search by Name or Zip Code.</p>

        <div className="flex items-center gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Name or Zip Code"
              className="w-full pl-12 pr-12 py-4 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-greenpal-green focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={handleClear}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400"
              >
                <X size={14} className="text-gray-700" />
              </button>
            )}
          </div>
          <button
            onClick={handleCancel}
            className="text-gray-800 font-medium px-4 py-2"
          >
            Cancel
          </button>
        </div>

        {searchQuery && (
          <p className="text-gray-700 mb-6">
            Searching for vendors near {searchQuery}...
          </p>
        )}

        <div className="space-y-4">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-blue-100 animate-pulse"
            >
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0"></div>
                
                <div className="flex-1 space-y-3">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-gray-200"></div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                  </div>
                  
                  <div className="h-10 bg-gray-200 rounded-lg w-32 mt-4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchLoading

