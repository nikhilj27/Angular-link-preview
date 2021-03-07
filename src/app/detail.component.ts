import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApidataService } from './apidata.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  public productDetail: any = null;
  public $productDetailObservable: Subscription = new Subscription();

  constructor(private apiDataService: ApidataService, private route: ActivatedRoute, private titleService: Title, private metaService: Meta) { }

  ngOnDestroy(): void {
    this.$productDetailObservable.unsubscribe();
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.getFakeProductDetail(+data.id);
    });
  }


  public getFakeProductDetail(productId: number): void{
    this.$productDetailObservable = this.apiDataService.getFakeProductDetail(productId).subscribe(
      (response) => {
        this.productDetail = response;
        this.titleService.setTitle(this.productDetail.title);
        this.metaService.addTags([
          {name: 'keywords', content: `${this.productDetail.category}, ${this.productDetail.title}`},
          {name: 'title', content: `${this.productDetail.title}`},
          {name: 'description', content: this.productDetail.description},
          {name: 'image', content: `${this.productDetail.image}`},
          {name: 'url', content: window.location.href},
          {name: 'type', content: 'website'},
          {name: 'robots', content: 'index, follow'},
          {name: 'og:description', content: this.productDetail.description},
          {name: 'og:keywords', content: `${this.productDetail.category}, ${this.productDetail.title}`},
          {name: 'og:title', content: `${this.productDetail.title}`},
          {name: 'og:url', content: window.location.href},
          {name: 'og:type', content: 'website'},
          {name: 'og:image', content: this.productDetail.image}
        ]);
        console.log(response);
      }
    );
  }

}
