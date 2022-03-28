import { DragItem } from "../DragItem";

export const isHidden = (
  draggedITem: DragItem | null,
  itemType: string,
  id: string,
  isPreview: boolean | undefined
): boolean => {
  return Boolean(
    !isPreview &&
      draggedITem &&
      draggedITem.type === itemType &&
      draggedITem.id === id
  );
};
