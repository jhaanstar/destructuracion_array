function swapNamedPile(piles) {
  if (
    typeof piles !== 'object' ||
    piles === null ||
    !('chosen' in piles) ||
    !('disregarded' in piles)
  ) {
    return undefined;
  }
  let { chosen, disregarded } = piles;
  [chosen, disregarded] = [disregarded, chosen];
  return { chosen, disregarded };
}

const piles = { chosen: ['A'], disregarded: ['B'] };
console.log(swapNamedPile(piles));
