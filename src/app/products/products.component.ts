import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

param: any;
  queryParam: any;

  constructor(private activatedRoute: ActivatedRoute,
              private service: ProductService) {
  }

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.params['username'];
    this.queryParam = this.activatedRoute.snapshot.queryParams['lastname'];
    this.service.getAllProductsWithLimit().subscribe(
      {
        next: (data) =>{
          console.log(data);
        }
      }
    )
  }
}
