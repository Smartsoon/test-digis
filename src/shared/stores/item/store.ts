import { create } from 'zustand';
import type { ItemState, ItemActions } from './types'

export const useItemsStore = create<ItemState & ItemActions>()((set) => ({
    items: [],
    setItems: (items) => set(() => ({ items })),
    createItem: (newItem) => set((state) => ({ items: [...state.items, newItem] })),
}));

