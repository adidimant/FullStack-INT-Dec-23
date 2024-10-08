- Weather Forecast App -

Description: Create a weather app that displays current weather conditions based on the user's location (nearest to a main city) or a search query (like "Tel-Aviv" or "London", the API supports not only capital cities).
Use the following API of wttr.into get real-time data: `GET https://wttr.in/Tel-Aviv?format=j1`

Material Requirements:
* Handling API requests and displaying real-time data.
* Managing conditional rendering based on API responses (e.g., error messages or loading states).
* Using at least different 5 react hooks in your app
* State management (and context management) for user input and search results.
* Pay attention for good performance of your react app:
  - minimum re-renders (minimum props, minimum state updates, minimum context updates)
  - minimum code running generally when isn't needed
  - useCallback on declared function within the component, if available - declare functions outside of the component
  - useMemo on declared variables within the component
  - memo() on components when we can
  - Lazy lodaing of components you don't see yet - using react Lazy (read about it online if you need)

Application requirements:
* Nice design, bring your own style and creativity
* The application should display a search query (dropdown) to insert a main city or a country, when submitting the application fetches for data from the API and displays it
  - Display under the search query ability to see the forecast for the next hours of the current day (temperature, weather description, icon), and ability to move to the next day
    - note that the API returns also results for the next days as well under the `weather` array key
  - Display ability to move to "advanced" screen - which presents deep details about the weather for the chosen place - like uvIndex, windSpeed, windDirection, windDegree, humidity, visibility, visibilityMiles, heatIndex, chanceOfFog, chanceOfSnow, chanceofwindy, feelsLikeC, feelsLikeF, and more data-points you would like to present
* Store last results in localStorage and load them in the next visit - for a better user experience
* Develop ability to move between units in all screens:
  - Celsius / Fahrenheit
  - KMs / Miles (of course Kmph / Mph will also be affected as well)