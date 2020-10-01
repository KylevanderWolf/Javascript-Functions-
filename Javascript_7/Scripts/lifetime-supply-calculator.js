const calculateSupply = function (age, amountDay) {
    let maxAge = 85
    let totalSnacks = (365 * amountDay) * (maxAge - age);
    console.log("You will need " + totalSnacks + " to last you until the ripe old age of " + maxAge)
}

calculateSupply(20, 10);
calculateSupply(30, 10);
calculateSupply(40, 10);