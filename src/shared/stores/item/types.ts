export interface ItemType {
    id: string;
    title: string
}

export interface ItemState {
    items: ItemType[];
}

export interface ItemActions {
    setItems: (items: ItemType[]) => void;
    createItem: (newItem: ItemType) => void;
}