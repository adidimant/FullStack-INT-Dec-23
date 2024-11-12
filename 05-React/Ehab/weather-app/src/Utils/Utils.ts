import axios from "axios";
export default class Utils {
    static getUserLocation(): Promise<string | null> {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    try {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        const response = await axios.get(`https://api.geoapify.com/v1/geocode/reverse`, {
                            params: {
                                lat: latitude,
                                lon: longitude,
                                apiKey: '09f25334442b4a70980b9135b51ac86d'
                            }
                        });
                        const res: string = response.data.features[0].properties.city || response.data.features[0].properties.state || response.data.features[0].properties.country || null;
                        if (res) {
                            resolve(res);
                        } else {
                            resolve(null);
                        }
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    } catch (error) {
                        reject(null);
                    }
                }, 
                (error) => {
                    reject(error);
                });
            } else {
                reject(null);
            }
        });
    }
    

    static getIconName(temp_C?: number, temp_F?: number, chanceOfRain?: number ): string | null{
        if(! temp_C && !temp_F){
            return null
        }
        if(temp_C || temp_F){
            if((temp_C && temp_C >= 30) || (temp_F && temp_F >= 86)){
                if(chanceOfRain && chanceOfRain > 0){
                    return 'sunWithChanceOfRain';
                }
                return 'extrahot';
            }
            else if ((temp_C && (temp_C >= 20 &&  temp_C < 30)) || temp_F && (temp_F >= 68 && temp_F <= 86) ){
                if(chanceOfRain && chanceOfRain > 0){
                    return 'sunWithChanceOfRain';
                }
                return 'hot';
            }
            else if((temp_C && (temp_C < 20 && temp_C >0)) || (temp_F && (temp_F < 68 && temp_F > 32))){
                if(chanceOfRain && chanceOfRain > 0){
                    return 'rainning';
                }
                return 'cloudyClipartWeather';
            }
            else if ((temp_C && temp_C <= 0) || (temp_F &&  temp_F <= 32)){
                return 'snow'
            }
            else{
                return 'deafult';
            }
        }
        return null;
    }

    static getIconName2(weatherDesc: string): string {
        const iconMapping: { [key: string]: string } = {
            "Clear": "hot",
            "Cloudy": "cloudyClipartWeather",
            "Partly cloudy": "sunWithChanceOfRain",
            "Rain": "rainning",
            "Heavy rain": "rainning",
            "Light rain": "rainning",
            "Showers": "rainning",
            "Thunderstorm": "rainning",
            "Snow": "snow",
            "Heavy snow": "snow",
            "Light snow": "snow",
            "Fog": "cloudyClipartWeather",
            "Mist": "cloudyClipartWeather",
            "Drizzle": "rainning",
            "Hail": "rainning",
            "Windy": "cloudyClipartWeather",
            "Blizzard": "snow",
            "Sleet": "snow",
            "Dust": "cloudyClipartWeather",
            "Smog": "cloudyClipartWeather"
        };
    
        // Try to find an exact match first
        if (iconMapping[weatherDesc]) {
            return iconMapping[weatherDesc];
        }
    
        // Use keywords to find the closest match
        if (weatherDesc.includes("rain")) return "rainning";
        if (weatherDesc.includes("cloudy")) return "cloudyClipartWeather";
        if (weatherDesc.includes("clear")) return "hot";
        if (weatherDesc.includes("snow")) return "snow";
        if (weatherDesc.includes("fog") || weatherDesc.includes("mist")) return "cloudyClipartWeather";
        if (weatherDesc.includes("thunder")) return "rainning";
    
        // Default icon if no match is found
        return "defaultIcon";
    }

    static getTime(time: string): string{
        switch(time) {
            case '0':
                return '00:00 AM'
                break;
            case '300':
                return '03:00 AM'
                break;
            case '600':
                return '06:00 AM'
                break;
            case '900':
                return '09:00 AM'
                break;            
            case '1200':
                return '12:00 PM';
                break;
            case '1500':
                return '15:00 PM';
                break; 
            case '1800':
                return '18:00 PM';
                break;    
            case '2100':
                return '21:00 PM';
                break;       
            default:
              return '??:??';
              break;
          }
    }

    static getArrayIndexByTime(): number{
        const date = new Date();
        const hour = date.getHours();
        if (hour >= 0 && hour < 3) return 0;
        if (hour >= 3 && hour < 6) return 1;
        if (hour >= 6 && hour < 9) return 2;
        if (hour >= 9 && hour < 12) return 3;
        if (hour >= 12 && hour < 15) return 4;
        if (hour >= 15 && hour < 18) return 5;
        if (hour >= 18 && hour < 21) return 6;
        if (hour >= 21 && hour < 24) return 7;
        return -1;
    }

    static getNextThreeDaysName(): Array<string>{
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const nextThreeDays: Array<string> = [];
        const currentDate = new Date();
        for (let i = 1; i <= 3; i++) {
            if(i==1){
                nextThreeDays.push(daysOfWeek[currentDate.getDay()]);
            }
            currentDate.setDate(currentDate.getDate() + 1);
            nextThreeDays.push(daysOfWeek[currentDate.getDay()]);
        }
        return nextThreeDays;
    }
}

