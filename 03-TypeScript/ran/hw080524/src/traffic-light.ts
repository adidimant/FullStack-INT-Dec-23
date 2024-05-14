// הגדרת enum של TrafficLight
enum TrafficLight {
    RED = "red",
    ORANGE = "orange",
    GREEN = "green",
    RED_ORANGE = "red-orange"
}

// רשימת האורות בסדר הרצוי
const lightSequence: TrafficLight[] = [TrafficLight.RED, TrafficLight.RED_ORANGE, TrafficLight.GREEN, TrafficLight.ORANGE];
let currentLightIndex: number = 0;

function changeLight() {
    const trafficLightElement = document.getElementById('traffic-light');
    if (!trafficLightElement) return;

    const currentLight = lightSequence[currentLightIndex];

    switch (currentLight) {
        case TrafficLight.RED:
            trafficLightElement.style.backgroundColor = 'red';
            break;
        case TrafficLight.ORANGE:
            trafficLightElement.style.backgroundColor = 'orange';
            break;
        case TrafficLight.GREEN:
            trafficLightElement.style.backgroundColor = 'green';
            break;
        case TrafficLight.RED_ORANGE:
            trafficLightElement.style.backgroundColor = 'red';
            // יוצרים הבהוב עם אדום וכתום
            setTimeout(() => {
                trafficLightElement.style.backgroundColor = 'orange';
            }, 2500);
            break;
    }

    currentLightIndex = (currentLightIndex + 1) % lightSequence.length;
}

// שינוי האור כל 5 שניות
setInterval(changeLight, 5000);

// התחלת הרמזור
changeLight();
