function shiftThreeCardsAround(deck) {
  if (!Array.isArray(deck) || deck.length < 3) {
    return undefined;
  }
  let [a, b, c] = deck;
  [a, b, c] = [b, c, a];
  return [a, b, c];
}

const deck = [2, 6, 10];
console.log(shiftThreeCardsAround(deck));
