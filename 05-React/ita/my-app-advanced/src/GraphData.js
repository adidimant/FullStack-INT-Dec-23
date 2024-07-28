async function fetchData() {
  try {
    const response = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/AMZN?period1=1721066400&period2=1721239200&interval=1m&includePrePost=true&events=div%7Csplit%7Cearn&&lang=en-US&region=US');
  if (!response.ok) {
     throw new Error('Network response was not ok');
    }
  const data = await response.json()
  return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default fetchData