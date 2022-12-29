import { Component, OnInit } from "@angular/core";
import { IProduct } from "./iproduct";

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
  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.4,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2021",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.3,
      "imageUrl": "assets/images/hammer.png"
    }
  ];

  performFilter = (filterBy: string): IProduct[]=> {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage():   void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this._listFilter="cart";
  }

}