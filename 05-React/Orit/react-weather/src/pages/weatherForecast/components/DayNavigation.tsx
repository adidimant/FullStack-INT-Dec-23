import { memo, ReactNode } from "react";
import './DayNavigation.css';

interface DayNavigatorProps {
    currentDayIndex: number;
    totalDays: number;
    goToNextDay: () => void;
    goToPreviousDay: () => void;
}

function DayNavigation( { currentDayIndex, totalDays, goToNextDay, goToPreviousDay }: DayNavigatorProps ): ReactNode {
    return (
        <div className="navigation-container">
            <button onClick={goToPreviousDay} disabled={currentDayIndex === 1}>
                Previous Day
            </button>
            <button onClick={goToNextDay} disabled={currentDayIndex === totalDays - 1}>
                Next Day
            </button>
        </div>
    );
}

export default memo(DayNavigation);