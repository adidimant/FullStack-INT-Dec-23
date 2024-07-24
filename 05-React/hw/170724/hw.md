1) Find a graph component and implement it in your project, provide the relevant data for this
https://query1.finance.yahoo.com/v8/finance/chart/AMZN?period1=1721066400&period2=1721239200&interval=1m&includePrePost=true&events=div%7Csplit%7Cearn&&lang=en-US&region=US

2) Implement NotFound component to be the default component for the entire app if the route wasn't found.

3) Review today's material - CompanyDetails.jsx component & companyData.js import


next lesson - answer:
a) react component structure
b) react component render process / life cycle
c) when do we re-render a react component:
  1) in any change of a component state
  2) in any render of the parent component that is using this component
  3) in any prop change
  4) context change (useContext)
  5) [In development] - <React.StrictMode> wrapper creates more unexpected re-renders (not happening in our actual website in production)