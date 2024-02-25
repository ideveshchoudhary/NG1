import { Component, OnInit } from '@angular/core';
import { FirstService } from './appService/first.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular17';
  products: any[] = [];
  productImg: any;

  constructor(private service: FirstService, private DomSanitizer: DomSanitizer) {

  }


  ngOnInit(): void {
    this.getTheProducts();
  }

  getTheProducts() {

    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res
      this.productImg = res.images
      console.log('img', this.productImg);

      console.log('this', this.products);
    })
  }
}
