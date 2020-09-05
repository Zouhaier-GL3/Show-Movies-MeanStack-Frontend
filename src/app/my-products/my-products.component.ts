import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {

  products: any;

  constructor(private data: DataService, private rest: RestApiService ,private router: Router) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get(
        'http://localhost:5000/api/seller/products'
      );
      data['success']
      ? (this.products = data['products'])
      : (this.data.error(data['message']));
    } catch (error) {
      this.data.error(error['message']);
    }
  }

  async deleteProduct(id) {
    try {
      const data = await this.rest.delete(`http://localhost:5000/api/seller/products/${id}`);
      /*data['success']
        ? this.router.navigate(['/profile/myproducts'])
            .then(() => this.data.success('product removed successfully'))
            .catch(error => this.data.error(error))
        : this.data.error('error');*/
      data['success'] ? (this.data.success('product removed successfully'),
      // this.products.filter(p => p.id !== id),
      this.router.navigate(['/profile']).then(() => this.router.navigate(['/profile/myproducts']))) : this.data.error('error');
    } catch (error) {
      this.data.error(error['message']);
    }
  }

  



}
