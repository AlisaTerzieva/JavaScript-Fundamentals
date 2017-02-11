function leapYear(input) {
    let leap = (input % 4 == 0 && input % 100 != 0 || input % 400 == 0);
    console.log(leap ? "yes" : "no");
}

leapYear('2000');