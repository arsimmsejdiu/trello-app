type Item = {
  id: string;
};

export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => {
  return items.findIndex((item: TItem) => item.id === id);
};

// An example if you don't pass an it to the function, typescript will throw an error
// const itemsWOutId = [{text: "hej"}]
// findItemIndexById(itemsWOutId, "hej")