import { IShoppingListItem } from "./shopping-list-item.interface";

export interface IShoppingList {
    id: number;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
    items: IShoppingListItem[];
}