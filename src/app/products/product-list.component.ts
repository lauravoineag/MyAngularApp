import { Component, OnInit } from "@angular/core";
import { IProduct } from "./iproduct";
import { ProductService } from "./product.service";

@Component({
  selector:"a-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit{
  title:string = "Anime List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: string ="";
  
  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter=value;
    console.log("In setter:",value)
    this.filteredProducts = this.performFilter(value);
  }
  filteredProducts:IProduct[]=[];
  products: IProduct[] = [];
  
  constructor(private productService: ProductService){}

  performFilter = (filterBy: string): IProduct[]=> {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage():   void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }
  
  onRatingClicked(message:string): void {
    this.title = "Product List:" + message;
  }

}