import { IShoppingListItem } from "@core/interfaces/shopping-list-item.interface";

export class ShoppingListItem implements IShoppingListItem {
    name: string;
    quantity: number;
    value: number;

    constructor(name: string, quantity: number, value: number) {
        this.name = name;
        this.quantity = quantity;
        this.value = value;
    }

    get totalValue(): number {
        return this.quantity * this.value;
    }

    toString(): string {
        return `${this.name} - ${this.quantity} x $${this.value.toFixed(2)} = $${this.totalValue.toFixed(2)}`;
    }
}