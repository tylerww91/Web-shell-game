export function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

export function getRandomItem(pearlArray) {
    const random = getRandomNumber(pearlArray.length);
    const item = pearlArray[random];
    return item;
}
