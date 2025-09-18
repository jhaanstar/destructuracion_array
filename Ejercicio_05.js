function pickNamedPile({ chosen, disregarded }) {
  if (!chosen) {
    return undefined;
  }
  return chosen;
}

const piles = { chosen: [5, 4], disregarded: [7, 10] };
console.log(pickNamedPile(piles));
