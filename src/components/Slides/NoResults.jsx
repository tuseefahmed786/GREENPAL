import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'

const NoResults = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('45378')

  const handleClear = () => {
    setSearchQuery('')
  }

  const handleCancel = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-800 text-lg mb-4">Search by Name or Zip Code.</p>

        <div className="flex items-center gap-3 mb-8">
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
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-12">
        <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-4"
          >
            <circle cx="60" cy="40" r="12" fill="#3B82F6" />
            <rect x="54" y="52" width="12" height="20" rx="2" fill="#22C55E" />
            <rect x="50" y="60" width="6" height="12" rx="1" fill="#3B82F6" />
            <rect x="64" y="60" width="6" height="12" rx="1" fill="#3B82F6" />
            
            <rect x="30" y="75" width="30" height="8" rx="2" fill="#EF4444" />
            <rect x="40" y="83" width="10" height="4" rx="1" fill="#3B82F6" />
            <circle cx="35" cy="85" r="3" fill="#1F2937" />
            <circle cx="55" cy="85" r="3" fill="#1F2937" />
            
            <path
              d="M 25 75 L 30 75 M 32 75 L 35 75 M 40 75 L 45 75 M 50 75 L 55 75 M 60 75 L 65 75 M 70 75 L 75 75"
              stroke="#22C55E"
              strokeWidth="2"
              strokeDasharray="2 2"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">No Result Found</h2>

        <div className="text-center text-gray-700 space-y-2">
          <p>No lawn pros found near you.</p>
          <p>Try another ZIP code.</p>
        </div>
      </div>
    </div>
  )
}

export default NoResults

