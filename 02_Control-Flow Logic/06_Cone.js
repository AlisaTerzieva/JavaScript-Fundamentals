function coneVolume(input) {
    let radius = Number(input[0]);
    let height = Number(input[1]);
    let slant = Math.sqrt(radius * radius + height * height);
    let circleArea = Math.PI * radius * radius;
    let surfaceArea = Math.PI * radius * slant;
    let volume = circleArea * height / 3;
    let area = surfaceArea + circleArea;

    console.log("volume =", volume);
    console.log("area =", area);
}

coneVolume(['5', '3']);