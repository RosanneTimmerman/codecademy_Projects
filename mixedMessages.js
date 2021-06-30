//create three pieces of data
firstMsg = ["I", "She", "He", "We"]
secondMsg = ["hate", "loves", "despices", "believe in"]
thirdMsg = ["chocolate", "pears", "fake friends", "deer", "instagram"]


pickFirst() {
    randomNr = Math.random() * 4
    console.log(randomNr);
    return firstMsg[randomNr];
}

console.log(pickFirst())