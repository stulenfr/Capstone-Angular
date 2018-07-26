import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  yes():void{
    this.Productsvc.remove(this.product)
    .subscribe(resp=>{
      console.log(resp);
    });
    this.route.navigateByUrl('/product/list')
  }

  no():void{
    this.route.navigateByUrl('/product/list')
  }


  constructor(private Productsvc:ProductService, private routed:ActivatedRoute, private route: Router) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.Productsvc.get(id)
      .subscribe(resp=>{
        this.product= resp.Data;
        console.log(resp);
      })
  }

}
