function getSecondCard(deck) {
  if (!Array.isArray(deck) || deck.length < 2) {
    return undefined;
  }
  const [first, second] = deck;
  return second;
}
const deck = [3, 2, 10, 6, 7];
console.log(getSecondCard(deck)); 
