# Weather Forecast App

A modern React application that displays current weather conditions and forecasts based on user location or search query. The app uses the wttr.in API to fetch real-time weather data.

![Weather Forecast App Screenshot](https://via.placeholder.com/800x450.png?text=Weather+Forecast+App)

## Features

- Current weather conditions display
- Hourly forecast for the current day
- Daily forecast for upcoming days
- Advanced weather details (UV index, humidity, visibility, etc.)
- Search by city name
- Use current location (geolocation)
- Unit toggling (Celsius/Fahrenheit, km/miles)
- Responsive design
- Data persistence using localStorage

## Technologies Used

- React 19
- React Hooks (useState, useEffect, useCallback, useContext, useMemo)
- React Context API for global state management
- React Lazy Loading for components
- Express.js for the proxy server
- wttr.in API for weather data

## Detailed Documentation

For detailed documentation in Hebrew, including project structure, API details, and future development ideas, see [DOCUMENTATION.md](./DOCUMENTATION.md).

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/weather-forecast-app.git
cd weather-forecast-app

# Install dependencies
npm install
```

### Running the Application

There are two ways to run the application:

#### 1. Using Mock Data (for development)

```bash
npm start
```

This will start the React application on http://localhost:3000 using mock data.

#### 2. Using the Proxy Server (for real API data)

```bash
# Run both the React app and the proxy server
npm run dev

# Or run them separately
npm run server
npm start
```

The proxy server will run on port 5001 and forward requests to the wttr.in API.

## Performance Optimizations

The application implements several performance optimizations:

- Memoization of components with React.memo
- Function memoization with useCallback
- Computed value optimization with useMemo
- Lazy loading of components not immediately visible
- Minimal re-renders through proper state management

## API Usage

The application uses the wttr.in API to fetch weather data:

```
https://wttr.in/{location}?format=j1
```

Example: `https://wttr.in/Tel-Aviv?format=j1`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
