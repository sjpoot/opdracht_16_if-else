const age = 29;
const isFemale = true;
const driverStatus = "notbob";

if (age >= 18) {
    console.log("Welkom, veel plezier in het 'Bierhol'");
} else {
    console.log("Helaas kan ik je niet binnen laten als je nog geen 18 bent.");
}

if (isFemale) {
    console.log("Welkom op de 'ladiesnight'!");
} else {
    console.log("Het is ladies only vanavond, dus helaas......")
}

if (driverStatus == "bob") {
    console.log("Fijne avond nog en rij voorzichtig!!")
} else {
    console.log("Voor jou gaan we een taxi bellen, zo kun je niet rijden.")
}