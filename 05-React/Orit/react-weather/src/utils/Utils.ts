import { Hourly } from "../types/types";

class Utils {
    static formatDate(dateStr: string): string {
        // Expected format of dateStr: "YYYY-MM-DD hh:mm AM/PM"
        
        // Split the date part and the time part (including AM/PM)
        const [datePart, timePart, amPm] = dateStr.split(' ');
    
        // Further split the time part into hours and minutes
        let [hourStr, minute] = timePart.split(':');
        let hour = parseInt(hourStr, 10); // Convert hour to an integer
    
        // Convert to 24-hour format based on AM/PM
        if (amPm === 'PM' && hour !== 12) {
            hour += 12;
        } else if (amPm === 'AM' && hour === 12) {
            hour = 0; // Midnight case
        }
    
        // Pad hour and minute to ensure they are two digits
        const formattedHour = String(hour).padStart(2, '0');
        const formattedMinute = String(minute).padStart(2, '0');
    
        // Reconstruct the formatted date string to ISO format
        const formattedDateStr = `${datePart}T${formattedHour}:${formattedMinute}`;
    
        // Parse this into a Date object
        const date = new Date(formattedDateStr);
    
        // Extract and format the components for the output
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();
        const finalHours = String(date.getHours()).padStart(2, '0');
        const finalMinutes = String(date.getMinutes()).padStart(2, '0');
    
        // Return the formatted date and time as a string
        return `${day}/${month}/${year} ${finalHours}:${finalMinutes}`;
    }
    
    static formatDateOnly(dateStr: string): string {
        const [year, month, day] = dateStr.split('-');
        return `${day}/${month}/${year}`;
    }
    
    static formatTime(timeStr: string): string {
        const paddedTime = timeStr.padStart(4, '0');
        
        const hours = paddedTime.slice(0, 2);
        const minutes = paddedTime.slice(2, 4);
        
        return `${hours}:${minutes}`;
    }

    static formatTime24 (timeStr: string): string {
        const [timePart, amPm] = timeStr.split(' ');
        let [hourStr, minute] = timePart.split(':');
        let hour = parseInt(hourStr, 10); // Convert hour to an integer
    
        // Convert to 24-hour format based on AM/PM
        if (amPm === 'PM' && hour !== 12) {
            hour += 12;
        } else if (amPm === 'AM' && hour === 12) {
            hour = 0; // Midnight case
        }

        // Pad hour and minute to ensure they are two digits
        const formattedHour = String(hour).padStart(2, '0');
        const formattedMinute = String(minute).padStart(2, '0');
        return `${formattedHour}:${formattedMinute}`;
    }

    /*static convertToMinutes = (time: number): number => {
        const hour: number = Math.floor(time / 100);
        const minute: number = time % 100;
        return hour * 60 + minute;
    }*/

    static currentTimeToNumber(now: Date): number {
        const hours = now.getHours();
        const minutes = now.getMinutes();
      
        // Format the time as HHmm
        return parseInt(`${hours}${minutes.toString().padStart(2, '0')}`);
    }

    static getFilteredHourlyData = (hourlyData: Hourly[], currentTime: number): Hourly[] => {
        return hourlyData.filter(hour => {
            return Number(hour.time) >= currentTime; // Only keep times greater than or equal to current time
        });
    };

    static convertDateToDDMM(dateString: string): string {
        const date = new Date(dateString); // Create a Date object from the input string
        const day = String(date.getDate()).padStart(2, '0'); // Get day, padded to 2 digits
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (zero-based, so add 1), padded to 2 digits
        const year = date.getFullYear(); // Get year

        return `${day}/${month}/${year}`;
    }
}

export default Utils;