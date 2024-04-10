export const filterClassiefiedAdsData = (
  arr: ClassifiedAds[],
  townId: number,
  categoryId: number,
  searchString: string,
) => {
  console.log("arr ===", arr);
  const filteredClassiefiedAdsData = arr.filter((classifiedAd) => {
    if (categoryId === 0 && townId === 0) {
      const startWith = classifiedAd.title.startsWith(searchString);
      return startWith;
    }
    if (classifiedAd.category_id === categoryId && townId === 0) {
      const startWith = classifiedAd.title.startsWith(searchString);
      return startWith;
    }
    if (categoryId === 0 && classifiedAd.town_id === townId) {
      const startWith = classifiedAd.title.startsWith(searchString);
      return startWith;
    }
    if (
      classifiedAd.category_id === categoryId &&
      classifiedAd.town_id === townId
    ) {
      const startWith = classifiedAd.title.startsWith(searchString);
      return startWith;
    }
    return false;
  });
  return filteredClassiefiedAdsData;
};
