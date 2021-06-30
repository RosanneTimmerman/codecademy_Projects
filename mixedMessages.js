//create three pieces of data
firstMsg = ["I", "She", "He", "We"]
secondMsg = ["hate", "loves", "despices", "believe in"]
thirdMsg = ["chocolate", "pears", "fake friends", "deer", "instagram"]


pickFirst = () => {
    randomNr = Math.floor(Math.random() * 4);
    //console.log(randomNr);
    return firstMsg[randomNr];
}

pickSecond = () => {
    randomNr = Math.floor(Math.random() * 4);
    //console.log(randomNr);
    return secondMsg[randomNr];
}

pickThird = () => {
    randomNr = Math.floor(Math.random() * 5);
    //console.log(randomNr);
    return thirdMsg[randomNr];
}

createMsg = () => {
    return `${pickFirst()} ${pickSecond()} ${pickThird()}`
}

console.log(createMsg());
//console.log(pickSecond());
//console.log(pickThird());


