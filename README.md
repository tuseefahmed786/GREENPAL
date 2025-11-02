# GreenPal - Professional Lawn Care Services App

A modern React application for booking lawn care services, built with React, Vite, and Tailwind CSS.

## Features

- **Landing Page**: Hero section, search interface, service provider cards, and FAQ accordion
- **Search Loading**: Loading skeleton UI while searching for providers
- **No Results**: Empty state screen with illustration when no providers found
- **Search Results**: Service provider cards with ratings, reviews, and pricing

## Tech Stack

- React 18.2.0
- React Router DOM 6.20.0
- Vite 5.0.8
- Tailwind CSS 3.3.6
- Lucide React (Icons)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   └── Slides/
│       ├── LandingPage.jsx    # Main landing page
│       ├── SearchLoading.jsx  # Loading state
│       ├── NoResults.jsx       # No results found
│       └── SearchResults.jsx   # Search results
├── App.jsx                     # Routing configuration
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## Routes

- `/` - Landing page
- `/loading` - Search loading state
- `/no-results` - No results found
- `/results` - Search results

## Key Features

- Responsive mobile-first design
- Search by name or zip code
- FAQ accordion
- Loading skeleton UI
- Service provider cards with ratings and reviews
- Pixel-perfect design matching provided screenshots

## License

MIT

