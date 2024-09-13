import { ProductContract } from "../contracts/productContract";

export abstract class ProductTemplate implements ProductContract
{
    public Name:string = "";
    public Price:number = 0;
    public Qty:number = 0;
    abstract Total():number;
    abstract Print():void;
}