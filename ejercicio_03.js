function swapTwoCards(deck) {
  if (!Array.isArray(deck) || deck.length < 2) {
    return undefined;
  }
  let [a, b] = deck;
  [a, b] = [b, a];
  return [a, b];
}

const deck = [10, 7];
console.log(swapTwoCards(deck));
