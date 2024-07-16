
const TradingSchedule = [
    {
        id: 1,
        Day: 'Monday',
        Open: '9:30 AM',
        Close: '4:00 PM'
    },
    {
        id: 2,
        Day: 'Tuesday',
        Open: '9:30 AM',
        Close: '4:00 PM'
    },
    {
        id: 3,
        Day: 'Wednesday',
        Open: '9:30 AM',
        Close: '4:00 PM'
    },
    {
        id: 4,
        Day: 'Thursday',
        Open: '9:30 AM',
        Close: '4:00 PM'
    },
    {
        id: 5,
        Day: 'Friday',
        Open: '9:30 AM',
        Close: '4:00 PM'

    },
    {
        id: 6,
        Day: 'Saturday',
        Open: 'Closed',
        Close: 'Closed'
    },
    {
        id: 7,
        Day: 'Sunday',
        Open: 'Closed',
        Close: 'Closed'
    
    }
]



export default function TradingScheduleComponent() {
    return (
        <>

            <div className="Trading-schedule">
                <h1>Trading Schedule</h1>
                <h2>The Nasdaq Stock Market sessions, with times in the Eastern Time Zone are</h2>
                <p>Here is the trading schedule for the week:</p>
                <ul>
                    {TradingSchedule.map((day) => (
                        <li key={day.id}>
                            <strong>{day.Day}:</strong> {day.Open} - {day.Close}
                        </li>
                    ))}
                </ul>
            </div>

        </>

    )
}