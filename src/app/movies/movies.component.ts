import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  products: any;

  constructor(private data: DataService, private rest: RestApiService ,  private router: Router) {}

  async ngOnInit() {
    try {
      const data = await this.rest.get('http://localhost:5000/api/products');
      data['success']
        ? (this.products = data['products'])
        : this.data.error('Could not fetch products.');
    } catch (error) {
      this.data.error(error['message']);
  
    } 
    
  } 
  MovieDetails(products: any):void {
    console.log(products);
    this.router.navigate(['product', this.products.id]);
  }
}
