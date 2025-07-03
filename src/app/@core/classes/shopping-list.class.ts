import { IShoppingList } from '@core/interfaces/shopping-list.interface';

export class ShoppingList implements IShoppingList {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  items: { name: string; quantity: number; value: number }[];

  constructor(data: IShoppingList) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.items = data.items || [];
  }

  addItem(item: { name: string; quantity: number; value: number }) {
    this.items.push(item);
    this.updatedAt = new Date();
  }

  removeItem(index: number) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
      this.updatedAt = new Date();
    }
  }

  updateItem(
    index: number,
    item: { name: string; quantity: number; value: number }
  ) {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = item;
      this.updatedAt = new Date();
    }
  }

  getTotalValue(): number {
    return this.items.reduce(
      (total, item) => total + item.quantity * item.value,
      0
    );
  }

  getItemCount(): number {
    return this.items.length;
  }

  getItem(
    index: number
  ): { name: string; quantity: number; value: number } | null {
    return index >= 0 && index < this.items.length ? this.items[index] : null;
  }
}
