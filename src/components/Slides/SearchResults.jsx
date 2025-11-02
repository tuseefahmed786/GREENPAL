import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Search, X, MapPin, ArrowRight } from 'lucide-react'

const SearchResults = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState(
    location.state?.query || 'Green Lawn Care'
  )

  useEffect(() => {
    if (location.state?.query) {
      setSearchQuery(location.state.query)
    }
  }, [location.state])

  const handleClear = () => {
    setSearchQuery('')
  }

  const handleCancel = () => {
    navigate('/')
  }

  const serviceProviders = [
    {
      id: 1,
      name: 'Green Lawn Care',
      verified: true,
      rating: 4.8,
      reviews: 109,
      location: 'Nashville, TN 37220',
      servingHomes: 22,
      review: "I love Mercury Greens they always do such a detailed job.",
      reviewDate: 'Aug 8, 2025',
      profileColor: 'bg-blue-200'
    },
    {
      id: 2,
      name: 'Green Lawn Care',
      verified: true,
      rating: 4.8,
      reviews: 109,
      location: 'Nashville, TN 37220',
      servingHomes: 22,
      review: "I love Mercury Greens they always do such a detailed job.",
      reviewDate: 'Aug 8, 2025',
      profileColor: 'bg-gray-300'
    },
    {
      id: 3,
      name: 'Green Lawn Care',
      verified: true,
      rating: 4.8,
      reviews: 109,
      location: 'Nashville, TN 37220',
      servingHomes: 22,
      review: "I love Mercury Greens they always do such a detailed job.",
      reviewDate: 'Aug 8, 2025',
      profileColor: 'bg-green-200'
    },
    {
      id: 4,
      name: 'Green Lawn Care',
      verified: true,
      rating: 4.8,
      reviews: 109,
      location: 'Nashville, TN 37220',
      servingHomes: 22,
      review: "I love Mercury Greens they always do such a detailed job.",
      reviewDate: 'Aug 8, 2025',
      profileColor: 'bg-purple-200'
    }
  ]

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-md mx-auto px-4 py-4 sm:py-6 md:px-6 md:container">
        <p className="text-gray-800 text-base sm:text-lg mb-3 text-center sm:text-left">Search by Name or Zip Code.</p>

        <div className="flex items-center gap-2 sm:gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Name or Zip Code"
              className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 rounded-lg border border-gray-300 bg-gray-100 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-greenpal-green focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={handleClear}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 active:bg-gray-400"
              >
                <X size={12} className="text-gray-700" />
              </button>
            )}
          </div>
          <button
            onClick={handleCancel}
            className="text-gray-800 font-medium px-3 sm:px-4 py-2 text-sm sm:text-base whitespace-nowrap"
          >
            Cancel
          </button>
        </div>

        <p className="text-gray-700 mb-4 sm:mb-6 text-center text-sm sm:text-base">
          {serviceProviders.length} lawn pros found near you
        </p>

        <div className="space-y-3 sm:space-y-4 pb-4">
          {serviceProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100"
            >
              <div className="flex gap-3 sm:gap-4">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${provider.profileColor} flex-shrink-0 flex items-center justify-center`}>
                  <span className="text-xl sm:text-2xl">👤</span>
                </div>

                <div className="flex-1 min-w-0">
                  {provider.verified && (
                    <div className="flex items-center gap-1 text-[#16A34A] mb-1.5 sm:mb-2">
                      <span className="text-base sm:text-lg font-semibold">✓</span>
                      <span className="text-xs sm:text-sm font-normal">Verified by GreenPal</span>
                    </div>
                  )}

                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2 break-words">
                    {provider.name}
                  </h3>

                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 flex-wrap">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-sm sm:text-base ${
                            i < Math.floor(provider.rating) 
                              ? 'text-[#FACC15]' 
                              : i < provider.rating 
                              ? 'text-[#FACC15]' 
                              : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      ({provider.rating}/5, {provider.reviews} Reviews)
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-gray-700 mb-1.5 sm:mb-2">
                    <MapPin size={14} className="text-gray-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm truncate">{provider.location}</span>
                  </div>

                  <div className="inline-block bg-gray-100 rounded-md px-2.5 sm:px-3 py-1 mb-2 sm:mb-3 border border-gray-200">
                    <span className="text-gray-700 text-xs sm:text-sm">
                      Serving {provider.servingHomes} homes near you
                    </span>
                  </div>

                  <p className="text-gray-800 mb-1 text-xs sm:text-sm font-normal leading-relaxed">
                    "{provider.review}"
                  </p>

                  <p className="text-gray-500 text-xs mb-3 sm:mb-4">
                    {provider.reviewDate}
                  </p>

                  <button className="w-full bg-[#84CC16] hover:bg-[#65A30D] active:bg-[#65A30D] text-white rounded-lg py-2.5 sm:py-3 font-bold text-sm sm:text-base transition-colors">
                    Get Instant Price {'>'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchResults

