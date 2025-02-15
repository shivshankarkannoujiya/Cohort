function trafficLightAction(color) {
    switch (color.toLowerCase()) {
        case `red`:
            return `Stop`;
        case `yellow`:
            return `Slow Down`;
        case `green`:
            return `Go`;
        default:
            return `Invalid Color`;
    }
}

console.log(trafficLightAction("Red"));
