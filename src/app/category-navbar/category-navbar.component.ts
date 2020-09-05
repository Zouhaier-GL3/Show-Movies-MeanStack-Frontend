import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {

  categories: any;

  newCategory = '';
  btnDisabled = false;

  constructor(
    private data: DataService,
    private rest: RestApiService
  ) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get(
        'http://localhost:5000/api/categories'
      );
      data['success']
        ? (this.categories = data['categories'])
        : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }
}
