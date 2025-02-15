function distributeGifts(totalGifts, friends) {
    let giftsGiven = 0;
    for (let i = 0; i < friends; i++){
        if (totalGifts > 0) {
            giftsGiven++;
            totalGifts--
        }
    }
    return giftsGiven;
}

console.log(distributeGifts(10, 5));

