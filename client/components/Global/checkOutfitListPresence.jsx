export default function checkOutfitListPresence(product, outfitList) {
  for (let i = 0; i < outfitList.length; i++) {
    const productId = outfitList[i].id;
    if (String(productId) === String(product.id)) {
      return true;
    }
  }

  return false;
}