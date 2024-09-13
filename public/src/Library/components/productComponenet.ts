import { ProductTemplate } from "../templates/productTemplate";

export class ProductComponent extends ProductTemplate
{
    Name = "Samsung TV";
    Price = 45000.44;
    Qty = 2;
    Total() {
        return this.Qty * this.Price;
    }
    Print(){
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
    }
}