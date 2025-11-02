import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, ChevronUp, Search, ArrowRight } from 'lucide-react'

const LandingPage = () => {
  const navigate = useNavigate()
  const [address, setAddress] = useState('')
  const [expandedFaq, setExpandedFaq] = useState(1)

  const faqs = [
    {
      id: 1,
      question: "When is the best time of year to get landscaping projects done?",
      answer: "It's generally recommended to maintain a grass height of about 2.5 to 3 inches (6-8 cm). Different grass types may have specific height recommendations."
    },
    {
      id: 2,
      question: "When is the best time of year to get landscaping projects done?",
      answer: "It's generally recommended to maintain a grass height of about 2.5 to 3 inches (6-8 cm). Different grass types may have specific height recommendations."
    },
    {
      id: 3,
      question: "When is the best time of year to get landscaping projects done?",
      answer: "It's generally recommended to maintain a grass height of about 2.5 to 3 inches (6-8 cm). Different grass types may have specific height recommendations."
    }
  ]

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  const handleSearch = () => {
    if (address.trim()) {
      navigate('/loading')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
       <div className="bg-gradient-to-b from-greenpal-dark-green to-greenpal-green text-white min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-bold">GREENPAL</div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold">
              See Prices
            </button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Lawn Care Services in Columbus
            </h1>
            <p className="text-xl mb-6">Fast, Easy, & Free Quotes</p>
            <p className="mb-4 flex items-center justify-center gap-2">
              Book your grass cutting in 60 seconds
              <ChevronDown size={20} />
            </p>

            <div className="max-w-xl mx-auto mb-4">
              <input
                type="text"
                placeholder="Enter your house address"
                className="w-full px-6 py-4 rounded-full bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>

            <div className="max-w-xl mx-auto">
              <button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white px-8 py-3 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow"
              >
                See Prices <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="flex items-center justify-center gap-2 text-white mb-6">
              Get a free instant quote
              <ChevronDown size={20} />
            </p>
          </div>

          <div className="px-4 pb-6">
            <div className="flex gap-3 overflow-x-auto pb-2 max-w-7xl mx-auto scrollbar-hide snap-x snap-mandatory">
              {[1, 2, 3, 4].map((cardIndex) => (
              <div key={cardIndex} className="bg-white rounded-lg p-5 sm:p-6 shadow-sm border border-gray-100 relative flex-shrink-0 w-[280px] sm:w-[calc(25%-12px)] snap-start">
                <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1.5 rounded-full flex flex-col items-center justify-center">
                  <div className="text-base font-bold leading-tight">$75</div>
                  <div className="text-xs font-normal leading-tight">/mowing</div>
                </div>
                
                <div className="flex items-start gap-3 pr-16">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
                    <span className="text-gray-500 sm:text-gray-600 text-xl sm:text-2xl">👤</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-[#16A34A] mb-2">
                      <span className="text-base sm:text-lg">✓</span>
                      <span className="text-sm sm:text-base font-normal">Available</span>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2">Green Lawn Care</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-500 text-sm">★</span>
                        ))}
                      </div>
                      <span className="text-gray-700 text-sm">(4.8/5, 109 Reviews)</span>
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-[#16A34A] text-sm">$ </span>
                      <span className="text-gray-800 text-sm">Avg. Price: </span>
                      <span className="text-gray-900 font-semibold text-sm">$75 per cut</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full border border-gray-200 rounded-lg py-2.5 text-gray-900 font-semibold bg-white hover:bg-gray-50 transition-colors text-sm">
                  See Price
                </button>
              </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-greenpal-green text-white">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm mb-4">As seen in...</p>
          <div className="flex justify-center items-center gap-6 flex-wrap mb-6">
            <div className="text-xs font-semibold">WALL STREET<br />JOURNAL</div>
            <div className="text-lg font-serif">Forbes</div>
            <div className="text-xs font-semibold">Harvard Business<br />Review</div>
            <div className="text-lg font-bold">TIME</div>
          </div>
          
          <div className="border-t border-white/20 pt-4 flex items-center gap-4">
            <div className="text-4xl font-bold">4.8/5</div>
            <div className="text-sm">4,564 reviews</div>
            <div className="flex gap-1 ml-auto">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 w-full max-w-4xl">
          <div className="text-sm mb-4 text-center">
            <span className="text-blue-400">GreenPal</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-blue-400">Ohio</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">Columbus Lawn Care</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Find Trusted Lawn Care Pros Instantly
          </h1>
          
          <p className="text-gray-700 mb-6 text-center">
            Search by Name or Zip Code. Easy booking in seconds
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by Name or Zip Code"
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-greenpal-green"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How does GreenPal Work?
          </h2>
          <p className="text-gray-700 mb-8">
            Common questions about how GreenPal can help you{' '}
            <span className="text-greenpal-green font-semibold">hire the best</span> lawn care service in Indianapolis
          </p>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={faq.id}>
                <div
                  className="py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <p className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </p>
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="text-gray-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-600 flex-shrink-0" size={24} />
                  )}
                </div>
                {expandedFaq === faq.id && (
                  <div className="pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
                {index < faqs.length - 1 && <div className="border-t border-gray-300"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage

