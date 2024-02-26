import { Component, OnInit } from '@angular/core';
import { FirstService } from './appService/first.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular17';
  products: any[] = [];
  isDataVisible: boolean = false;
  constructor(private service: FirstService) {

  }


  ngOnInit(): void {
    // this.getTheProducts();
  }

  getTheProducts() {


    this.service.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res
        this.isDataVisible = !this.isDataVisible;
        console.log('this', this.products);
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

}
