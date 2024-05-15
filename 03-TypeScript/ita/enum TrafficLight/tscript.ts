enum TrafficLight {
    RED = "red",
    ORANGE = "orange",
    GREEN = "green",
    RED_ORANGE = "red-orange"
}

let currentLight: TrafficLight = TrafficLight.RED; // מצב התחלה של הרמזור

function changeLight() {
    switch (currentLight) {
        case TrafficLight.RED:
            currentLight = TrafficLight.GREEN;
            break;
        case TrafficLight.GREEN:
            currentLight = TrafficLight.ORANGE;
            break;
        case TrafficLight.ORANGE:
            currentLight = TrafficLight.RED_ORANGE;
            break;
        case TrafficLight.RED_ORANGE:
            currentLight = TrafficLight.RED;
            break;
    }
    updateLight();
}

function updateLight() {
    const lightElement = document.getElementById("traffic-light");
    if (lightElement) {
        lightElement.style.backgroundColor = currentLight;
    }
}


updateLight();

// שינוי הצבע כל 5 שניות
setInterval(changeLight, 5000);
