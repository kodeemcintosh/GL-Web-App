
export class GroceryItem {
    constructor(
        private itemName?: string,
        private itemQuantity?: number
    ){
        this.name = itemName;
        this.quantity = itemQuantity;
    }
    public name: string;
    public quantity?: number;
}