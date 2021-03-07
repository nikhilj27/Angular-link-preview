import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: any[] = [];
  public $productObservable: Subscription = new Subscription();

  constructor(private apiDataService: ApidataService) {}

  ngOnInit(): void {
    this.getFakeProductList();
  }

  public getFakeProductList(): void{
    this.$productObservable = this.apiDataService.getFakeProducts().subscribe(
      (response) => {
        console.log(response);
        this.products = response;
      }
    );
  }

  ngOnDestroy(): void {
    this.$productObservable.unsubscribe();
  }

}
